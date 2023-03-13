import React, { useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import Instructions from "../../components/instructions/Instructions";
import Code from "../../components/code/Code";
import Article from "../../components/article/Article";

import "./GamePage.scss";
import { getGameInfo } from "../../utils/helpers";
import { useLocalStorage } from "../../hooks/useLocalStorage";


function GamePage() {
  const { chapterId, levelId } = useParams();

  const { currentChapter, currentLevel, nextChapterId, nextLevelId } = useMemo(
    () => getGameInfo(chapterId, levelId),
    [chapterId, levelId]
  );

  const [answer, setAnswer] = useLocalStorage<string>(`answer-${chapterId}-${levelId}`, "");

  const [selector, setSelector] = useState("");
  const [isArticleSliding, setIsArticleSliding] = useState(false);

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
    solution,
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
        solution={solution}
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
    </main>
  );
}

export default GamePage;
