import React from "react";
import { render, screen } from "@testing-library/react";
import Instructions from "./Instructions";

test("renders Instructions without crashing", () => {
  render(
    <Instructions
      chapterName="Test"
      levelName="Test Level"
      instructionsContent="Content"
    />
  );
});

it("renders Instructions chapter name", () => {
  render(
    <Instructions
      chapterName="Chapter"
      levelName="Level"
      instructionsContent="Content"
    />
  );
  const header = screen.getByText("Chapter");
  expect(header).toBeInTheDocument();
});

it("renders Instructions level name", () => {
  render(
    <Instructions
      chapterName="Chapter"
      levelName="Level"
      instructionsContent="Content"
    />
  );
  const level = screen.getByText("Level");
  expect(level).toBeInTheDocument();
});

it("renders Instructions content", () => {
  render(
    <Instructions
      chapterName="Chapter"
      levelName="Level"
      instructionsContent="Content"
    />
  );
  const content = screen.getByText("Content");
  expect(content).toBeInTheDocument();
});

it("renders Instructions content with tooltips", async () => {
  render(
    <Instructions
      chapterName="Chapter"
      levelName="Level"
      instructionsContent="Content <code>font-family<code>"
    />
  );
  const tooltip = await screen.findByTestId("tooltip");
  expect(tooltip).toBeInTheDocument();
});
