import {FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa"
import Typed from "react-typed"
const Homepage = () => {
    return (
        <>
      
            <section className="homepage">
                <div className="overlay">
                <h1>
                    Sohaib Shaik
                </h1>   

                <Typed className="typed" 
                        strings={["Web Designer", "Front-end Developer", "Web Developer"]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                />

                <ul>
                    <li>
                        <a href ="https://twitter.com/SmSohaib01" className="twitter" target ="_blank" rel="noopener noreferrer"> <FaTwitter /> </a>
                    </li>
                    <li>
                        <a href="https://github.com/shaiksohaib" className="github" target ="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/shaik-sohaib-925b05159/" className="linkedin" target ="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a>
                    </li>

                </ul>

                </div>
            </section>     
        </>
    )
}

export default Homepage
