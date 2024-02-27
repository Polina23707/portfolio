interface LinkType {
  name: string,
  url: string,
  className: string,
  onMenuItemClick: any,
}

const Link = ({name, url, className, onMenuItemClick}: LinkType) => {
  return(
    <li className={className}>
      <a className='header__menu-item' href={url} onClick={onMenuItemClick}>{name}</a>
    </li>
  )
}

export default Link;