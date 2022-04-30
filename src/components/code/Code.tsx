import "./Code.scss";
import { maxNoOfCodeLinesSide } from "../../const/chapters";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCodeLinesSide } from "../../utils/helpers";

interface CodeProps {
  beforeCode: string;
  afterCode: string;
  linesOfCode: number;
  startHighlightCode: number;
  setAnswer: Dispatch<SetStateAction<string>>;
  setSelector: Dispatch<SetStateAction<string>>;
  answer: string;
  solution: string;
  nextChapterId: number | null;
  nextLevelId: number | null;
  isArticleSliding: boolean;
  setIsArticleSliding: Dispatch<SetStateAction<boolean>>;
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
    solution,
    nextChapterId,
    nextLevelId,
    isArticleSliding,
    setIsArticleSliding,
  } = props;

  let navigate = useNavigate();

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isCodeShaking, setIsCodeShaking] = useState(false);

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

  const handleChangeAnswer = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    setAnswer(e.target.value);
    if (solution === e.target.value) {
      setIsCorrectAnswer(true);
      return;
    }

    if (isCorrectAnswer === true) {
      setIsCorrectAnswer(false);
    }
  };

  const handleHoverEnter = () => {
    setSelector("misprint");
  };

  const handleHoverLeave = () => {
    setSelector("");
  };

  const checkAnswer = () => {
    if (solution === answer && nextChapterId && nextLevelId) {
      goToNextLevelAndSlideOutArticle()
    } else {
      shakeCodeBox();
    }
  };

  const shakeCodeBox = () => {
    setIsCodeShaking(true);
    shakeTimeoutRef.current = window.setTimeout(() => setIsCodeShaking(false), 800);
  };

  const goToNextLevelAndSlideOutArticle = () => {
    setIsArticleSliding(true);
    slideTimeoutRef.current = window.setTimeout(() => {
      setAnswer("");
      setIsCorrectAnswer(false);
      setIsArticleSliding(false);
      navigate(`/chapter/${nextChapterId}/level/${nextLevelId}`, {
        replace: true,
      });
    }, 800);
  };

  const handleKeyPressCheckAnswer = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  };

  return (
    <div
      className={
        isCodeShaking
          ? "code animate__animated animate__shakeX animate__faster"
          : "code"
      }
    >
      <div className="code__numbers">{codeLinesSide}</div>
      <div
        className="code__focus"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      >
        <div
          className="code__before"
          dangerouslySetInnerHTML={{ __html: beforeCode }}
        ></div>
        {linesOfCode === 1 && (
          <input
            className="code__input"
            type="text"
            style={{ height: calculatedCodeHeight + "px" }}
            value={answer}
            onChange={handleChangeAnswer}
            onKeyPress={handleKeyPressCheckAnswer}
          ></input>
        )}
        {linesOfCode > 1 && (
          <textarea
            className="code__textarea"
            style={{ height: calculatedCodeHeight + "px" }}
            value={answer}
            rows={linesOfCode}
            onChange={handleChangeAnswer}
            onKeyPress={handleKeyPressCheckAnswer}
          ></textarea>
        )}
        <div
          className="code__after"
          dangerouslySetInnerHTML={{ __html: afterCode }}
        ></div>
      </div>
      {nextChapterId && <button
        className={
          isCorrectAnswer
            ? "code__button button animate__animated animate__pulse animate__infinite"
            : "code__button button"
        }
        onClick={checkAnswer}
      >
        Next Level
      </button>}
    </div>
  );
}

export default Code;
