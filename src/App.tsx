import './App.css'
import Main from './components/main/Main'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useState } from 'react'

function App() {
  const [project, setProject] = useState('');

  function onMenuItemClick() {
    setProject('');
    if (mobile === 'flex') {
      setMobile('none');
    } 
  }

  const onClick = (e: any) => {
    setProject(e.target.id);
  }

  const [mobile, setMobile] = useState('none');

  function onMenu() {
    (mobile === 'none') ? setMobile('flex'): setMobile('none');    
  }

  return (
    <>
      <Header onMenuItemClick={onMenuItemClick} mobile={mobile} onMenu={onMenu}/>
      <Main onClick={onClick} project={project}/>
      <Footer />
    </>
  )
}

export default App;
