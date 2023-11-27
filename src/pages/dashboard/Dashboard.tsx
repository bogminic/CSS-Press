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
        <h1 className="dashboard__title">Welcome to CSS Press</h1>
        <article className="dashboard__description-wrapper">
          <section className="dashboard__description">
            <h2 className="description__title">Breaking news!</h2>
            <h3 className="description__subtitle">Master CSS through gameplay and delve into the world of mythical creatures!</h3>
            <p className="description__text">CSS Press is an educational game designed to teach you the fundamentals of CSS properties, spanning from text properties to the box model. The adventure goes beyond mere learning, as you'll have the responsibility of repairing the aging CSS Press machine, laden with errors. Once functional, this unique device becomes your tool for crafting  a vital newspaper that contributes to the well-being of those living near the Carpathian mountains. Within its pages, this publication will offer insights into mythological creatures, their behaviours and protective strategies. By engaging in this captivating journey, you'll not only gain expertise in CSS properties, but also explore the intriguing realm of Carpathian mountain mythology. It's a chance to enhance your CSS skills while immersing yourself in a universe of learning and creativity.</p>
          </section>
        </article>
        <h2 className="dashboard__wrapper-title">Choose a level and start playing with CSS</h2>
        <article className="dashboard__wrapper">{chaptersJSX}</article>
      </div>
    </div>
  );
}
