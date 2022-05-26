import React from "react";
import parse, { DOMNode, HTMLReactParserOptions } from "html-react-parser";
import { Element, Text } from "domhandler";

import "./Level.scss";

type Props = {
  name: string;
  content: string;
  solved: boolean
};

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (
      domNode instanceof Element &&
      domNode.attribs &&
      domNode.name === "misprint"
    ) {
      const propertyNode = domNode.children[0];
      if (propertyNode instanceof Text && domNode.children.length === 1) {
        const item = propertyNode.data;
        return (
          <>
            {parse(item)}
          </>
        );
      }
    }
  },
};

function createArticleContent(articleContent: string) {
  return parse(articleContent, options);
}

export default function Level({ name, content, solved }: Props) {
  return (
    <button className="level">
      <h3 className="level__title">{name}</h3>
      <div className="level__bkg">
        <div className={solved ? "level__wrapper" : "level__wrapper level__wrapper--unfinished"}>
          {!solved && <div className="level__right-line"></div>}
          {!solved && <div className="level__left-line"></div>}
          <article className="level__content">{createArticleContent(content)}</article>
        </div>
      </div>
    </button>
  );
}
