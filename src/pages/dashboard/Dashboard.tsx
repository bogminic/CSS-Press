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
            <p className="description__text">Uncover the tales of mythical creatures that roam the misty peaks and verdant valleys, learning their behaviors and protective strategies along the way. From the elusive strigoi to the majestic zmeu, each creature holds a lesson waiting to be learned. But beware, for challenges and obstacles lie in wait, testing not only your CSS prowess but also your courage and ingenuity. Now is your chance to repair the CSS Press machine and forge a newspaper to shield the Carpathian Mountains. Engage in an epic voyage of learning and adventure!</p>
          </section>
        </article>
        <h2 className="dashboard__wrapper-title">Choose a level and start playing with CSS</h2>
        <article className="dashboard__wrapper">{chaptersJSX}</article>
      </div>
    </div>
  );
}
