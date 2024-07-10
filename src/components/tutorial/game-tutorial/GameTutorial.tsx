import './GameTutorial.scss';
import DialogTutorial from '../dialog-tutorial/DialogTutorial';
import singleArrow from "./single-arrow.svg";
import { TutorialMachineStates } from '../../../machines/tutorialMachine';
import { TutorialMachineContext } from '../../../machines/TutorialMachineContext';

const GameTutorial = () => {
    const { send } = TutorialMachineContext.useActorRef();
    const currentTutorialState = TutorialMachineContext.useSelector((state) => state);

    return (
        <aside className="tutorial">
            <section className="tutorial__game">
                {currentTutorialState.matches(TutorialMachineStates.article) ? (
                    <DialogTutorial actualState={TutorialMachineStates.article} hidePrevious />
                ) : currentTutorialState.matches(TutorialMachineStates.misprint) ? (
                    <DialogTutorial actualState={TutorialMachineStates.misprint} />
                ) : currentTutorialState.matches(TutorialMachineStates.instructions) ? (
                    <DialogTutorial actualState={TutorialMachineStates.instructions} />
                ) : currentTutorialState.matches(TutorialMachineStates.property) ? (
                    <DialogTutorial actualState={TutorialMachineStates.property} />
                ) : currentTutorialState.matches(TutorialMachineStates.values) ? (
                    <DialogTutorial actualState={TutorialMachineStates.values} />
                ) : currentTutorialState.matches(TutorialMachineStates.correct) ? (
                    <DialogTutorial actualState={TutorialMachineStates.correct} hideNext />
                ) : currentTutorialState.matches(TutorialMachineStates.tool) ? (
                    <DialogTutorial actualState={TutorialMachineStates.tool} hidePrevious />
                ) : currentTutorialState.matches(TutorialMachineStates.error) ? (
                    <DialogTutorial actualState={TutorialMachineStates.error} />
                ) : currentTutorialState.matches(TutorialMachineStates.code) ? (
                    <DialogTutorial actualState={TutorialMachineStates.code} />
                ) : currentTutorialState.matches(TutorialMachineStates.write) ? (
                    <DialogTutorial actualState={TutorialMachineStates.write} hideNext />
                ) : currentTutorialState.matches(TutorialMachineStates.complete) ? (
                    <DialogTutorial actualState={TutorialMachineStates.complete} hideNext />
                ) : currentTutorialState.matches(TutorialMachineStates.menu) ? (
                    <DialogTutorial actualState={TutorialMachineStates.menu} hideNext hidePrevious />
                ) : currentTutorialState.matches(TutorialMachineStates.levels) ? (
                    <DialogTutorial actualState={TutorialMachineStates.levels} hidePrevious />
                ) : currentTutorialState.matches(TutorialMachineStates.buttons) ? (
                    <DialogTutorial actualState={TutorialMachineStates.buttons} />
                ) : currentTutorialState.matches(TutorialMachineStates.done) ? (
                    <DialogTutorial actualState={TutorialMachineStates.done} hidePrevious hideNext showFinish />
                ) : null}
            </section>
            {!currentTutorialState.matches(TutorialMachineStates.starting) && <button className='tutorial__skip' type='button' onClick={() => send({ type: 'FINISHED' })}>
                <img className='tutorial__double-arrow' src={singleArrow} alt="Skip Walkthrough" />
                Skip Walkthrough
            </button>}
        </aside>
    )
}

export default GameTutorial