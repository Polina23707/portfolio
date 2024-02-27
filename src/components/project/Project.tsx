import MainButton from "../button/MainButton"
import './Project.css'
import SkillsList from "../skillsList/SkillsList";
import { ProjectType } from "../projects/ProjectList";


const Project = ({id, name, description, img, skills, onClick}:ProjectType) => {
  return(
    <div className='project'>
      <div className="project__img-container">
        <img src={img} className="project__img"></img>
      </div>
      <div className='project__container'>
        <h3 className='project__name'>{name}</h3>
        <p className='project__description'>{description}</p>
        <SkillsList props={skills}/>
        <MainButton name='Read more' id={id} onClick={onClick}/>
      </div>
    </div>
  )
}

export default Project;