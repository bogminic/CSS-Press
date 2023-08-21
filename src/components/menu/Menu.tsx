import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Menu.scss";
import iconSquare from "./4-square.svg";
import openBook from "./open-book.svg";
import reset from "./reset.svg";
import iconX from "./x.svg";

import { chapters } from "../../const/chapters";
import { getStorageValue } from "../../hooks/useLocalStorage";
import { TutorialMachineStates } from './../../machines/tutorialMachine';
import { localStorageNames } from "../../utils/constants";
import { getChapterProgress } from "../../utils/helpers";

type Props = {
  currentTutorialState: any;
  send: (event: string) => void;
}

export default function Menu({ send, currentTutorialState }: Props) {
  const { chapterNumberParam, levelNumberParam } = useParams();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentTutorialState.matches(TutorialMachineStates.menu) && isMenuOpen) {
      send("NEXT");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTutorialState, isMenuOpen]);


  useEffect(() => {
    if (currentTutorialState.matches(TutorialMachineStates.finished)) {
      setMenuOpen(false);
    }
  }, [currentTutorialState]);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const playWalkthrough = () => {
    navigate(`/chapter/1/level/1`);
    send("PLAY");
    closeMenu();
  }

  const resetGame = () => {
    navigate(`/`);
    send("RESET");
    localStorage.clear();
  }

  const handleGoToLevel = (chapterIndex: number, levelIndex: number) => {
    // If the tutorial is not finished, don't navigate to another level
    if (!currentTutorialState.matches(TutorialMachineStates.finished)) {
      navigate(`/chapter/1/level/1`, {
        replace: true,
      });
      return;
    }

    navigate(`/chapter/${chapterIndex + 1}/level/${levelIndex + 1}`, {
      replace: true,
    });
    closeMenu();
  };

  const chapterItems = chapters.map((chapter, chapterIndex) => (
    <li key={chapterIndex + chapter.chapterName} className="menu__chapter">
      {chapter.chapterName} | {getChapterProgress(chapter, chapterIndex)}%
      <ul>
        {chapter.levels.map((level, levelIndex) => (
          <li
            key={chapterIndex + levelIndex}
            className="menu__level"
            onClick={() => handleGoToLevel(chapterIndex, levelIndex)}
          >
            <span
              className={`menu__number ${getStorageValue(localStorageNames.getIsLevelSolved(chapterIndex + 1, levelIndex + 1), "") === "true" &&
                "menu__number--light"
                }
              ${chapterNumberParam === (chapterIndex + 1).toString() &&
                levelNumberParam === (levelIndex + 1).toString() &&
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
      <button className="menu__open" onClick={openMenu} type="button">
        <img src={iconSquare} alt="Open menu" />
      </button>
      <section
        className={isMenuOpen ? "menu__list menu__list--open" : "menu__list"}
      >
        <button className="menu__close" onClick={closeMenu} type="button">
          <img src={iconX} alt="Close menu" />
        </button>
        <ul className="menu__items">
          {chapterItems}
          <li className="menu__actions">
            <button className="menu__action" type="button" onClick={playWalkthrough}> <img className="menu__icon" src={openBook} alt="Open Book" /> Play Walkthrough</button>
            <button className="menu__action" type="button" onClick={resetGame}> <img className="menu__icon" src={reset} alt="Open Book" /> Reset Game</button>
          </li>
        </ul>
      </section>
    </nav>
  );
}
