import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Menu.scss";
import iconSquare from "./4-square.svg";
import openBook from "./open-book.svg";
import reset from "./reset.svg";
import iconX from "./x.svg";

import { chapters } from "../../const/chapters";
import { getStorageValue, useLocalStorage, } from "../../hooks/useLocalStorage";
import { localStorageNames, tutorialStates } from "../../utils/constants";
import { TutorialMachineStates } from './../../machines/tutorialMachine';

type Props = {
  state: any;
  send: (event: string) => void;
}

export default function Menu({ send, state }: Props) {
  const { chapterId, levelId } = useParams();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [tutorialState, setTutorialState] = useLocalStorage<string>(localStorageNames.tutorialState, "");

  useEffect(() => {
    if (tutorialState !== tutorialStates.finished && isMenuOpen && state.matches(TutorialMachineStates.menu)) {
      send("NEXT");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tutorialState, isMenuOpen]);


  useEffect(() => {
    if (state.matches(TutorialMachineStates.finished)) {
      setTutorialState(tutorialStates.finished);
      setMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const playWalkthrough = () => {
    navigate(`/chapter/1/level/1`);
    setTutorialState(tutorialStates.running)
    send("RESET");
    closeMenu();
  }

  const resetGame = () => {
    navigate(`/`);
    send("RESET");
    localStorage.clear();
  }

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
            key={chapterIndex + levelIndex}
            className="menu__level"
            onClick={() => handleGoToLevel(chapterIndex, levelIndex)}
          >
            <span
              className={`menu__number ${getStorageValue(`is-level-solved-${chapterIndex + 1}-${levelIndex + 1}`, "") === "true" &&
                "menu__number--light"
                }
              ${chapterId === (chapterIndex + 1).toString() &&
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
        <ul className="menu__items">
          {chapterItems}
          <li className="menu__actions">
            <button className="menu__action" type="button" onClick={playWalkthrough}> <img className="menu__icon" src={openBook} alt="Open Book" /> Play Walkthrough</button>
            <button className="menu__action" type="button" onClick={resetGame}> <img className="menu__icon" src={reset} alt="Open Book" /> Reset Game</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
