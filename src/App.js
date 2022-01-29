import './App.css';
import Header from './components/header/header';
import MainBlock from './components/MainBlock/mainblock'
import About from './components/about/about';
import Skills from './components/skills/skill';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import CopyRight from './components/copyright/copyright';


function App() {
  return (
    <div className="App">
      <Header />
      <MainBlock />
      <About />
      <Skills />
      <Work />
      <Contact />
      <CopyRight />
    </div>
  );
}

export default App;
