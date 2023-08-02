import React from 'react'
import './NotfoundPage.scss';

export default function NotfoundPage() {
  return (
    <section className='not-found'>
      <h1 className='not-found--title'>Oh no!</h1>
      <article  className='not-found--content'>This page is old news, cowboy. A paper storm is coming,
        <br />
        so you'd better hurry back.
      </article>
      <button className="button">Go to homepage</button>
    </section>
  )
}