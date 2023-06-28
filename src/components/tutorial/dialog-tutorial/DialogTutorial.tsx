import React from 'react'
import arrow from "./arrow.svg";
import doubleArrow from "./double-arrow.svg";
type Props = {
    send?: (event: string) => void;
    state: any;
    actualState: string;
}

const DialogTutorial = ({ send, state, actualState }: Props) => {
    return (
        <>
            <div className={`tutorial__overlay tutorial__overlay--${actualState}`}></div>
            <article className={`tutorial__info tutorial__info--${actualState}`}>
                <img className={`tutorial__arrow tutorial__arrow--${actualState}`} src={arrow} alt="Next" />
                <p className="tutorial__text">
                    {state.meta[`(machine).${state.value}`].message}
                </p>
                {send && <button className='tutorial__next' type='button' onClick={() => send('NEXT')}>
                    <img className='tutorial__double-arrow' src={doubleArrow} alt="Next" />
                    Next
                </button>}
            </article>
        </>
    )
}

export default DialogTutorial