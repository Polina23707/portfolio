import './MainButton.css'

interface MainButtonType {
  name: string;
  url: string;
}
const MainButton = ({name, url}: MainButtonType) => {
  return(
    <a href={url} className="main-btn">{name}</a>
  )
}

export default MainButton;