import About from "../about/About";
import './Main.css'
import Projects from "../projects/Projects";
import ProjectPage from "../projectPage/ProjectPage";

interface MainType {
  onClick: any;
  project: string;
}

const Main = ({onClick, project}: MainType) => {
  // const [project, setProject] = useState('');

  

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