import './MainButton.css'

interface MainButtonType {
  id: string;
  name: string;
  onClick: any;
}

const MainButton = ({id, name, onClick}: MainButtonType) => {
  return(
    <button className="main-btn" id={id} onClick={onClick}>{name}</button>
  )
}

export default MainButton;