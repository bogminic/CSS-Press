import React from 'react'

import './GameTutorial.scss';
import DialogTutorial from '../dialog-tutorial/DialogTutorial';
import singleArrow from "./single-arrow.svg";
import { TutorialMachineStates } from '../../../machines/tutorialMachine';
import { State } from 'xstate';

type Props = {
    currentTutorialState: State<TutorialMachineStates>;
    send: (event: string) => void;
}

const GameTutorial = ({ currentTutorialState, send }: Props) => {

    return (
        <aside className="tutorial">
            <section className="tutorial__game">
                {currentTutorialState.matches(TutorialMachineStates.article) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.article} hidePrevious />
                ) : currentTutorialState.matches(TutorialMachineStates.misprint) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.misprint} />
                ) : currentTutorialState.matches(TutorialMachineStates.instructions) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.instructions} />
                ) : currentTutorialState.matches(TutorialMachineStates.property) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.property} />
                ) : currentTutorialState.matches(TutorialMachineStates.values) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.values} />
                ) : currentTutorialState.matches(TutorialMachineStates.correct) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.correct} />
                ) : currentTutorialState.matches(TutorialMachineStates.error) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.error} />
                ) : currentTutorialState.matches(TutorialMachineStates.code) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.code} />
                ) : currentTutorialState.matches(TutorialMachineStates.click) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.click} />
                ) : currentTutorialState.matches(TutorialMachineStates.write) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.write} />
                ) : currentTutorialState.matches(TutorialMachineStates.complete) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.complete} hideNext />
                ) : currentTutorialState.matches(TutorialMachineStates.menu) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.menu} hideNext hidePrevious />
                ) : currentTutorialState.matches(TutorialMachineStates.levels) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.levels} hidePrevious />
                ) : currentTutorialState.matches(TutorialMachineStates.buttons) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.buttons} />
                ) : currentTutorialState.matches(TutorialMachineStates.done) ? (
                    <DialogTutorial state={currentTutorialState} send={send} actualState={TutorialMachineStates.done} hideNext showFinish />
                ) : null}
            </section>
            <button className='tutorial__skip' type='button' onClick={() => send('FINISHED')}>
                <img className='tutorial__double-arrow' src={singleArrow} alt="Skip Walkthrough" />
                Skip Walkthrough
            </button>
        </aside>
    )
}

export default GameTutorial