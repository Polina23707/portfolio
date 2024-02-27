import './Projects.css'
import Project from '../project/Project';
import projectsList from './ProjectList';

interface ProjectsType {
  onClick: any,
}

const Projects = ({onClick}: ProjectsType) => {
  return(
    <section className='projects' id='projects'>
      <h1 className='projects__header'>Portfolio</h1>
      <h2 className='projects__intro'>Here you can learn more about my experience</h2>
      <div className='projects__container'>
        {projectsList.sort((a, b) => (a.id < b.id) ? 1 : -1).map((project) => 
        <Project key={project.id} id={project.id} name={project.name} description={project.description} img={project.img} skills={project.skills} onClick={onClick}/>)}
      </div>
    </section>
  )
}

export default Projects;