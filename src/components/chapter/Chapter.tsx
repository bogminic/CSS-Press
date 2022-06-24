import React from "react";
import "./Chapter.scss";

import { IChapter } from "../../models/Game";
import Level from "../level/Level";
import { Link } from "react-router-dom";
import { getStorageValue } from "../../hooks/useLocalStorage";

type Props = {
  chapter: IChapter;
  chapterNumber: number;
};

export default function Chapter({ chapter, chapterNumber}: Props) {
  const levelJSX = chapter.levels.map((level, levelIndex) => (
  <Link key={levelIndex} to={`chapter/${chapterNumber}/level/${levelIndex + 1}`}>
     <Level name={level.levelName} content={level.articleContent} solved={getStorageValue(`isLevelSolved-${chapterNumber}-${levelIndex + 1}`, "") !== "true"} />
  </Link>
  ));
  return (
    <section className="chapter">
      <h2 className="chapter__title">{chapter.chapterName} | 30%</h2>
      <div className="chapter__body">{levelJSX}</div>
    </section>
  );
}
