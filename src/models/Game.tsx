export interface ILevel {
  levelName: string;
  instructions: string;
  beforeCode: string;
  afterCode: string;
  error: string;
  linesOfCode: number;
  startHighlightCode: number;
  articleContent: string;
  solutions: string[][];
  tipInfo: string,
  tipSelector: string,
}

export interface IChapter {
  chapterName: string;
  levels: ILevel[];
}
