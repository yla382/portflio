import './App.scss';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
// import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { useRef } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particle_config from "./configs/tsparticle_config";

function App() {
  const scrollExperiences = useRef();
  const scrollProjects = useRef();
  const scrollTimeLine = useRef();
  const scrollSkills = useRef();
  const scrollLanding = useRef();

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      <Particles
          id="particles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particle_config}
      />
      <Navigation 
        scrollLanding={ scrollLanding }
        scrollExperiences={ scrollExperiences }
        scrollTimeLine={ scrollTimeLine }
        scrollSkills={ scrollSkills }
        scrollProjects={ scrollProjects }
      />
      <Landing scrollLanding={ scrollLanding }/>
      <Experiences scrollExperiences={ scrollExperiences }/>
      <Projects scrollProjects={ scrollProjects }/>
      {/* <AboutMe/> */}
      <Skills scrollSkills={ scrollSkills }/>
      <Timeline scrollTimeLine={ scrollTimeLine }/>
      <Footer/>
    </div>
  );
}

export default App;
