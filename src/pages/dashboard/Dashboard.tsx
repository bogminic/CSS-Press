import React from "react";
import "./Dashboard.scss";
import { chapters } from "../../const/chapters";
import Chapter from "../../components/chapter/Chapter";

export default function Dashboard() {
  const chaptersJSX = chapters.map((chapter, i) => (
    <Chapter key={i} chapter={chapter} chapterNumber={i + 1} />
  ));

  return (
    <div className="dashboard">
      <div className="dashboard__content">
        <article className="dashboard__wrapper">{chaptersJSX}</article>
      </div>
    </div>
  );
}
