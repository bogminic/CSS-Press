import React, { Component } from "react";
import parse, { DOMNode, HTMLReactParserOptions, Element } from "html-react-parser";


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
      domNode.name === "code"
    ) {
      const propertyNode = domNode.children[0];
      // Check if in <code> we have only one Text node
      if (propertyNode.type === 'text' && domNode.children.length === 1) {
        const property = propertyNode.data;
        const propertyDefinition = tooltips[property.toLocaleLowerCase()];
        return (
          <>
            <mark className="tooltip">
              {property}
              {propertyDefinition && (
                <details className="tooltip__content">
                  <summary>{parse(propertyDefinition)}</summary>
                </details>
              )}
            </mark>
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
      <section className="instructions">
        <header className="instructions__header">
          <h2 className="instructions__title">
            {chapterName.toUpperCase()}
            <span className="instructions__separator">|</span>
            {levelName.toLowerCase()}
          </h2>
          <div className="instructions__lines">
            <div className="instructions__lines--50"></div>
            <div className="instructions__lines--100"></div>
          </div>
        </header>
        <article className="instructions__content">{content}</article>
      </section>
    );
  }
}

export default Instructions;
