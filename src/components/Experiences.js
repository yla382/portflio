import "../stylesheets/Experiences.scss";
import "../App.scss";

export const Experiences = ({ scrollExperiences }) => {
    return (
        <div className="pageContainer experiences_container" ref={ scrollExperiences }>
            <div>
                <h1>Experiences</h1>
            </div>
        </div>
    );
}

export default Experiences;