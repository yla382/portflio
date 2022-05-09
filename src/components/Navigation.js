import "../stylesheets/Navigation.scss";
import { useState, useEffect } from 'react';

export const Navigation = ({scrollLanding, scrollTimeLine, scrollSkills}) => {
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
                    <p>Experiences</p>
                    <p>Projects</p>
                    <p onClick={ () => scrollHandler(scrollSkills)}>Skills</p>
                    <p onClick={ () => scrollHandler(scrollTimeLine) }>Timeline</p>
                </div>
                <div>
                    <p>Links</p>
                </div>
            </div>
        </div>
    );
}

export default Navigation;