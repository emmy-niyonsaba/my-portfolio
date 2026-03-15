import './App.css';
import HiSession from './pages/HiSession';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main>
        <section id="home">
          <HiSession />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skill />
        </section>

        <section id="projects">
          <Project />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
