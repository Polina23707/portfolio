interface SkillType {
  name: string,
}

const Skill = ({name}: SkillType) => {
  return(
    <li className='skill'>{name}</li>
  )
}

export default Skill;