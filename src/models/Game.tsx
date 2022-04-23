export interface Level {
  levelName: string;
  instructions: string;
  beforeCode: string;
  afterCode: string;
  linesOfCode: number;
  startHighlightCode: number;
  articleContent: string;
}

export interface Chapter {
  chapterName: string;
  levels: Level[];
}