import "../stylesheets/AboutMe.scss";

export const AboutMe = () => {
    return (
        <div className="AboutMeContainer">
            <div className="paragraphContainer">
                <h1>About Myself</h1>
                <p>Hi, I'm <span style={{color:"#2196F3"}}>John</span>! 
                    How are you? I am a 4th year
                    Undergraduate student studying Software Systems
                    at <span style={{color:"#CC0633"}}>SFU</span>. 
                    I love to develop especially
                    web based systems. In my previous Co-op with <span style={{color:"#10CC52"}}>Greenlight Innovations</span>, 
                    I've developed internal tools using <span style={{color:"#68A063"}}>Django</span> and <span style={{color:"#61DBFB"}}>React</span> to 
                    improve the company's work flow and data management.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;