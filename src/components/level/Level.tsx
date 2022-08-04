import React from "react";
import parse from "html-react-parser";

import "./Level.scss";

type Props = {
  name: string;
  content: string;
  solved: boolean
};


function createArticleContent(articleContent: string) {
  return parse(articleContent);
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
