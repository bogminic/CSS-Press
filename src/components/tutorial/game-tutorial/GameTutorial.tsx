import React from 'react'

import './GameTutorial.scss';
import { useMachine } from '@xstate/react';
import { tutorialMachine } from '../../../machines/tutorialMachine';
import DialogTutorial from '../dialog-tutorial/DialogTutorial';

type Props = {}


const GameTutorial = (props: Props) => {
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
        </aside>
    )
}

export default GameTutorial