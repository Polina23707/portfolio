import example from '../../img/projects/example.png'

export interface ProjectType {
  id: string;
  name: string;
  description: string;
  img: string;
  skills: string[];
  onClick?: any;
}

const projectsList = [
  {
    id: '1',
    name: 'Responsive web design',
    description: 'description',
    img: example,
    skills: ['HTML5', 'CSS3', 'Flexbox', 'PixelPerfect', 'Responsive/Mobile Design', 'Cross-Browser Development', 'Git', 'VSCode'],
  },
  {
    id: '2',
    name: 'Bitcoin Exchange Startups',
    description: 'description',
    img: example,
    skills: ['JavaScript', 'Git', 'VSCode'],
  },
  {
    id: '3',
    name: 'Money Manager',
    description: 'description',
    img: example,
    skills: ['JavaScript', 'Git', 'VSCode', 'AJAX', 'XHR'],
  },
  {
    id: '4',
    name: 'Retro Game',
    description: 'description',
    img: example,
    skills: ['JavaScript', 'Jest','Webpack','Webpack Dev Server','Babel', 'ESLint', 'Git', 'VSCode'],
  },
  {
    id: '5',
    name: 'React',
    description: 'description',
    img: example,
    skills: ['React', 'TypeScript'],
  },
]

export default projectsList;