import './Code.scss';

interface CodeProps {
  
}

function Code(props: CodeProps) {
  const noOfcodeLines : number = 13;
  const codeLines: JSX.Element[] = [];

  //range [startRow,endRow]
  const highlightedRows: number[] = [2,2];

  for (let i=1;i<= noOfcodeLines;i++) {
    codeLines.push(
      <div key={i} className={(i>=highlightedRows[0] && i<= highlightedRows[1] ? 'code__numbers--highlight' : '')}>{i}</div>
    )
  }
  const beforeCode = '.paragraph-answer {';
  const afterCode = '}';
    return (
      <div className="code">
        <div className="code__numbers">
          {codeLines}
        </div>
        <div className="code__focus">
          <pre className="code__before">{beforeCode}</pre>
          <textarea className="code__textarea" style={{height: '24px'}} ></textarea>
          <pre className="code__after">{afterCode}</pre>
        </div>
        <button className="code__button">Next Level</button>
      </div>
    );
  }

export default Code;
