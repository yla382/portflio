import "../stylesheets/Projects.scss";
import "../App.scss";

export const Projects =({ scrollProjects }) => {
    return (
        <div className="pageContainer projects_container" ref={ scrollProjects }>
            <div>
                <h1>Projects</h1>
            </div>
        </div>
    );
}

export default Projects;