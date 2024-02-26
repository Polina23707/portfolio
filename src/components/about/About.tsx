import './About.css'
import description from './description';
import SkillsList from '../skillsList/SkillsList';
import projectsList from '../projects/ProjectList';

const About = () => {
  const allSkillsList = () => {
    let allSkills: string[] = [];
    projectsList.map((project) => {
      project.skills.forEach((skill) => {
        if (!allSkills.includes(skill)) {
          allSkills.push(skill);
        } 
      })
    })
    return allSkills.sort();
  }

  return(
    <section className="about" id='about'>
      <h1 className='about__header'>About me</h1>
      <h2 className='about__intro'>I'm a frontend developer from Israel</h2>
      <div className='about__container'>
        <div className='about__content'>
          <h3 className='about__content-header'>Nice to meet you!</h3>
          <p className='about__description'>{description.firstPart}</p>
          <p className='about__description'>{description.secondPart}</p>
          <p className='about__description'>{description.thirdPart}</p>
        </div>
        <div className='about__skills'>
          <h3 className='skills-header'>My Skills</h3>
          <SkillsList props={allSkillsList()}/>
        </div>
      </div>
    </section>
  )
}

export default About;