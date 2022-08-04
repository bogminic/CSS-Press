import React from "react";
import "./Dashboard.scss";
import { chapters } from "../../const/chapters";
import Chapter from "../../components/chapter/Chapter";

export default function Dashboard() {
  const chaptersJSX = chapters.map((chapter, i) => (
    <Chapter key={i} chapter={chapter} chapterNumber={i + 1} />
  ));

  return (
    <main className="dashboard">
      <div className="dashboard__content">
        <div className="dashboard__wrapper">{chaptersJSX}</div>
      </div>
    </main>
  );
}
