import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import { navItems } from "./data/navigation";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const SCROLL_OFFSET = 0;

function App() {
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  const handleNavigate = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const top =
      target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="bg-ink text-paper selection:bg-accent selection:text-ink">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="lg:pl-72 w-full min-h-screen">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
