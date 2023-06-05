import { createMachine } from 'xstate';
export const tutorialConfig = {
    /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnQCcAXXTAGzAGIA5AUQA0AVAbQAYBdRKAAOAe1i5qI-IJAAPRAEYArACYSATk2aFPFQA4VAFgUB2ADQgAnohW6SKpTx7KlhpQp3GAvl4toseISkqLiwQuQElMzs3PwyouKS0khyiADMegBsGpl66grqesoqpkppFtYItmomjs5Kru6eCj5+GDgExCQEsJTkAK6YSbDRnLwCKQkSuFIy8giZaYYkubWZCno86plKmhWK6mr5uUaZKiYKxpmZrSD+HUEk4SJCYFSWo7ETwmLTsynzdROEgmfImQw8YzgzZKfZVOy1JwuNweSGGW73QJdTAicjkMBDABq6Fo-Tgn3G8V+STmihcOT0elUPDK1x2cOq9jqyKakJavju7SxpEoIhEtGoQgAwrj8USSWSRqwxnFJtSZslQPNLoY9BpdTwTPpmUo9By7A4kQ0Uc0MULOsFQuFIgBZXFgACS+AAZiIKaqfokNbSEKYVGkSCzwyoVGdLiZMua1Jb6o1Ud4BZiHSQcRBGMqvlSg-8tQcVOoSGkq7twSYeJlDCok1yrWnbZn7Y9sCIAG5vL1CfpRAuUtXFzWpKrKPU7Ha6xZpZSGZspnnp-ltALZgDuEUoYBlef93xAUxpAJs6x49jSmkM1xMt7S5isNgt3OtvIzm4eXW9BFCbBjyLP4J3mABaNQ2UcW96wcOEMiUEEPzbSEfAFfARDzeAUizIIQPPUsEHA8FK1je9DF1XVCjhHQkKuAx73OS4FGuO0t0eChqDoMACODC9iNjMiGwbKi8lBdQX0qEoTBIVwTFqRjwTSFk9HY39HTCCJ8EoPiS0nc4I3UQxQUXJYq3rBpm0RVMbT5dThW6fBegGIYNRwwNQJDQx1CQ4461qRtbw2ayULs79BQ4rpnled49LAxAFLNV9Q0ODRWMYs4LihBzsxxPECUoYlSTgeKQx0DxIyNTQ62oiTQtbcKTFyx5RXFSUZQK+USo8091X07UHGyS0FDSU1wV2HhkukhEwt5NIbg7KLNOdHS3XxL1fTKgSlwrGN1DGh9ywMJsUs5Gy1x0BaWuxLDeLHLydoMCMqwW+tKKMJxTpmmo5vTZqlo0khuz7cgByHbaiOqCt1l1Ipy2Ua5vrfX7nFMHzJPOJQAZ-RzdwkA87shgz5xIPQqzrXITMZcoztmxr5sW3Hs3-fBAOJ+YeDhM4kNXT903QrwgA */
    predictableActionArguments: true,
    initial: 'article',
    states: {
        article: {
            on: {
                NEXT: {
                    target: 'misprint'
                }
            },
            meta: {
                message: 'Uh-oh! There\'s something wrong with this newspaper.',
            }
        },
        misprint: {
            on: {
                NEXT: {
                    target: 'instructions'
                }
            },
            meta: {
                message: 'This paragraph doesn\'t look right.'
            }
        },
        instructions: {
            on: {
                NEXT: {
                    target: 'property'
                }
            },
            meta: {
                message: 'Here are the instructions to help you fix the newspaper'
            },
        },
        property: {
            on: {
                NEXT: {
                    target: 'values'
                }
            },
            meta: {
                message: 'Hover over font-size property for more details.'
            }
        },
        values: {
            on: {
                NEXT: {
                    target: 'correct'
                }
            },
            meta: {
                message: 'You just need to find the correct values to fix the newspaper.'
            }
        },
        correct: {
            on: {
                NEXT: {
                    target: 'error'
                }
            },
            meta: {
                message: 'Hover on other paragraphs to discover the correct font size.'
            }
        },
        error: {
            on: {
                NEXT: {
                    target: 'code'
                }
            },
            meta: {
                message: 'You need to make this paragraph look the same as the rest of the newspaper.'
            }
        },
        code: {
            on: {
                NEXT: {
                    target: 'write'
                }
            },
            meta: {
                message: 'In this terminal below you can write CSS properties to make changes in the newspaper.'
            }
        },
        write: {
            on: {
                NEXT: {
                    target: 'finish'
                }
            },
            meta: {
                message: 'Click in the .misprint class input and write: font-size: 16px;'
            }
        },
        finish: {
            on: {
                NEXT: {
                    target: 'article'
                }
            },
            meta: {
                message: 'Click on the next level button to continue.'
            }
        }
    }
};
export const tutorialMachine = createMachine(tutorialConfig);