import './About.css'
import description from './description';
import MainButton from '../button/MainButton';
import SkillsList from '../skillsList/SkillsList';

const About = () => {
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
          <MainButton name='Contact' url='#contact'/>
        </div>
        <div className='about__skills'>
          <h3 className='skills-header'>My Skills</h3>
          <SkillsList props={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Jest']}/>
        </div>
      </div>
      
    </section>
  )
}

export default About;