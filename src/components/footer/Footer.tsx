import './Footer.scss';
import  TwitterLogo from './twitter.svg?react';
import  FacebookLogo from './facebook.svg?react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <small className="footer__copyright">Copyright © CSS Press {year}</small>
      <figure className="footer__social">
        <TwitterLogo className="footer__social--twitter"/>
        <FacebookLogo className="footer__social--facebook"/>
      </figure>
    </footer>
  );
}

export default Footer;
