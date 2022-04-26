import "./Code.scss";
import { maxNoOfCodeLinesSide } from "../../const/chapters";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

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

  const codeLinesSide: JSX.Element[] = [];

  //range [startRow,endRow]
  const highlightedRows: number[] = [
    startHighlightCode,
    startHighlightCode + linesOfCode,
  ];

  for (let i = 1; i <= maxNoOfCodeLinesSide; i++) {
    codeLinesSide.push(
      <div
        key={i}
        className={
          i >= highlightedRows[0] && i < highlightedRows[1]
            ? "code__numbers--highlight"
            : ""
        }
      >
        {i}
      </div>
    );
  }

  const calculatedCodeHeight = linesOfCode * 24;

  const handleChangeAnswer = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
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

  return (
    <div className="code">
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
        <textarea
          className="code__textarea"
          style={{ height: calculatedCodeHeight + "px" }}
          value={answer}
          onChange={handleChangeAnswer}
        ></textarea>
        <div
          className="code__after"
          dangerouslySetInnerHTML={{ __html: afterCode }}
        ></div>
      </div>
      <button className="code__button button" onClick={handleCheckAnswer}>
        Next Level
      </button>
    </div>
  );
}

export default Code;
