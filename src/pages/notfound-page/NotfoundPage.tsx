import React from 'react'
import './NotfoundPage.scss';

export default function NotfoundPage() {
  return (
    <article className='not-found'>
      <h1 className='not-found--title'>Oh no!</h1>
      <p  className='not-found--content'>This page is old news, cowboy. A paper storm is coming,
        <br />
        so you'd better hurry back.
      </p>
      <button className="button">Go to homepage</button>
    </article>
  )
}