import { FaEnvelope} from "react-icons/fa"

const Contacts = () => {
    return (
        <>
            
            <section className="contacts">
                <h1> Contact Me </h1>
                <ul>
                                      
                    <li>
                        <a className="mailicon" href="mailto:sm.sohaib01@gmail.com"><FaEnvelope className= "Mail_icon" />{" "} </a>
                    </li>
                    <li className="mailname">
                        <a className="taga" href="mailto:sm.sohaib01@gmail.com">
                            sm.sohaib01@gmail.com
                        </a>
                    </li>


                </ul>
            </section>
        </>
    )
}

export default Contacts
