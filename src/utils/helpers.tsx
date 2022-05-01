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

export function checkSolution(solution: string, answer: string): boolean {
  if (!solution.includes(":")) {
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
