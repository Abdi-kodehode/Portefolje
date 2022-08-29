import Header from './component/Header';
import Home from './sections/home/Home';
import About from './sections/about/About';
import Projects from './sections/projects/Projects';
import Icons from './sections/socialmedia/Icons';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Icons />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
