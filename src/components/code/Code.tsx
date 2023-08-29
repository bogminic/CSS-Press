import "./Code.scss";
import { maxNoOfCodeLinesSide } from "../../const/chapters";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buildSolutionsArray, getCodeLinesSide, isSolutionCorrect } from "../../utils/helpers";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TutorialMachineStates } from "../../machines/tutorialMachine";
import { createPortal } from "react-dom";
import Modal from "../modal/Modal";
import { localStorageNames } from "../../utils/constants";

interface CodeProps {
  beforeCode: string;
  afterCode: string;
  linesOfCode: number;
  startHighlightCode: number;
  setAnswer: Dispatch<SetStateAction<string>>;
  setSelector: Dispatch<SetStateAction<string>>;
  answer: string;
  solutions: string[][];
  chapterNumber: number | null;
  levelNumber: number | null;
  nextChapterNumber: number | null;
  nextLevelNumber: number | null;
  isArticleSliding: boolean;
  setIsArticleSliding: Dispatch<SetStateAction<boolean>>;
  currentTutorialState: any;
}

function Code(props: CodeProps) {
  const {
    beforeCode,
    afterCode,
    linesOfCode,
    startHighlightCode,
    answer,
    setAnswer,
    setSelector,
    solutions,
    chapterNumber,
    levelNumber,
    nextChapterNumber,
    nextLevelNumber,
    isArticleSliding,
    setIsArticleSliding,
    currentTutorialState
  } = props;

  let navigate = useNavigate();

  const [isHeartBeating, setIsHeartBeating] = useState(false);
  const [isCodeShaking, setIsCodeShaking] = useState(false);
  const [isWrongAnswer, setIsWrongAnswer] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);

  const setIsLevelSolved = useLocalStorage<string>(
    localStorageNames.getIsLevelSolved(chapterNumber || '', levelNumber || ''),
    "false"
  )[1];

  const shakeTimeoutRef = useRef<number | null>(null);
  useEffect(() => {
    if (isCodeShaking === false) {
      window.clearTimeout(shakeTimeoutRef.current || 0);
    }
  }, [isCodeShaking]);

  const slideTimeoutRef = useRef<number | null>(null);
  useEffect(() => {
    if (isArticleSliding === false) {
      window.clearTimeout(slideTimeoutRef.current || 0);
    }
  }, [isArticleSliding]);

  const codeLinesSide: JSX.Element[] = getCodeLinesSide(
    startHighlightCode,
    linesOfCode,
    maxNoOfCodeLinesSide
  );

  const calculatedCodeHeight = linesOfCode * 24;

  const solutionsArray = buildSolutionsArray(solutions);

  const handleChangeAnswer = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnswer(e.target.value);

    if (isWrongAnswer) {
      setIsWrongAnswer(false);
    }

    if (isSolutionCorrect(solutionsArray, e.target.value)) {
      setIsHeartBeating(true);
      setIsLevelSolved("true");
      return;
    }

    if (isHeartBeating === true) {
      setIsHeartBeating(false);
      setIsLevelSolved("false");
    }
  };

  const handleHoverEnter = () => {
    setSelector("misprint");
  };

  const handleHoverLeave = () => {
    setSelector("");
  };

  const checkAnswer = () => {

    // If the tutorial is not finished, don't check the answer
    if (!currentTutorialState.matches(TutorialMachineStates.finished) && !currentTutorialState.matches(TutorialMachineStates.complete)) {
      return;
    }

    if (isSolutionCorrect(solutionsArray, answer) && nextChapterNumber && nextLevelNumber) {
      goToNextLevelAndSlideOutArticle();
    } else {
      shakeCodeBox();
      setIsWrongAnswer(true);
    }
  };

  const shakeCodeBox = () => {
    setIsCodeShaking(true);
    shakeTimeoutRef.current = window.setTimeout(
      () => setIsCodeShaking(false),
      800
    );
  };

  const goToNextLevelAndSlideOutArticle = () => {
    setIsArticleSliding(true);
    slideTimeoutRef.current = window.setTimeout(() => {
      setIsHeartBeating(false);
      setIsArticleSliding(false);
      navigate(`/chapter/${nextChapterNumber}/level/${nextLevelNumber}`);
    }, 800);
  };

  const handleKeyPressCheckAnswer = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const noLinesInTextarea = answer.split(/\r|\r\n|\n/).filter((a) => a !== "").length;
      if (noLinesInTextarea >= linesOfCode) {
        if (nextChapterId) {
          checkAnswer();
        } else {
          finish();
        }
        
        event.preventDefault();
      }
    }
  };

  const goToDashboard = () => {
    navigate(`/`);
  }

  const finish = () => {

    // If the tutorial is not finished, don't check the answer
    if (!currentTutorialState.matches(TutorialMachineStates.finished) && !currentTutorialState.matches(TutorialMachineStates.complete)) {
      return;
    }

    if (isSolutionCorrect(solutionsArray, answer)) {
      setIsGameComplete(true);
    } else {
      shakeCodeBox();
      setIsWrongAnswer(true);
    }
  };

  return (
    <section
      className={
        isCodeShaking
          ? "code animate__animated animate__shakeX animate__faster"
          : "code"
      }
    >
      <ul className="code__numbers">{codeLinesSide}</ul>
      <article
        className="code__focus"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      >
        <p
          className="code__before"
          dangerouslySetInnerHTML={{ __html: beforeCode }}
        ></p>
        {linesOfCode === 1 && (
          <input
            className={
              isWrongAnswer ? "code__input code__input--error" : "code__input"
            }
            type="text"
            style={{ height: calculatedCodeHeight + "px" }}
            value={answer}
            onChange={handleChangeAnswer}
            onKeyPress={handleKeyPressCheckAnswer}
          ></input>
        )}
        {linesOfCode > 1 && (
          <textarea
            className={
              isWrongAnswer
                ? "code__textarea code__textarea--error"
                : "code__textarea"
            }
            style={{ height: calculatedCodeHeight + "px" }}
            value={answer}
            rows={linesOfCode}
            onChange={handleChangeAnswer}
            onKeyPress={handleKeyPressCheckAnswer}
          ></textarea>
        )}
        <p
          className="code__after"
          dangerouslySetInnerHTML={{ __html: afterCode }}
        ></p>
      </article>
      {nextChapterNumber ?
        <button
          type="button"
          className={
            isHeartBeating
              ? "code__button button animate__animated animate__pulse animate__infinite"
              : "code__button button"
          }
          onClick={checkAnswer}
        >
          Next Level
        </button>
        :
        <button
          type="button"
          className={
            isHeartBeating
              ? "code__button button animate__animated animate__pulse animate__infinite"
              : "code__button button"
          }
          onClick={finish}
        >
          Finish
        </button>}

        {createPortal(
        <Modal open={isGameComplete} className="modal">
          <h2 className="modal__title">Wanderer,</h2>
          <p>Congratulations!<br/>You've completed the CSS Press game with skill and determination. You've conquered all the challenges and emerged as a true CSS master. Well done!</p>
          <p>Feel free to replay the game to sharpen your skills even further. Keep up the fantastic work!</p>
          <footer className="modal__footer">
            <button className="button" onClick={goToDashboard}>Go to Dashboard</button>
          </footer>
        </Modal>, document.body as HTMLBodyElement)}
    </section>
  );
}

export default Code;
