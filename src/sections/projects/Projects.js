import { ProjectFolder } from "../../contentContainer/ProjectFolder";
import { SiGithub } from "react-icons/si";
import './Projects.css'

const Projects = () => {
  return (
    <section id="projectsSection">
      <h2>Prosjekter</h2>
      <p className="projectInfo">Noen eksempel prosjekter som viser progressjonen min.</p>

      <div className="projectContainer">
        {ProjectFolder.map((project) => (
          <div key={project.id} className="projectCard">
            <img src={project.image} alt="projects" />
            <p className="projectTitle">{project.title}</p>
            <p className="projectDesc">{project.desc}</p>
            <p>{project.skill}</p>  
            <p>
              <a href={project.repo} rel="noreferrer" target="_blank"><SiGithub /></a> 
              <a href={project.githublink} rel="noreferrer" target="_blank">Live Demo</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects