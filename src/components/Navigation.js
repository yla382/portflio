import "../stylesheets/Navigation.scss";
import { useState, useEffect } from 'react';

export const Navigation = () => {
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

    return (
        <div className="navigation" id={scrollPosition > 0 ? 'nav_background_after' : 'nav_background_original'}>
            <div id="outer_nav">
                <div>
                    <p>John Lee</p>
                </div>
                <div id="inner_nav">
                    <p>Menu</p>
                </div>
                <div>
                    <p>Links</p>
                </div>
            </div>
        </div>
    );
}

export default Navigation;