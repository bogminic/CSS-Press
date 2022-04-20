import './Code.scss';
import { maxNoOfCodeLinesSide } from '../../const/chapters';

interface CodeProps {
  beforeCode: string,
  afterCode: string,
  linesOfCode: number,
  startHighlightCode: number
}

function Code(props: CodeProps) {
  const { beforeCode, afterCode, linesOfCode, startHighlightCode } = props;

  const codeLinesSide: JSX.Element[] = [];

  //range [startRow,endRow]
  const highlightedRows: number[] = [startHighlightCode, startHighlightCode+linesOfCode];

  for (let i=1;i<= maxNoOfCodeLinesSide;i++) {
    codeLinesSide.push(
      <div key={i} className={(i>=highlightedRows[0] && i< highlightedRows[1] ? 'code__numbers--highlight' : '')}>{i}</div>
    )
  }

  const calculatedCodeHeight = linesOfCode * 24;

    return (
      <div className="code">
        <div className="code__numbers">
          {codeLinesSide}
        </div>
        <div className="code__focus">
          <div className="code__before" dangerouslySetInnerHTML={{__html: beforeCode}}></div>
          <textarea className="code__textarea" style={{height: calculatedCodeHeight +'px'}} ></textarea>
          <div className="code__after" dangerouslySetInnerHTML={{__html: afterCode}}></div>
        </div>
        <button className="code__button button">Next Level</button>
      </div>
    );
  }

export default Code;
