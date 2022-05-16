import "../App.scss";
import "../stylesheets/Landing.scss";
import {BsGithub, BsLinkedin} from "react-icons/bs";

// Landing Page add animation later
export const Landing = ({ scrollLanding }) => {

    return (
        <div className="landingContainer pageContainer" ref={ scrollLanding }>
            <div className="typistContainer">
                <h1>Hi, I'm <span style={{color:"#2196F3"}}>John</span></h1>
                <p>Software Systems Student from <span style={{color:"#CC0633"}}>SFU</span></p>
                <div className="iconContainer">
                    <a href="https://github.com/yla382" target="_blank" rel="noreferrer"><BsGithub/></a>
                    <a href="https://www.linkedin.com/in/john-lee-361641114/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
                </div>
            </div>
        </div>
    );
}

export default Landing;