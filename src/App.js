
import './App.css';
import Header from './Components/Header';
import HeaderTwo from './Components/HeaderTwo';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HeaderTwo></HeaderTwo>
      <Services></Services>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
