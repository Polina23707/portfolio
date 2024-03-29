import './Header.css'
import Link from './link/Link';
import logo from '../../img/logo/logo.png'
import githubIcon from '../../img/logo/github.png'
import linkedInIcon from '../../img/logo/linkedin.png'
import burger from '../../img/logo/burger-menu.png'

interface HeaderType {
  onMenuItemClick: any;
  onMenu: any;
  mobile: string;
}

const Header = ({onMenuItemClick, mobile, onMenu}: HeaderType) => {

  return(
    <header className="header">      
      <div className="header__content">
        <div className="header__logo-container">
          <img className='logo-container__icon'src={logo}></img>
          <div className='logo-container__name'>Polina Gorelik</div>
        </div>
        <div className="header__menu">
          <ul className="header__links">
            <Link name='About' url='#about' className='header__link' onMenuItemClick={onMenuItemClick}/>
            <Link name='Portfolio' url='#projects' className='header__link'onMenuItemClick={onMenuItemClick}/>
            <Link name='Contact' url='#contact' className='header__link' onMenuItemClick={onMenuItemClick}/>
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
        <button onClick={onMenu} className='header__burger-menu'>
          <img className='burger-menu-icon' src={burger}></img>
        </button>
      </div>
      <ul style={{display: mobile}} className='burger-menu__list'>
        <Link name='About' url='#about' className='burger-menu__item' onMenuItemClick={onMenuItemClick}/>
        <Link name='Portfolio' url='#projects' className='burger-menu__item' onMenuItemClick={onMenuItemClick}/>
        <Link name='Contact' url='#contact' className='burger-menu__item' onMenuItemClick={onMenuItemClick}/>
      </ul>
    </header>
  ) 
}

export default Header;