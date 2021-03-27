import React from 'react';
import { useParams } from 'react-router-dom';

import Instructions from '../../components/instructions/Instructions';
import Code from '../../components/code/Code';
import Article from '../../components/article/Article';

import { chapters } from '../../const/chapters';

import './GamePage.scss';

interface level {
    levelName: string,
    instructions: string,
    beforeCode: string,
    afterCode: string,
    linesOfCode: number,
    startHighlightCode: number,
    articleContent: string
}

interface chapter {
    chapterName: string,
    levels: level[]
}

function GamePage() {
    const { chapterId, levelId } = useParams<{ chapterId: string, levelId: string }>();
    const currentChapter: chapter = chapters[parseInt(chapterId)-1];
    const currentLevel: level = currentChapter.levels[parseInt(levelId)-1];

    return (
        <main className="game">
            <Instructions 
                chapterName={currentChapter.chapterName} 
                levelName={currentLevel.levelName}
                instructionsContent={currentLevel.instructions}
                />
            <Code 
                beforeCode={currentLevel.beforeCode}
                afterCode={currentLevel.afterCode}
                linesOfCode={currentLevel.linesOfCode}
                startHighlightCode={currentLevel.startHighlightCode}/>
            <Article
                articleContent={currentLevel.articleContent}/>
        </main>
    );
}

export default GamePage;
