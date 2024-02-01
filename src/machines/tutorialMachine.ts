import { assign, setup } from 'xstate';

export enum TutorialMachineStates {
    starting = 'starting',
    article = 'article',
    buttons = 'buttons',
    code = 'code',
    correct = 'correct',
    done = 'done',
    error = 'error',
    complete = 'complete',
    finished = 'finished',
    instructions = 'instructions',
    levels = 'levels',
    menu = 'menu',
    click = 'click',
    misprint = 'misprint',
    property = 'property',
    values = 'values',
    write = 'write'
}

export type TutorialMachineEvents = { type: 'NEXT' } | { type: 'PREV' } | { type: 'RESET' } | { type: 'FINISH' } | { type: 'PLAY' }

const sharedEvents = {
    RESET: {
        target: TutorialMachineStates.starting
    },
    FINISHED: {
        target: TutorialMachineStates.finished
    },
    PLAY: {
        target: TutorialMachineStates.article
    }
};

export const tutorialMachine = setup({
    types: {
        context: {} as { message: string },
        events: {} as | { type: 'NEXT' } | { type: 'PREV' } | { type: 'RESET' } | { type: 'FINISHED' } | { type: 'PLAY' }

    }
}).createMachine({
    initial: TutorialMachineStates.starting,
    id: 'tutorialMachine',
    context: {
        message: ''
    },
    states: {
        [TutorialMachineStates.starting]: {
            on: {
                NEXT: {
                    target: TutorialMachineStates.article
                },
                ...sharedEvents
            },
        },
        [TutorialMachineStates.article]: {
            entry: assign({ message: () => 'Uh-oh! There\'s something wrong with this newspaper.' }),
            on: {
                NEXT: {
                    target: TutorialMachineStates.misprint
                },
                ...sharedEvents
            },
            meta: {
                message: 'Uh-oh! There\'s something wrong with this newspaper.',
            }
        },
        [TutorialMachineStates.misprint]: {
            entry: assign({ message: () => 'This paragraph doesn\'t look right.' }),
            on: {
                NEXT: {
                    target: TutorialMachineStates.instructions
                },
                PREV: {
                    target: TutorialMachineStates.article
                },
                ...sharedEvents
            },
            meta: {
                message: 'This paragraph doesn\'t look right.'
            }
        },
        [TutorialMachineStates.instructions]: {
            entry: assign({ message: () => 'These instructions will assist you in resolving the issues with the newspaper.' }),
            on: {
                NEXT: {
                    target: TutorialMachineStates.property
                },
                PREV: {
                    target: TutorialMachineStates.misprint
                },
                ...sharedEvents
            },
            meta: {
                message: 'These instructions will assist you in resolving the issues with the newspaper.'
            },
        },
        [TutorialMachineStates.property]: {
            entry: assign({ message: () => 'For additional information, simply hover over the "font-size" property.' }),
            on: {
                NEXT: {
                    target: TutorialMachineStates.values
                },
                PREV: {
                    target: TutorialMachineStates.instructions
                },
                ...sharedEvents
            },
            meta: {
                message: 'For additional information, simply hover over the "font-size" property.'
            }
        },
        [TutorialMachineStates.values]: {
            entry: assign({ message: () => 'All you need to do is determine the correct values to rectify the newspaper style.' }),
            on: {
                NEXT: {
                    target: TutorialMachineStates.correct
                },
                PREV: {
                    target: TutorialMachineStates.property
                },
                ...sharedEvents
            },
            meta: {
                message: 'All you need to do is determine the correct values to rectify the newspaper style.'
            }
        },
        [TutorialMachineStates.correct]: {
            entry: assign({ message: () => 'To discover the correct font size, hover over the text below the image.' }),
            on: {
                NEXT: {
                    target: TutorialMachineStates.error
                },
                PREV: {
                    target: TutorialMachineStates.values
                },
                ...sharedEvents
            },
            meta: {
                message: 'To discover the correct font size, hover over the text below the image.'
            }
        },
        [TutorialMachineStates.error]: {
            entry: assign({ message: () => 'You need to make this paragraph look the same as the rest of the newspaper.' }),
            on: {
                NEXT: {
                    target: TutorialMachineStates.code
                },
                PREV: {
                    target: TutorialMachineStates.correct
                },
                ...sharedEvents
            },
            meta: {
                message: 'You need to make this paragraph look the same as the rest of the newspaper.'
            }
        },
        [TutorialMachineStates.code]: {
            entry: assign({ message: () => 'You can use this terminal below to write CSS properties and modify the newspaper\'s design.' }),
            on: {
                NEXT: {
                    target: TutorialMachineStates.write
                },
                PREV: {
                    target: TutorialMachineStates.error
                },
                ...sharedEvents
            },
            meta: {
                message: 'You can use this terminal below to write CSS properties and modify the newspaper\'s design.'
            }
        },
        [TutorialMachineStates.write]: {
            entry: assign({ message: () => 'Click in the .misprint class input and write: font-size: 16px;' }),
            on: {
                NEXT: {
                    target: TutorialMachineStates.complete
                },
                PREV: {
                    target: TutorialMachineStates.code
                },
                ...sharedEvents
            },
            meta: {
                message: 'Click in the .misprint class input and write: font-size: 16px;'
            }
        },
        [TutorialMachineStates.complete]: {
            entry: assign({ message: () => 'Congratulations on completing the Level! To proceed to the next level, simply click on the "Next Level" button.' }),
            on: {
                PREV: {
                    target: TutorialMachineStates.write
                },
                NEXT: {
                    target: TutorialMachineStates.menu
                },
                ...sharedEvents
            },
            meta: {
                message: 'Congratulations on completing the Level! To proceed to the next level, simply click on the "Next Level" button.'
            }
        },
        [TutorialMachineStates.menu]: {
            entry: assign({ message: () => 'You can use the menu to swith between levels. Click to open it!' }),
            on: {
                NEXT: {
                    target: TutorialMachineStates.levels
                },
                ...sharedEvents
            },
            meta: {
                message: 'You can use the menu to swith between levels. Click to open it!'
            }
        },
        [TutorialMachineStates.levels]: {
            entry: assign({ message: () => 'Here you can view the available levels and monitor your progress as well.' }),
            on: {
                PREV: {
                    target: TutorialMachineStates.menu
                },
                NEXT: {
                    target: TutorialMachineStates.buttons
                },
                ...sharedEvents
            },
            meta: {
                message: 'Here you can view the available levels and monitor your progress as well.'
            }
        },
        [TutorialMachineStates.buttons]: {
            entry: assign({ message: () => 'The menu features two buttons, one for resetting the game and another for accessing the game tutorials.' }),
            on: {
                PREV: {
                    target: TutorialMachineStates.levels
                },
                NEXT: {
                    target: TutorialMachineStates.done
                },
                ...sharedEvents
            },
            meta: {
                message: 'The menu features two buttons, one for resetting the game and another for accessing the game tutorials.'
            }
        },
        [TutorialMachineStates.done]: {
            entry: assign({ message: () => 'Congratulations! You have successfully completed the tutorial. Now you\'re ready to embark on your own exciting gaming adventure. Enjoy the game!' }),
            on: {
                PREV: {
                    target: TutorialMachineStates.buttons
                },
                ...sharedEvents
            },
            meta: {
                message: 'Congratulations! You have successfully completed the tutorial. Now you\'re ready to embark on your own exciting gaming adventure. Enjoy the game!'
            }
        },
        [TutorialMachineStates.finished]: {
            on: {
                ...sharedEvents
            }
        }

    }
});