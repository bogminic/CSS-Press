import React from 'react'

import './GameTutorial.scss';
import { useMachine } from '@xstate/react';
import { tutorialMachine } from '../../../machines/tutorialMachine';
import DialogTutorial from '../dialog-tutorial/DialogTutorial';
import singleArrow from "./single-arrow.svg";
import { tutorialStates } from '../../../utils/constants';

type Props = {
    setTutorialState: (value: string) => void;
}

const GameTutorial = ({ setTutorialState}: Props) => {
    const [state, send] = useMachine(tutorialMachine);

    return (
        <aside className="tutorial">
            <section className="tutorial__game">
                {state.matches('article') ? (
                    <DialogTutorial state={state} send={send} actualState="article" />
                ) : state.matches('misprint') ? (
                    <DialogTutorial state={state} send={send} actualState="misprint" />
                ) : state.matches('instructions') ? (
                    <DialogTutorial state={state} send={send} actualState="instructions" />
                ) : state.matches('property') ? (
                    <DialogTutorial state={state} send={send} actualState="property" />
                ) : state.matches('values') ? (
                    <DialogTutorial state={state} send={send} actualState="values" />
                ) : state.matches('correct') ? (
                    <DialogTutorial state={state} send={send} actualState="correct" />
                ) : state.matches('error') ? (
                    <DialogTutorial state={state} send={send} actualState="error" />
                ) : state.matches('code') ? (
                    <DialogTutorial state={state} send={send} actualState="code" />
                ) : state.matches('click') ? (
                    <DialogTutorial state={state} send={send} actualState="click" />
                ) : state.matches('write') ? (
                    <DialogTutorial state={state} send={send} actualState="write" />
                ) : state.matches('finish') ? (
                    <DialogTutorial state={state} send={send} actualState="finish" />
                ) : null}
            </section>
            <button className='tutorial__skip' type='button' onClick={() => setTutorialState(tutorialStates.finished)}>
                <img className='tutorial__double-arrow' src={singleArrow}  alt="Skip Walkthrough" />
                Skip Walkthrough
            </button>
        </aside>
    )
}

export default GameTutorial