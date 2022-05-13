import "../stylesheets/Experiences.scss";
import "../App.scss";
import greenLightLogo from "../props/greenlight.svg";

export const Experiences = ({ scrollExperiences }) => {
    return (
        <div className="pageContainer experiences_container" ref={ scrollExperiences }>
            <h1>Experiences</h1>
            <div className="experience">
                <img src={greenLightLogo} alt=''/>
                <div className="employment">
                    <h3>Greenlight Innovation Inc</h3>
                    <div className="jobTitle">
                        <p>Web Developer</p>
                        <p>January 2021 - December 2021</p>
                    </div>
                    <div className="jobDescription">
                        <p>
                            this hish is hish ishi fffffffffffffffffffffffffffff
                            ffffffffffffffffffffffffffff ffffffffffffffffffffffffffff
                            ddddddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddd
                            ddddddddddddddddddddddddddddd ddddddddddddddddddddddddddddddddd
                            ddddddddddddddddddddddddddddd ddddd
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;