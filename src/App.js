import About from './components/About';
import Header from './components/Header';
import Services from './components/Services';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
