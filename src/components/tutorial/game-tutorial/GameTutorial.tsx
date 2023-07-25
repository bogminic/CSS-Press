import React from 'react'

import './GameTutorial.scss';
import DialogTutorial from '../dialog-tutorial/DialogTutorial';
import singleArrow from "./single-arrow.svg";
import { tutorialStates } from '../../../utils/constants';
import { TutorialMachineStates } from '../../../machines/tutorialMachine';
import { State } from 'xstate';

type Props = {
    setTutorialState: (value: string) => void;
    state: State<TutorialMachineStates>;
    send: (event: string) => void;
}

const GameTutorial = ({ setTutorialState, state, send }: Props) => {

    return (
        <aside className="tutorial">
            <section className="tutorial__game">
                {state.matches(TutorialMachineStates.article) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.article} hidePrevious />
                ) : state.matches(TutorialMachineStates.misprint) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.misprint} />
                ) : state.matches(TutorialMachineStates.instructions) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.instructions} />
                ) : state.matches(TutorialMachineStates.property) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.property} />
                ) : state.matches(TutorialMachineStates.values) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.values} />
                ) : state.matches(TutorialMachineStates.correct) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.correct} />
                ) : state.matches(TutorialMachineStates.error) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.error} />
                ) : state.matches(TutorialMachineStates.code) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.code} />
                ) : state.matches(TutorialMachineStates.click) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.click} />
                ) : state.matches(TutorialMachineStates.write) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.write} />
                ) : state.matches(TutorialMachineStates.finish) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.finish} hideNext />
                ) : state.matches(TutorialMachineStates.menu) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.menu} hideNext hidePrevious />
                ) : state.matches(TutorialMachineStates.levels) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.levels} hidePrevious />
                ) : state.matches(TutorialMachineStates.buttons) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.buttons} />
                ) : state.matches(TutorialMachineStates.done) ? (
                    <DialogTutorial state={state} send={send} actualState={TutorialMachineStates.done} hideNext showFinish />
                ) : null}
            </section>
            <button className='tutorial__skip' type='button' onClick={() => setTutorialState(tutorialStates.finished)}>
                <img className='tutorial__double-arrow' src={singleArrow} alt="Skip Walkthrough" />
                Skip Walkthrough
            </button>
        </aside>
    )
}

export default GameTutorial