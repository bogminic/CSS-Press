import React from 'react';

import Instructions from '../../components/instructions/Instructions';
import Code from '../../components/code/Code';
import Article from '../../components/article/Article';

import './GamePage.scss';

function GamePage() {
    return (
        <main className="game">
            <Instructions />
            <Code />
            <Article/>
        </main>
    );
}

export default GamePage;
