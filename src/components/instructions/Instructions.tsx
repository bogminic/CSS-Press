import React, {Component} from 'react';

import './Instructions.scss';

interface InstructionsProps {
  chapterName: string,
  levelName: string,
  instructionsContent: string
}

class Instructions extends Component<InstructionsProps> {
  render() {
    const { chapterName, levelName, instructionsContent } = this.props;
    return (
      <div className="instructions">
        <div className="instructions__header">
          <div className="instructions__title">
            <div className="instructions__chapter">{chapterName}</div>
            <div className="instructions__separator">|</div>
            <div className="instructions__level">{levelName}</div>
          </div>
          <div className="instructions__lines">
            <div className="instructions__lines--50"></div>
            <div className="instructions__lines--100"></div>
          </div>
        </div>
        <div className="instructions__content" dangerouslySetInnerHTML={{__html: instructionsContent}}></div>
      </div>
    )
  }
}

export default Instructions;
