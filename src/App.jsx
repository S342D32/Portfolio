import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
