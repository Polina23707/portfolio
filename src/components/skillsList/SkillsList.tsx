import Skill from "../skill/Skill"

interface SkillsListType {
  props: string[],
}

const SkillsList = ({props}: SkillsListType) => {
  return(
    <ul className='skills'>
      {props.map((prop) => 
      <Skill key={prop} name={prop}/>
      )} 
    </ul>
  )
}

export default SkillsList;