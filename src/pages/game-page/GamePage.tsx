import React from "react";
import { Navigate, useParams } from "react-router-dom";

import Instructions from "../../components/instructions/Instructions";
import Code from "../../components/code/Code";
import Article from "../../components/article/Article";

import { chapters } from "../../const/chapters";

import "./GamePage.scss";
import { isNumeric } from "../../utils/helpers";
import { Level, Chapter } from "../../models/Game";

function getGameInfo(
  chapterId: string | undefined,
  levelId: string | undefined
): { currentChapter: Chapter | null; currentLevel: Level | null } {
  if (
    !chapterId ||
    chapterId === "0" ||
    levelId === "0" ||
    !levelId ||
    !isNumeric(chapterId) ||
    !isNumeric(levelId)
  ) {
    return { currentChapter: null, currentLevel: null };
  }

  const currentChapter: Chapter = chapters[parseInt(chapterId) - 1];
  if (!currentChapter) {
    return { currentChapter: null, currentLevel: null };
  }

  const currentLevel: Level = currentChapter.levels[parseInt(levelId) - 1];
  if (!currentLevel) {
    return { currentChapter: null, currentLevel: null };
  }

  return { currentChapter, currentLevel };
}


function GamePage() {
  const { chapterId, levelId } = useParams();
  const { currentChapter, currentLevel } = getGameInfo(chapterId, levelId);

  if (currentChapter === null || currentLevel === null) {
    return <Navigate replace to="/not-found" />;
  }

  return (
    <main className="game">
      <Instructions
        chapterName={currentChapter.chapterName}
        levelName={currentLevel.levelName}
        instructionsContent={currentLevel.instructions}
      />
      <Code
        beforeCode={currentLevel.beforeCode}
        afterCode={currentLevel.afterCode}
        linesOfCode={currentLevel.linesOfCode}
        startHighlightCode={currentLevel.startHighlightCode}
      />
      <Article articleContent={currentLevel.articleContent} />
    </main>
  );
}

export default GamePage;
