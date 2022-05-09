import "../stylesheets/Skills.scss";
import {
    SiDjango, 
    SiReact, 
    SiNodedotjs, 
    SiJupyter, 
    SiPandas,
    SiPostgresql
    } from "react-icons/si"; 

export const Skills = () => {
    return (
        <div className="skills_container">
            <div>
                <p>Skills</p>
                <div className="icon_container">
                    <span id="django"><SiDjango/></span>
                    <span id="react"><SiReact/></span>
                    <span id="nodejs"><SiNodedotjs/></span>
                    <span id="jupyter"><SiJupyter/></span>
                    <span id="pandas"><SiPandas/></span>
                    <span id="postgresql"><SiPostgresql/></span>
                </div>
            </div>
        </div>
    );
}

export default Skills