import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Instructions from '../../components/instructions/Instructions';
import Code from '../../components/code/Code';
import Article from '../../components/article/Article';
import { chapters } from '../../const/chapters';

import './GamePage.scss';

export interface level {
    levelName: string,
    instructions: string,
    beforeCode: {},
    selector: string,
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
    const currentChapter: chapter = chapters[parseInt(chapterId)-1];
    const currentLevel: level = currentChapter.levels[parseInt(levelId)-1];
    const [hoverSelector, setHoverSelector] = useState('');
    return (
        <main className="game">
            <Instructions 
                chapterName={currentChapter.chapterName} 
                levelName={currentLevel.levelName}
                instructionsContent={currentLevel.instructions}
                />
            <Code
                setHoverSelector={setHoverSelector}
                beforeCode={currentLevel.beforeCode}
                afterCode={currentLevel.afterCode}
                selector={currentLevel.selector}
                linesOfCode={currentLevel.linesOfCode}
                startHighlightCode={currentLevel.startHighlightCode}/>
            <Article
                hoverSelector={hoverSelector}
                articleContent={currentLevel.articleContent}/>
        </main>
    );
}

export default GamePage;
