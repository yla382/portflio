import "../stylesheets/Projects.scss";
import "../App.scss";
import Carousel from 'react-elastic-carousel'

export const Projects =({ scrollProjects }) => {
    return (
        <div className="pageContainer projects_container" ref={ scrollProjects }>
            <div>
                <h1>Projects</h1>
            </div>
            <div className="sliderContainer">
            <Carousel itemsToShow={1}>
                <div>Project 1</div>
                <div>Project 2</div>
                <div>Project 3</div>
            </Carousel>
            </div>
        </div>
    );
}

export default Projects;