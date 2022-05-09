import './App.scss';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Landing/>
      <AboutMe/>
      <Skills/>
      <Timeline/>
    </div>
  );
}

export default App;
