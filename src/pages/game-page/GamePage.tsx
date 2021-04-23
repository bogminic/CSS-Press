import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styleToCss from 'style-object-to-css-string';

import Instructions from '../../components/instructions/Instructions';
import Code from '../../components/code/Code';
import Article from '../../components/article/Article';
import { chapters } from '../../const/levels';

import './GamePage.scss';

export interface level {
    levelName: string,
    instructions: string,
    beforeCode: {},
    selector: string,
    error: string,
    afterCode: {},
    linesOfCode: number,
    startHighlightCode: number,
    articleContent: Function
}

export interface chapter {
    chapterName: string,
    levels: level[]
}

function GamePage() {
    const { chapterId, levelId } = useParams<{ chapterId: string, levelId: string }>();
    const currentChapter: chapter = chapters[parseInt(chapterId) - 1];
    const currentLevel: level = currentChapter.levels[parseInt(levelId) - 1];
    const [hoverSelector, setHoverSelector] = useState('');
    const [answer, setAnswer] = useState('');

    const beforeCode = Object.keys(currentLevel.beforeCode).map(key => `.${key} { ${styleToCss(currentLevel.beforeCode[key])} }`).join(' ');
    const afterCode = Object.keys(currentLevel.afterCode).map(key => `.${key} { ${styleToCss(currentLevel.afterCode[key])} }`).join(' ');
    const complementaryCSS = `${beforeCode} ${afterCode}`;
    const error = currentLevel.error;

    return (
        <main className="game">
            <Instructions
                chapterName={currentChapter.chapterName}
                levelName={currentLevel.levelName}
                instructionsContent={currentLevel.instructions}
            />
            <Code
                setHoverSelector={setHoverSelector}
                setAnswer={setAnswer}
                beforeCode={currentLevel.beforeCode}
                afterCode={currentLevel.afterCode}
                selector={currentLevel.selector}
                linesOfCode={currentLevel.linesOfCode}
                startHighlightCode={currentLevel.startHighlightCode} />
            <Article
                hoverSelector={hoverSelector}
                articleContent={currentLevel.articleContent}
                answer={answer}
                complementaryCSS={complementaryCSS}
                error={error}
            />
        </main>
    );
}

export default GamePage;
