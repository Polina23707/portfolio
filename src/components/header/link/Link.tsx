interface LinkType {
  name: string,
  url: string,
  className: string,
}

const Link = ({name, url, className}: LinkType) => {
  return(
    <li className={className}>
      <a className='header__menu-item' href={url}>{name}</a>
    </li>
  )
}

export default Link;