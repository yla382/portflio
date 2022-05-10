import "../stylesheets/Navigation.scss";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import { useState, useEffect } from 'react';

export const Navigation = (
        {
            scrollLanding, 
            scrollTimeLine, 
            scrollSkills, 
            scrollExperiences,
            scrollProjects
        }
    ) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollHandler = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div className="navigation" id={scrollPosition > 0 ? 'nav_background_after' : 'nav_background_original'}>
            <div id="outer_nav">
                <div>
                    <p>John Lee</p>
                </div>
                <div id="inner_nav">
                    <p onClick={() => scrollHandler(scrollLanding)}>Home</p>
                    <p onClick={() => scrollHandler(scrollExperiences)}>Experiences</p>
                    <p onClick={() => scrollHandler(scrollProjects)}>Projects</p>
                    <p onClick={ () => scrollHandler(scrollSkills)}>Skills</p>
                    <p onClick={ () => scrollHandler(scrollTimeLine) }>Timeline</p>
                </div>
                <div id="link_nav">
                    <a href="https://github.com/yla382" target="_blank" rel="noreferrer"><BsGithub/></a>
                    <a href="https://www.linkedin.com/in/john-lee-361641114/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
                </div>
            </div>
        </div>
    );
}

export default Navigation;