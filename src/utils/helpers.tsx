import { chapters } from "../const/chapters";
import { IChapter, ILevel } from "../models/Game";

export function isNumeric(value: string | undefined): boolean {
  if (!value) return false;
  return /^\d+$/.test(value);
}

export function getCodeLinesSide(
  startHighlightCode: number,
  linesOfCode: number,
  maxNoOfCodeLinesSide: number
) {
  const codeLinesSide: JSX.Element[] = [];

  const highlightedRows: number[] = [
    startHighlightCode,
    startHighlightCode + linesOfCode,
  ];

  for (let i = 1; i <= maxNoOfCodeLinesSide; i++) {
    codeLinesSide.push(
      <div
        key={i}
        className={
          i >= highlightedRows[0] && i < highlightedRows[1]
            ? "code__numbers--highlight"
            : ""
        }
      >
        {i}
      </div>
    );
  }
  return codeLinesSide;
}

export function isSolutionCorrect(solution: string, answer: string): boolean {
  if (!solution.includes(":")) {
    return false;
  }

  if (answer === '') {
    return false;
  }

  const solutionNoSpaces = solution
    .replace(/ /g, "")
    .split(";")
    .filter((s) => s !== "");
  const answerNoSpaces = answer
    .replace(/[\r\n ]/g, "")
    .split(";")
    .filter((s) => s !== "");

  return answerNoSpaces.every((answer) => solutionNoSpaces.includes(answer));
}

/**
 * Return game information (current Chapter/Level and next Chapter/Level ids)
 * @param chapterId 
 * @param levelId 
 * @returns 
 */
export function getGameInfo(
  chapterId: string | undefined,
  levelId: string | undefined
): {
  currentChapter: IChapter | null;
  currentLevel: ILevel | null;
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
  const currentChapter: IChapter = chapters[currentChapterIndex];
  if (!currentChapter) {
    return {
      currentChapter: null,
      currentLevel: null,
      nextChapterId: null,
      nextLevelId: null,
    };
  }
  const currentLevelIndex = parseInt(levelId) - 1;
  const currentLevel: ILevel = currentChapter.levels[currentLevelIndex];
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