import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Menu.scss";
import iconSquare from "./4-square.svg";
import iconX from "./x.svg";

import { chapters } from "../../const/chapters";
import { getStorageValue, } from "../../hooks/useLocalStorage";

export default function Menu() {
  const { chapterId, levelId } = useParams();
  const [isMenuOpen, setMenuOpen] = useState(false);
  let navigate = useNavigate();

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleGoToLevel = (chapterIndex: number, levelIndex: number) => {
    navigate(`/chapter/${chapterIndex + 1}/level/${levelIndex + 1}`, {
      replace: true,
    });
    closeMenu();
  };

  const chapterItems = chapters.map((chapter, chapterIndex) => (
    <li key={chapterIndex + chapter.chapterName} className="menu__chapter">
      {chapter.chapterName} | 30%
      <ul>
        {chapter.levels.map((level, levelIndex) => (
          <li
            key={chapterIndex + level.solution}
            className="menu__level"
            onClick={() => handleGoToLevel(chapterIndex, levelIndex)}
          >
            <span
              className={`menu__number ${
                getStorageValue(`is-level-solved-${chapterIndex + 1}-${levelIndex + 1}`, "") === "true" &&
                "menu__number--light"
              }
              ${
                chapterId === (chapterIndex + 1).toString() &&
                levelId === (levelIndex + 1).toString() &&
                "menu__number--orange"
              } 
              `}
            >
              {levelIndex + 1}
            </span>
            {level.levelName}
          </li>
        ))}
      </ul>
    </li>
  ));
  return (
    <nav className="menu">
      <button className="menu__open" onClick={openMenu}>
        <img src={iconSquare} alt="Open menu" />
      </button>
      <div
        className={isMenuOpen ? "menu__list menu__list--open" : "menu__list"}
      >
        <button className="menu__close" onClick={closeMenu}>
          <img src={iconX} alt="Close menu" />
        </button>
        <ul className="menu__items">{chapterItems}</ul>
      </div>
    </nav>
  );
}
