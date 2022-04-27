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
  } = props;

  let navigate = useNavigate();

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isCodeShaking, setIsCodeShaking] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  useEffect(() => {
    if (isCodeShaking === false) {
      window.clearTimeout(timeoutRef.current || 0);
    }
  }, [isCodeShaking]);

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

  const handleCheckAnswer = () => {
    if (solution === answer && nextChapterId && nextLevelId) {
      navigate(`/chapter/${nextChapterId}/level/${nextLevelId}`, {
        replace: true,
      });
    }
  };

  const handleKeyPressCheckAnswer = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      if (solution === answer && nextChapterId && nextLevelId) {
        navigate(`/chapter/${nextChapterId}/level/${nextLevelId}`, {
          replace: true,
        });
      } else {
        setIsCodeShaking(true);
        timeoutRef.current = window.setTimeout(
          () => setIsCodeShaking(false),
          1000
        );
      }
    }
  };

  return (
    <div
      className={
        isCodeShaking ? "code animate__animated animate__shakeX" : "code"
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
      <button
        className={
          isCorrectAnswer
            ? "code__button button animate__animated animate__pulse animate__infinite animate__slow"
            : "code__button button"
        }
        onClick={handleCheckAnswer}
      >
        Next Level
      </button>
    </div>
  );
}

export default Code;
