import React from "react";
import parse, { HTMLReactParserOptions, DOMNode, Element } from "html-react-parser";
import { updateImage } from "../../utils/helpers";

import "./Level.scss";

type Props = {
  name: string;
  content: string;
  solved: boolean
};

const options: HTMLReactParserOptions = {
  replace(domNode: DOMNode) {
    if (domNode instanceof Element && domNode.name === 'img') {
      return updateImage(domNode);
    }
  },
};

function createArticleContent(articleContent: string) {
  return parse(articleContent, options);
}

export default function Level({ name, content, solved }: Props) {
  return (
    <button className="level" type="button">
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
