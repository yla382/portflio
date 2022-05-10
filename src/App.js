import './App.scss';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
// import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import { useRef } from 'react';

function App() {
  const scrollExperiences = useRef();
  const scrollProjects = useRef();
  const scrollTimeLine = useRef();
  const scrollSkills = useRef();
  const scrollLanding = useRef();

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
