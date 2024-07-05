import './NotfoundPage.scss';
import { useNavigate } from 'react-router';

export default function NotfoundPage() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate(`/`);
  }

  return (
    <section className='not-found'>
      <h1 className='not-found--title'>Oh no!</h1>
      <article  className='not-found--content'>This page is old news, cowboy. A paper storm is coming,
        <br />
        so you'd better hurry back.
      </article>
      <button className="button" type='button' onClick={goToDashboard}>Go to homepage</button>
    </section>
  )
}