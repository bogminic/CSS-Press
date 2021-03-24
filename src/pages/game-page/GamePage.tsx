import React from 'react';
import { useParams } from 'react-router-dom';

import Instructions from '../../components/instructions/Instructions';
import Code from '../../components/code/Code';
import Article from '../../components/article/Article';

import './GamePage.scss';

function GamePage() {
    const { chapterId, levelId } = useParams<{ chapterId: string, levelId: string }>();
    console.log('chapterId', chapterId);
    console.log('levelId', levelId);
    
    return (
        <main className="game">
            <Instructions/>
            <Code/>
            <Article/>
        </main>
    );
}

export default GamePage;
