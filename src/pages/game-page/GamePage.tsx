import React, { useEffect, useMemo, useRef, useState } from "react";
import { Navigate, useLocation, useParams, useNavigate } from "react-router-dom";

import Instructions from "../../components/instructions/Instructions";
import Code from "../../components/code/Code";
import Article from "../../components/article/Article";

import "./GamePage.scss";
import { getGameInfo } from "../../utils/helpers";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Modal from "../../components/modal/Modal";
import { createPortal } from "react-dom";
import { localStorageNames, tutorialStates } from "../../utils/constants";
import GameTutorial from "../../components/tutorial/game-tutorial/GameTutorial";
import CssPressNews from "../../components/tutorial/css-press-news/CssPressNews";


function GamePage() {

  const location = useLocation();
  const navigate = useNavigate();
  const storedPathname = useRef(location.pathname);

  const { chapterId, levelId } = useParams();

  const { currentChapter, currentLevel, nextChapterId, nextLevelId } = useMemo(
    () => getGameInfo(chapterId, levelId),
    [chapterId, levelId]
  );

  const [answer, setAnswer] = useLocalStorage<string>(`answer-${chapterId}-${levelId}`, "");

  const [selector, setSelector] = useState("");
  const [isArticleSliding, setIsArticleSliding] = useState(false);
  // To fix useLocalStorage not getting the value from localStorage on not first render
  const initialTutorialState = JSON.parse(localStorage.getItem(localStorageNames.tutorialState) || '""');
  const [tutorialState, setTutorialState] = useLocalStorage<string>(localStorageNames.tutorialState, initialTutorialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCSSNewspaperDisplayed, setIsCSSNewspaperDisplayed] = useState(false);

  useEffect(() => {
    if (!tutorialState && !isModalOpen) {
      if (location.pathname === '/chapter/1/level/1') {
        showTutorialModal();
      } else {
        navigate('/chapter/1/level/1');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, tutorialState]);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (location.pathname === '/chapter/1/level/2') {
      setTutorialState(tutorialStates.finished);
    }
  }, [isArticleSliding]);

  const showTutorialModal = () => {
    setIsCSSNewspaperDisplayed(true);
    window.setTimeout(() => {
      setIsModalOpen(true);
    }, 3100);
   
  }

  const startTutorial = () => {
    setIsModalOpen(false);
    setTutorialState(tutorialStates.running);
    setIsCSSNewspaperDisplayed(false);
  }

  const closeTutorialModal = () => {
    setIsModalOpen(false);
    setIsCSSNewspaperDisplayed(false);
    navigate(storedPathname.current);
    setTutorialState(tutorialStates.finished);
  }

  if (currentChapter === null || currentLevel === null) {
    return <Navigate replace to="/not-found" />;
  }

  const { chapterName } = currentChapter;
  const {
    levelName,
    instructions,
    beforeCode,
    afterCode,
    linesOfCode,
    startHighlightCode,
    articleContent,
    error,
    solutions,
    tipInfo,
    tipSelector
  } = currentLevel;

  return (
    <main className="game">
      <Instructions
        chapterName={chapterName}
        levelName={levelName}
        instructionsContent={instructions}
      />
      <Code
        beforeCode={beforeCode}
        afterCode={afterCode}
        linesOfCode={linesOfCode}
        startHighlightCode={startHighlightCode}
        answer={answer}
        setAnswer={setAnswer}
        setSelector={setSelector}
        solutions={solutions}
        chapterId={chapterId || null}
        levelId={levelId || null}
        nextChapterId={nextChapterId}
        nextLevelId={nextLevelId}
        setIsArticleSliding={setIsArticleSliding}
        isArticleSliding={isArticleSliding}
      />
      <Article
        articleContent={articleContent}
        answer={answer}
        error={error}
        selector={selector}
        isArticleSliding={isArticleSliding}
        tipInfo={tipInfo}
        tipSelector={tipSelector}
      />
      {isCSSNewspaperDisplayed && <CssPressNews isModalOpen={isModalOpen} />}
      {createPortal(
        <Modal open={isModalOpen}>
          <h2 className="modal__title">Hi, Wanderer</h2>
          <p>
            Welcome to CSS Press, where you will learn the basics of CSS while having fun along the way. Whould you like to play through the <strong>basics</strong> of the game?
          </p>
          <footer className="modal__footer">
            <button className="button mr-20" onClick={startTutorial}>Play through</button>
            <button className="button button--secondary" onClick={closeTutorialModal}>Skip</button>
          </footer>
        </Modal>, document.body as HTMLBodyElement)}
      {tutorialState === tutorialStates.running && createPortal(<GameTutorial setTutorialState={setTutorialState} />, document.body as HTMLBodyElement)}
    </main>
  );
}

export default GamePage;
