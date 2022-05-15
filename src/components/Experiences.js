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
                    <h3>Greenlight Innovation Corp.</h3>
                    <div className="jobTitle">
                        <p>Web Developer</p>
                        <p>January 2021 - December 2021</p>
                    </div>
                    <div className="jobDescription">
                        <p>
                            At Greenlight Innovation Corp I was mainly
                            responsible for developing and maintaining company's
                            internal web applications using Django and React.
                            During my employment, I've deployed two major web
                            applications. First one was called "Installation Dashboard"
                            where the application allowed System Integration and Testing 
                            Team to help keeping track of their product status, material
                            usages, and task assignments. Second application was called
                            "Feature Request" where our web development team to keep track
                            of bug reports and new feature requests made by employees.
                            In my last 2 months of employement, I was working on developing 
                            company-wide scheduling application for the operation department.
                            Besides the development, I also developed training documentations
                            for future members of the web development team.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;