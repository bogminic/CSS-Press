import React, {Component} from 'react';

import './Instructions.scss';
import { popups } from '../../const/popups';

interface InstructionsProps {
  chapterName: string,
  levelName: string,
  instructionsContent: Function
}

interface InstructionsState {
  popupContent: string,
  popupClass: string,
  popupStyle: {}
}

interface PopupsContent {
  [x:string]: string;
}

class Instructions extends Component<InstructionsProps, InstructionsState> {

  instructionsContentRef: React.RefObject<HTMLDivElement>;

  constructor(props: InstructionsProps) {
    super(props);
    this.loadCurrentPopups = this.loadCurrentPopups.bind(this);
    this.instructionsContentRef = React.createRef<HTMLDivElement>();
    this.state = {
      popupContent: '',
      popupClass: '',
      popupStyle: {}
    }

  }

  componentDidMount() {
    this.loadCurrentPopups();
  }

  loadCurrentPopups() {
    // const instructionsContent: HTMLDivElement | null = this.instructionsContentRef.current;
    // const keywords: HTMLDivElement[] = [].slice.call(instructionsContent?.getElementsByClassName('instructions__keyword'));
    // const popupsContent: PopupsContent = popups;
    // keywords.forEach(keyword => {
    //   console.log('keyword', keyword);
    //   console.log('keyword.innerText', keyword.innerText);
    //   const keywordContent: string = keyword.innerText;
    //   console.log('this.popupsContent', popupsContent);
    //   console.log('keywordContent', keywordContent);
    //   const popupContent: string = popupsContent[keywordContent];
    //   console.log('popupContent', popupContent);
    //   const keywordPosition: DOMRect = keyword.getBoundingClientRect();
    //   console.log('keywordPosition',keywordPosition);
    //   keyword.addEventListener('mouseover', () => this.handleKeywordHover(popupContent,keywordPosition));
    //   keyword.addEventListener('mouseleave', () => this.handleKeywordLeave());
    // })
  }

  handleKeywordHover(popupContent: string, keywordPosition: DOMRect) {
    console.log('handleKeywordHover',popupContent, keywordPosition);
    this.setState({
      popupContent: popupContent,
      popupClass: 'instructions__popup',
      popupStyle : {
        top: keywordPosition.top + 20,
        left: keywordPosition.left
      }
    })
  }

  handleKeywordLeave() {
    console.log('handleKeywordLeave');
    this.setState({
      popupContent: '',
      popupClass: '',
      popupStyle : {}
    })
  }
  

  render() {
    const { chapterName, levelName, instructionsContent } = this.props;
    const { popupContent, popupClass, popupStyle } = this.state;
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
        <div ref={this.instructionsContentRef} className="instructions__content">{instructionsContent('hide')}</div>
        <div className={popupClass} style={popupStyle} dangerouslySetInnerHTML={{__html:popupContent}}></div>
      </div>
    )
  }
}

export default Instructions;