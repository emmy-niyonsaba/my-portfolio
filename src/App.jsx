import { useEffect, useMemo, useState } from 'react';
import './App.css';
import HiSession from './pages/HiSession';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Footer from './pages/Footer';

const SCROLL_OFFSET = 72;

function App() {
  const sections = useMemo(
    () => [
      { id: 'home', label: 'Home', component: <HiSession /> },
      { id: 'about', label: 'About', component: <About /> },
      { id: 'skills', label: 'Skills', component: <Skill /> },
      { id: 'projects', label: 'Projects', component: <Project /> },
      { id: 'resume', label: 'Resume', component: <Resume /> },
      { id: 'footer', label: 'Contact', component: <Footer /> },
    ],
    [],
  );

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 },
    );

    const observed = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    observed.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 320);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="App gradient-canvas text-slate-100">
      <div className="app-shell">
        <div className="ambient" aria-hidden />
        <Navbar
          sections={sections}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        <main className="section-stack">
          {sections.map(({ id, label, component }) => (
            <section key={id} id={id} className="section-panel" aria-label={label}>
              {component}
            </section>
          ))}
        </main>

        {showBackToTop && (
          <button
            type="button"
            className="back-to-top"
            onClick={() => handleNavigate('home')}
            aria-label="Back to top"
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
