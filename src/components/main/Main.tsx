import About from "../about/About";
import './Main.css'
import Projects from "../projects/Projects";
import { useState } from "react";
import ProjectPage from "../projectPage/ProjectPage";

const Main = () => {
  const [project, setProject] = useState('');

  const onClick = (e: any) => {
    setProject(e.target.id);
  }

  const checkState = () => {
    if (project === '') {
      return(
        <div className="main">
          <About />
          <Projects onClick={onClick}/>
      </div>
      )

    } else {
      return(
        <div className="main">
          <ProjectPage id={project} onClick={onClick}/>
        </div>
      )
    }
  }

  return(
    <div>
      {checkState()}
    </div>
  )
}

export default Main;