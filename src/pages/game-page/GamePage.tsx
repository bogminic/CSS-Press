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
import GameTutorial from "../../components/tutorial/game-tutorial/GameTutorial";
import CssPressNews from "../../components/tutorial/css-press-news/CssPressNews";
import { TutorialMachineStates } from "../../machines/tutorialMachine";
import { localStorageNames } from "../../utils/constants";
import { chapters } from "../../const/chapters";

type Props = {
  currentTutorialState: any;
  send: (event: string) => void;
}

function GamePage({currentTutorialState, send}: Props) {

  const location = useLocation();
  const navigate = useNavigate();
  const storedPathname = useRef(location.pathname);

  const { chapterNumberParam, levelNumberParam } = useParams();

  const { currentChapter, currentLevel,chapterNumber, levelNumber, nextChapterNumber, nextLevelNumber } = useMemo(
    () => getGameInfo(chapterNumberParam, levelNumberParam, chapters),
    [chapterNumberParam, levelNumberParam]
  );

  const [answer, setAnswer] = useLocalStorage<string>(localStorageNames.getLevelAnswer(chapterNumber || '', levelNumber || ''), "");

  const [selector, setSelector] = useState("");
  const [isArticleSliding, setIsArticleSliding] = useState(false);
  const [isLevelResolved, setIsLevelResolved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (currentTutorialState.matches(TutorialMachineStates.starting) && !isModalOpen) {
      if (location.pathname === '/chapter/1/level/1') {
        showTutorialModal();
      } else {
        navigate('/chapter/1/level/1');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, currentTutorialState, isModalOpen]);


  useEffect(() => {
    if (location.pathname === '/chapter/1/level/2') {
      send('NEXT');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isArticleSliding]);

  const showTutorialModal = () => {
    window.setTimeout(() => {
      setIsModalOpen(true);
    }, 3100);
   
  }

  const startTutorial = () => {
    setIsModalOpen(false);
    send('NEXT');
  }

  const closeTutorialModal = () => {
    setIsModalOpen(false);
    navigate(storedPathname.current);
    send('FINISHED');
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
    tipSelector,
    extraStyle
  } = currentLevel;

  return (
    <section className="game">
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
        chapterNumber={chapterNumber || null}
        levelNumber={levelNumber || null}
        nextChapterNumber={nextChapterNumber}
        nextLevelNumber={nextLevelNumber}
        setIsArticleSliding={setIsArticleSliding}
        isArticleSliding={isArticleSliding}
        isLevelResolved={isLevelResolved}
        setIsLevelResolved={setIsLevelResolved}
        currentTutorialState={currentTutorialState}
      />
      <Article
        articleContent={articleContent}
        answer={answer}
        error={error}
        selector={selector}
        isArticleSliding={isArticleSliding}
        isLevelResolved={isLevelResolved}
        tipInfo={tipInfo}
        tipSelector={tipSelector}
        extraStyle={extraStyle}
      />

      {/* Tutorial */}
      {currentTutorialState.matches(TutorialMachineStates.starting) && <CssPressNews isModalOpen={isModalOpen} />}
      {createPortal(
        <Modal open={isModalOpen} className="modal modal--tutorial">
          <h2 className="modal__title">Hi, Wanderer</h2>
          <p>
            Welcome to CSS Press, where you will learn the basics of CSS while having fun along the way. Whould you like to play through the <strong>basics</strong> of the game?
          </p>
          <footer className="modal__footer">
            <button className="button mr-20" type="button" onClick={startTutorial}>Play through</button>
            <button className="button button--secondary" type="button" onClick={closeTutorialModal}>Skip</button>
          </footer>
        </Modal>, document.body as HTMLBodyElement)}
      {!currentTutorialState.matches(TutorialMachineStates.finished) && createPortal(
      <GameTutorial
        currentTutorialState={currentTutorialState}
        send={send} />, document.body as HTMLBodyElement)}
    </section>
  );
}

export default GamePage;
