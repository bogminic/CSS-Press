import { setup } from 'xstate';

export enum TutorialMachineStates {
    starting = 'starting',
    article = 'article',
    buttons = 'buttons',
    code = 'code',
    correct = 'correct',
    tool = 'tool',
    done = 'done',
    error = 'error',
    complete = 'complete',
    finished = 'finished',
    instructions = 'instructions',
    levels = 'levels',
    menu = 'menu',
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
        events: {} as | { type: 'NEXT' } | { type: 'PREV' } | { type: 'RESET' } | { type: 'FINISHED' } | { type: 'PLAY' },
        meta: {} as { message: string }

    }
}).createMachine({
    initial: TutorialMachineStates.starting,
    id: 'tutorialMachine',
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
            on: {
                NEXT: {
                    target: TutorialMachineStates.misprint
                },
                ...sharedEvents
            },
            meta: {
                message: 'Uh-oh! There\'s something <strong>wrong</strong> with this newspaper.',
            }
        },
        [TutorialMachineStates.misprint]: {
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
                message: 'These <strong>instructions</strong> will assist you in resolving the issues with the newspaper.'
            },
        },
        [TutorialMachineStates.property]: {
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
                message: 'For additional information, simply hover over the "<strong>font-size</strong>" property.'
            }
        },
        [TutorialMachineStates.values]: {
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
                message: 'All you need to do is determine the <strong>correct values</strong> to rectify the newspaper style.'
            }
        },
        [TutorialMachineStates.correct]: {
            on: {
                NEXT: {
                    target: TutorialMachineStates.tool
                },
                PREV: {
                    target: TutorialMachineStates.values
                },
                ...sharedEvents
            },
            meta: {
                message: 'To discover the <strong>correct</strong> font size, open de Pressmen Tool.'
            }
        },
        [TutorialMachineStates.tool]: {
            on: {
                NEXT: {
                    target: TutorialMachineStates.error
                },
                PREV: {
                    target: TutorialMachineStates.correct
                },
                ...sharedEvents
            },
            meta: {
                message: 'As you can see in the <strong>Pressmen Tool</strong>, the correct paragraph value is 16px.'
            }
        },
        [TutorialMachineStates.error]: {
            on: {
                NEXT: {
                    target: TutorialMachineStates.code
                },
                PREV: {
                    target: TutorialMachineStates.tool
                },
                ...sharedEvents
            },
            meta: {
                message: 'You need to make this paragraph look the same as the rest of the newspaper.'
            }
        },
        [TutorialMachineStates.code]: {
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
                message: 'You can use this terminal below to <strong>write</strong> CSS properties and modify the newspaper\'s design.'
            }
        },
        [TutorialMachineStates.write]: {
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
                message: 'Click in the .misprint class input and write: <strong>font-size: 16px;</strong>'
            }
        },
        [TutorialMachineStates.complete]: {
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
                message: 'Congratulations on completing the Level! To proceed to the next level, simply click on the "<strong>Next Level</strong>" button.'
            }
        },
        [TutorialMachineStates.menu]: {
            on: {
                NEXT: {
                    target: TutorialMachineStates.levels
                },
                ...sharedEvents
            },
            meta: {
                message: 'You can use the menu to swith between levels. <strong>Click</strong> to open it!'
            }
        },
        [TutorialMachineStates.levels]: {
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