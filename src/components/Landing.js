import "../stylesheets/Landing.scss";
import {BsGithub, BsLinkedin} from "react-icons/bs";

// Landing Page add animation later
export const Landing = () => {
    return (
        <div className="landingContainer">
            <div className="typistContainer">
                <h1>Hello, I'm John</h1>
                <p>Software Systems Student from SFU</p>
                <div className="iconContainer">
                    <a href="https://github.com/yla382" target="_blank" rel="noreferrer"><BsGithub/></a>
                    <a href="https://www.linkedin.com/in/john-lee-361641114/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
                </div>
            </div>
        </div>
    );
}

export default Landing;