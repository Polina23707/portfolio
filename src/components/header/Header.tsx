import './Header.css'
import Link from './link/Link';
import githubIcon from '../../img/github.png'
import linkedInIcon from '../../img/linkedin.png'
import burger from '../../img/burger-menu.png'

const Header = () => {
  return(
    <header className="header">      
      <div className="header__content">
        <div className="header__logo-container">
          <img className='logo-container__icon'src='#'></img>
          <div className='logo-container__name'>Polina Gorelik</div>
        </div>
        <div className="header__menu">
          <ul className="header__links">
            <Link name='About' url='#about' className='header__link'/>
            <Link name='Portfolio' url='#projects' className='header__link'/>
            <Link name='Contact' url='#contact' className='header__link'/>
          </ul>
        </div>
        <div className="header__socials">
          <ul className="header__socials-icons">
            <li className="header__socials-icon">
              <a href='https://github.com/Polina23707'>
                <img className='social-icons' src={githubIcon}></img>
              </a>
            </li>
            <li className="header__socials-icon">
            <a href='https://www.linkedin.com/in/pigorelik/'>
                <img className='social-icons' src={linkedInIcon}></img>
              </a>
            </li>
          </ul>
        </div>
        <div className='header__burger-menu'>
          <img className='burger-menu-icon' src={burger}></img>
        </div>
      </div>
    </header>
  ) 
}

export default Header;