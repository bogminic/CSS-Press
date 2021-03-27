import './Code.scss';
import { maxNoOfCodeLinesSide } from '../../const/chapters';

interface CodeProps {
  beforeCode: {},
  afterCode: {},
  selector: string,
  linesOfCode: number,
  startHighlightCode: number,
  setHoverSelector: Function
}

function Code(props: CodeProps) {
  const { selector, linesOfCode, startHighlightCode, setHoverSelector } = props;

  const codeLinesSide: JSX.Element[] = [];

  //range [startRow,endRow]
  const highlightedRows: number[] = [startHighlightCode, startHighlightCode+linesOfCode];

  for (let i=1;i<= maxNoOfCodeLinesSide;i++) {
    codeLinesSide.push(
      <div key={i} className={(i>=highlightedRows[0] && i< highlightedRows[1] ? 'code__numbers--highlight' : '')}>{i}</div>
    )
  }

  const calculatedCodeHeight = linesOfCode * 24;

  const onHoverSelector = (selector: string) => {
    setHoverSelector(selector);
  }
    return (
      <div className="code">
        <div className="code__numbers">
          {codeLinesSide}
        </div>
        <div
        className="code__focus"
        onMouseEnter={() => onHoverSelector(selector)}
        onMouseLeave={() => onHoverSelector('')}>
          <div className="code__before">.{selector}</div>
          <textarea className="code__textarea" style={{height: calculatedCodeHeight +'px'}} ></textarea>
          <div className="code__after">{'}'}</div>
        </div>
        <button className="code__button">Next Level</button>
      </div>
    );
  }

export default Code;
