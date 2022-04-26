export interface Level {
  levelName: string;
  instructions: string;
  beforeCode: string;
  afterCode: string;
  error: string;
  linesOfCode: number;
  startHighlightCode: number;
  articleContent: string;
  solution: string;
}

export interface Chapter {
  chapterName: string;
  levels: Level[];
}
