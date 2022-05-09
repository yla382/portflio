import './App.scss';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
// import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import { useRef } from 'react';

function App() {
  const scrollTimeLine = useRef();
  const scrollSkills = useRef();
  const scrollLanding = useRef();

  return (
    <div className="App">
      <Navigation 
        scrollLanding={ scrollLanding }
        scrollTimeLine={ scrollTimeLine }
        scrollSkills={ scrollSkills }
      />
      <Landing scrollLanding={ scrollLanding }/>
      {/* <AboutMe/> */}
      <Skills scrollSkills={ scrollSkills }/>
      <Timeline scrollTimeLine={ scrollTimeLine }/>
    </div>
  );
}

export default App;
