export const localStorageNames = {
    tutorialState: 'tutorial-state',
    getIsLevelSolved: (chapterNumber: number | string, levelNumber: number | string) => `is-level-solved-${chapterNumber}-${levelNumber}`,
    getLevelAnswer: (chapterNumber: number | string, levelNumber: number | string) => `level-answer-${chapterNumber}-${levelNumber}`,
};
