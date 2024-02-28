import projectsList from "../projects/ProjectList";
import SkillsList from "../skillsList/SkillsList";
import MainButton from "../button/MainButton";
import './ProjectPage.css'


interface ProjectPageType {
  id: string;
  onClick: any;
}

const ProjectPage = ({id, onClick}: ProjectPageType) => {
  const index = projectsList.map((project) => project.id).indexOf(id);
  const currentProject = projectsList[index];

  return(
    <section className='current-project'>
      <h1 className='current-project__name'>{currentProject.name}</h1>
      <div className='current-project__container'>
        <div className="current-project__img-container">
          <img src={currentProject.img} className="current-project__img"></img>
        </div>
        <div className='current-project__content'>
          <p className='current-project__description'>{currentProject.description}</p>
          <SkillsList props={currentProject.skills}/>
          <MainButton id={''} name='Back' onClick={onClick}/>
        </div>
      </div>
      
    </section>
  )
}

export default ProjectPage;