import './Code.scss';
import { maxNoOfCodeLinesSide } from '../../const/chapters';
import React from 'react';

interface CodeProps {
  beforeCode: {},
  afterCode: {},
  selector: string,
  linesOfCode: number,
  startHighlightCode: number,
  setHoverSelector: Function
}

function Code(props: CodeProps) {
  const { selector, linesOfCode, startHighlightCode, setHoverSelector, afterCode, beforeCode } = props;

  const codeLinesSide: JSX.Element[] = [];

  const highlightedRows: number[] = [startHighlightCode, startHighlightCode + linesOfCode];

  for (let i = 1; i <= maxNoOfCodeLinesSide; i++) {
    codeLinesSide.push(
      <div key={i} className={(i >= highlightedRows[0] && i < highlightedRows[1] ? 'code__numbers--highlight' : '')}>{i}</div>
    )
  }

  const calculatedCodeHeight = linesOfCode * 24;

  const onHoverSelector = (selector: string) => {
    setHoverSelector(selector);
  }

  const camelCaseToDash = (string:string) => {
    return string.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
  }

  const complementaryCSS = (css: { [key: string]: { [key: string]: string } }) => (
    <React.Fragment>
      {Object.keys(css).map((selector, i) => (
        <div className="code__focus">
          <div
            key={i + selector}
            className="code__css code__css--complementary"
            onMouseEnter={() => onHoverSelector(selector)}
            onMouseLeave={() => onHoverSelector('')}
          >
            .{selector} {'{'} <br />
            {Object.keys(css[selector]).map((property, i) => (
              <div key={i + selector + property} className="code__property">
                {camelCaseToDash(property)}: {css[selector][property]};
              </div>
            ))}
            {'}'}
          </div>
        </div>
      ))}
    </React.Fragment>
  )
  return (
    <div className="code">
      <div className="code__numbers">
        {codeLinesSide}
      </div>
      <div>
        {complementaryCSS(beforeCode)}
        <div
          className="code__focus"
          onMouseEnter={() => onHoverSelector(selector)}
          onMouseLeave={() => onHoverSelector('')}>
          <div className="code__css">.{selector}</div>
          <textarea className="code__textarea" style={{ height: calculatedCodeHeight + 'px' }} ></textarea>
          <div className="code__css">{'}'}</div>
        </div>
        {complementaryCSS(afterCode)}
      </div>

      <button className="code__button">Next Level</button>
    </div>
  );
}

export default Code;
