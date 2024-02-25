import './Footer.css'
import githubIcon from '../../img/github-white.png'
import linkedInIcon from '../../img/linkedin-white.png'

const Footer = () => {
  return(
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__content'>
          <div className='footer__info'>
            <h4>Polina Gorelik</h4>
            <p>Frontend developer gfgfgf fjhjfjf fhfh</p>
          </div>
          <div className='footer__socials'>
            <h4>Socials</h4>
            <ul className='footer__socials__list'>
              <li className='footer__socials__item'>
                <a href='https://github.com/Polina23707'>
                  <img className='social-icons' src={githubIcon}></img>
                </a>
              </li>
              <li className='footer__socials__item'>
                <a href='https://www.linkedin.com/in/pigorelik/'>
                  <img className='social-icons' src={linkedInIcon}></img>
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        <div className='copiright'>
        © Copyright 2024. Made by Polina Gorelik
        </div>
      </div>
    </footer>
  )
  
}

export default Footer;