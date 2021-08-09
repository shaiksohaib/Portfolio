import {useState} from "react"
import {ProjectsData} from "../Data/ProjectsData"
import {FaVideo,FaGithub} from "react-icons/fa"
const Projects = () => {
    const [cards, setCards]=useState(ProjectsData)
    
    return (
        <>
            <section className="projects">
                <h1>
                    Projects Page
                </h1>
                <div className="cards">
                    {cards.map(({id,title,desc,github,demo,image})=>( 
                        <article key={id}>
                            <img  src={image} alt={title}/>
                            <h4>{title}</h4>
                            <p>{desc}</p>
                            <ul>
                                <li><a href={github} target ="_blank" rel="noopener noreferrer" className="github_"><FaGithub className="Github__" style={{ marginRight:5}}/>Github</a></li>
                                <li><a href={demo} target ="_blank" rel="noopener noreferrer"className="Demo"><FaVideo className="Demo__" style={{ marginRight:5}} />Demo</a></li>
                            </ul>
                            
                            
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Projects
