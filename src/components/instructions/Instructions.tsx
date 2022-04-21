import React, { Component } from "react";
import parse, { DOMNode, HTMLReactParserOptions } from "html-react-parser";
import { Element, Text } from "domhandler";

import "./Instructions.scss";
import { tooltips } from "../../const/tooltips";

interface InstructionsProps {
  chapterName: string;
  levelName: string;
  instructionsContent: string;
}

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (
      domNode instanceof Element &&
      domNode.attribs &&
      domNode.name === "code"
    ) {
      const propertyNode = domNode.children[0];
      // Check if in <code> we have only one Text node
      if (propertyNode instanceof Text && domNode.children.length === 1) {
        const property = propertyNode.data;
        const propertyDefinition = tooltips[property.toLocaleLowerCase()];
        return (
          <>
            <code className="tooltip">
              {property}
              {propertyDefinition && (
                <span data-testid="tooltip" className="tooltip__content">
                  {parse(propertyDefinition)}
                </span>
              )}
            </code>
          </>
        );
      }
    }
  },
};

function createInstructionsContent(instructionsContent: string) {
  return parse(instructionsContent, options);
}

class Instructions extends Component<InstructionsProps> {
  render() {
    const { chapterName, levelName, instructionsContent } = this.props;
    const content = createInstructionsContent(instructionsContent);
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
        <div className="instructions__content">{content}</div>
      </div>
    );
  }
}

export default Instructions;
