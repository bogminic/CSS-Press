import { createActorContext } from '@xstate/react';
import { tutorialMachine } from './tutorialMachine';
import { localStorageNames } from '../utils/constants';
import { StateFrom } from 'xstate';

// Load the state from local storage
const loadState = () => {
  const savedState = localStorage.getItem(localStorageNames.tutorialState);
  return savedState ? JSON.parse(savedState) : undefined;
};

// Rehydrate the state from local storage
const rehydratedState: StateFrom<typeof tutorialMachine> | undefined = loadState();
export const TutorialMachineContext = createActorContext(tutorialMachine, {
  snapshot: rehydratedState,
});