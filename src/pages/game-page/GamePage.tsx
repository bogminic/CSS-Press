import React, { useMemo, useState } from "react";
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
): {
  currentChapter: Chapter | null;
  currentLevel: Level | null;
  nextChapterId: number | null;
  nextLevelId: number | null;
} {
  if (
    !chapterId ||
    chapterId === "0" ||
    levelId === "0" ||
    !levelId ||
    !isNumeric(chapterId) ||
    !isNumeric(levelId)
  ) {
    return {
      currentChapter: null,
      currentLevel: null,
      nextChapterId: null,
      nextLevelId: null,
    };
  }
  const currentChapterIndex = parseInt(chapterId) - 1;
  const currentChapter: Chapter = chapters[currentChapterIndex];
  if (!currentChapter) {
    return {
      currentChapter: null,
      currentLevel: null,
      nextChapterId: null,
      nextLevelId: null,
    };
  }
  const currentLevelIndex = parseInt(levelId) - 1;
  const currentLevel: Level = currentChapter.levels[currentLevelIndex];
  if (!currentLevel) {
    return {
      currentChapter: null,
      currentLevel: null,
      nextChapterId: null,
      nextLevelId: null,
    };
  }

  let nextLevelId = currentChapter.levels[currentLevelIndex + 1]
    ? currentLevelIndex + 2
    : null;

  if (!nextLevelId) {
    const nextChapterId = chapters[currentChapterIndex + 1]
      ? currentChapterIndex + 2
      : null;
    nextLevelId = nextChapterId ? 1 : null;

    return { currentChapter, currentLevel, nextChapterId, nextLevelId };
  }

  const nextChapterId = currentChapterIndex + 1;

  return { currentChapter, currentLevel, nextChapterId, nextLevelId };
}

function GamePage() {
  const { chapterId, levelId } = useParams();

  const { currentChapter, currentLevel, nextChapterId, nextLevelId } = useMemo(
    () => getGameInfo(chapterId, levelId),
    [chapterId, levelId]
  );

  const [answer, setAnswer] = useState("");
  const [selector, setSelector] = useState("");

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
        nextChapterId={nextChapterId}
        nextLevelId={nextLevelId}
      />
      <Article
        articleContent={articleContent}
        answer={answer}
        error={error}
        selector={selector}
      />
    </main>
  );
}

export default GamePage;
