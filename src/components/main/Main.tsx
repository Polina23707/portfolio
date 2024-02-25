import About from "../about/About";
import './Main.css'
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

const Main = () => {
  return(
    <div className="main">
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Main;