import React from 'react'
import arrow from "./arrow.svg";
import doubleArrow from "./double-arrow.svg";
type Props = {
    send: (event: string) => void;
    state: any;
    actualState: string;
    hidePrevious?: boolean;
    hideNext?: boolean;
    showFinish?: boolean;
}

const DialogTutorial = ({ send, state, actualState, hideNext, hidePrevious, showFinish }: Props) => {
    const btnsClass = `tutorial__btns${hidePrevious ? ' tutorial__btns--next' : ''}`
    return (
        <>
            <object className={`tutorial__overlay tutorial__overlay--${actualState}`}></object>
            <article className={`tutorial__info tutorial__info--${actualState}`}>
                <img className={`tutorial__arrow tutorial__arrow--${actualState}`} src={arrow} alt="Next" />
                <p className="tutorial__text">
                    {state.context.message}
                </p>
                {(!hidePrevious || !hideNext || showFinish) && <div className={btnsClass}>
                   {!hidePrevious && <button className='tutorial__button' type='button' onClick={() => send('PREV')}>
                        <img className='tutorial__double-arrow tutorial__double-arrow--reverse' src={doubleArrow} alt="Previous" />
                        Prev
                    </button>}
                    {!hideNext && <button className='tutorial__button' type='button' onClick={() => send('NEXT')}>
                        <img className='tutorial__double-arrow' src={doubleArrow} alt="Next" />
                        Next
                    </button>}

                    {showFinish && <button className='tutorial__button' type='button' onClick={() => send('FINISHED')}>
                        <img className='tutorial__double-arrow' src={doubleArrow} alt="Finish" />
                        Finish
                    </button>}
                </div>}
            </article>
        </>
    )
}

export default DialogTutorial