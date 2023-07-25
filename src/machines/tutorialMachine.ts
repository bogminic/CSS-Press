import { createMachine } from 'xstate';

export enum TutorialMachineStates {
    article = 'article',
    buttons = 'buttons',
    code = 'code',
    correct = 'correct',
    done = 'done',
    error = 'error',
    finish = 'finish',
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

export const tutorialConfig = {
    /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnQCcAXXTAGzAGIA5AUQA0AVAbQAYBdRKAAOAe1i5qI-IJAAPRAEYArACYSATk2aFPFQA4VAFgUB2ADQgAnohW6SKpTx7KlhpQp3GAvl4toseISkqLiwQuQElMzs3PwyouKS0khyiADMegBsGpl66grqesoqpkppFtYItmomjs5Kru6eCj5+GDgExCQEsJTkAK6YSbDRnLwCKQkSuFIy8giZaYYkubWZCno86plKmhWK6mr5uUaZKiYKxpmZrSD+HUEk4SJCYFSWo7ETwmLTsynzdROEgmfImQw8YzgzZKfZVOy1JwuNweSGGW73QJdTAicjkMBDABq6Fo-Tgn3G8V+STmihcOT0elUPDK1x2cOq9jqyKakJavju7SxpEoIhEtGoQgAwrj8USSWSRqwxnFJtSZslQPNLoY9BpdTwTPpmUo9By7A4kQ0Uc0MULOsFQuFIgBZXFgACS+AAZiIKaqfokNbSEKYVGkSCzwyoVGdLiZMua1Jb6o1Ud4BZiHSQcRBGMqvlSg-8tQcVOoSGkq7twSYeJlDCok1yrWnbZn7Y9sCIAG5vL1CfpRAuUtXFzWpKrKPU7Ha6xZpZSGZspnnp-ltALZgDuEUoYBlef93xAUxpAJs6x49jSmkM1xMt7S5isNgt3OtvIzm4eXW9BFCbBjyLP4J3mABaNQ2UcW96wcOEMiUEEPzbSEfAFfARDzeAUizIIQPPUsEHA8FK1je9DF1XVCjhHQkKuAx73OS4FGuO0t0eChqDoMACODC9iNjMiGwbKi8lBdQX0qEoTBIVwTFqRjwTSFk9HY39HTCCJ8EoPiS0nc4I3UQxQUXJYq3rBpm0RVMbT5dThW6fBegGIYNRwwNQJDQx1CQ4461qRtbw2ayULs79BQ4rpnled49LAxAFLNV9Q0ODRWMYs4LihBzsxxPECUoYlSTgeKQx0DxIyNTQ62oiTQtbcKTFyx5RXFSUZQK+USo8091X07UHGyS0FDSU1wV2HhkukhEwt5NIbg7KLNOdHS3XxL1fTKgSlwrGN1DGh9ywMJsUs5Gy1x0BaWuxLDeLHLydoMCMqwW+tKKMJxTpmmo5vTZqlo0khuz7cgByHbaiOqCt1l1Ipy2Ua5vrfX7nFMHzJPOJQAZ-RzdwkA87shgz5xIPQqzrXITMZcoztmxr5sW3Hs3-fBAOJ+YeDhM4kNXT903QrwgA */
    predictableActionArguments: true,
    initial: 'article',
    tsTypes: {} as import("./tutorialMachine.typegen").Typegen0,
    states: {
        [TutorialMachineStates.article]: {
            on: {
                NEXT: {
                    target: 'misprint'
                }
            },
            meta: {
                message: 'Uh-oh! There\'s something wrong with this newspaper.',
            }
        },
        [TutorialMachineStates.misprint]: {
            on: {
                NEXT: {
                    target: 'instructions'
                },
                PREV: {
                    target: 'article'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'This paragraph doesn\'t look right.'
            }
        },
        [TutorialMachineStates.instructions]: {
            on: {
                NEXT: {
                    target: 'property'
                },
                PREV: {
                    target: 'misprint'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'These instructions will assist you in resolving the issues with the newspaper.'
            },
        },
        [TutorialMachineStates.property]: {
            on: {
                NEXT: {
                    target: 'values'
                },
                PREV: {
                    target: 'instructions'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'For additional information, simply hover over the "font-size" property.'
            }
        },
        [TutorialMachineStates.values]: {
            on: {
                NEXT: {
                    target: 'correct'
                },
                PREV: {
                    target: 'property'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'All you need to do is determine the correct values to rectify the newspaper style.'
            }
        },
        [TutorialMachineStates.correct]: {
            on: {
                NEXT: {
                    target: 'error'
                },
                PREV: {
                    target: 'values'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'To discover the correct font size, hover over other paragraphs.'
            }
        },
        [TutorialMachineStates.error]: {
            on: {
                NEXT: {
                    target: 'code'
                },
                PREV: {
                    target: 'correct'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'You need to make this paragraph look the same as the rest of the newspaper.'
            }
        },
        [TutorialMachineStates.code]: {
            on: {
                NEXT: {
                    target: 'write'
                },
                PREV: {
                    target: 'error'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'You can use this terminal below to write CSS properties and modify the newspaper\'s design.'
            }
        },
        [TutorialMachineStates.write]: {
            on: {
                NEXT: {
                    target: 'finish'
                },
                PREV: {
                    target: 'code'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'Click in the .misprint class input and write: font-size: 16px;'
            }
        },
        [TutorialMachineStates.finish]: {
            on: {
                PREV: {
                    target: 'write'
                },
                NEXT: {
                    target: 'menu'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'Congratulations on completing the Level! To proceed to the next level, simply click on the "Next Level" button.'
            }
        },
        [TutorialMachineStates.menu]: {
            on: {
                NEXT: {
                    target: 'levels'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'You can use the menu to swith between levels. Click to open it!'
            }
        },
        [TutorialMachineStates.levels]: {
            on: {
                PREV: {
                    target: 'menu'
                },
                NEXT: {
                    target: 'buttons'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'Here you can view the available levels and monitor your progress as well.'
            }
        },
        [TutorialMachineStates.buttons]: {
            on: {
                PREV: {
                    target: 'levels'
                },
                NEXT: {
                    target: 'done'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'The menu features two buttons, one for resetting the game and another for accessing the game tutorials.'
            }
        },
        [TutorialMachineStates.done]: {
            on: {
                PREV: {
                    target: 'buttons'
                },
                FINISHED: {
                    target: 'finished'
                },
                RESET: {
                    target: 'article'
                }
            },
            meta: {
                message: 'Congratulations! You have successfully completed the tutorial. Now you\'re ready to embark on your own exciting gaming adventure. Enjoy the game!'
            }
        },
        [TutorialMachineStates.finished]: {
            on: {
                RESET: {
                    target: 'article'
                }
            }
        }

    }
};

export const tutorialMachine = createMachine(tutorialConfig);

