import { chapters } from "../const/chapters";
import { getStorageValue } from "../hooks/useLocalStorage";
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
      <li
        key={i}
        className={
          i >= highlightedRows[0] && i < highlightedRows[1]
            ? "code__numbers--highlight"
            : ""
        }
      >
        {i}
      </li>
    );
  }
  return codeLinesSide;
}

export function buildSolutionsArray(solutions: string[][]): string[] {
  const solutionsArray: string[] = [];
  let solutionElement;
  solutions.forEach((solution) => {
    const key = solution[0];
    solution.forEach((element, index) => {
      if (index >= 1) {
        solutionElement = key+':'+ element;
        solutionsArray.push(solutionElement);
      }
    })
  })
  return solutionsArray;
}

export function buildKeys(elements: string[]): Set<string> {
  let allKeys: string[] = [];
  elements.forEach((elem) => {
    const key = elem.split(":")[0];
    allKeys.push(key);
  })

  let allUniqueKeys = new Set(allKeys);
  return allUniqueKeys;
}

export function isSolutionCorrect(solutions: string[], answer: string): boolean {
  if (answer === '') {
    return false;
  }

  const solutionNoSpaces = solutions
    .map(solution => {
      solution
       .replace(/ /g, "")
       .split(";")
       .filter((s) => s !== "");
      return solution;
    })
    
  const answerNoSpaces = answer
    .replace(/[\r\n ]/g, "")
    .split(";")
    .filter((s) => s !== "");

  const uniqueSolutionsKeys = buildKeys(solutionNoSpaces);
  const uniqueAnswerKeys = buildKeys(answerNoSpaces);
  const sameKeys = uniqueSolutionsKeys.size === uniqueAnswerKeys.size && Array.from(uniqueSolutionsKeys).every(value => uniqueAnswerKeys.has(value));
  const isAnswerIncludedIntoSolution = answerNoSpaces.every((answer) => solutionNoSpaces.includes(answer));
  
  return isAnswerIncludedIntoSolution && sameKeys;
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

export function getChapterProgress(chapter: IChapter, chapterIndex: number) {
  const noOfLevelsSolved = chapter.levels.filter((level, levelIndex) => getStorageValue('is-level-solved-' + (chapterIndex+1) + '-' + (levelIndex + 1), "") === "true").length;
  const noOfLevelsTotal = chapter.levels.length;
  return Math.round(noOfLevelsSolved / noOfLevelsTotal * 100);
}