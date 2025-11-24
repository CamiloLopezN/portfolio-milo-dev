import { useState, useEffect } from 'react';
import Dock from './components/layout/Dock';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Work from './components/sections/Work';
import Contact from './components/sections/Contact';
import { Home, Code2, Briefcase, Mail } from 'lucide-react';

function App() {
  // Initialize from localStorage to prevent flash of wrong section on reload
  const [activeIndex, setActiveIndex] = useState(() => {
    const savedIndex = localStorage.getItem('activeSectionIndex');
    return savedIndex ? parseInt(savedIndex) : 0;
  });

  const dockItems = [
    {
      icon: <Home size={24} />,
      label: 'About',
      onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'rgba(99, 102, 241, 0.5)' // Indigo
    },
    {
      icon: <Code2 size={24} />,
      label: 'Skills',
      onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'rgba(16, 185, 129, 0.5)' // Emerald
    },
    {
      icon: <Briefcase size={24} />,
      label: 'Work',
      onClick: () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'rgba(245, 158, 11, 0.5)' // Amber
    },
    {
      icon: <Mail size={24} />,
      label: 'Contact',
      onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'rgba(236, 72, 153, 0.5)' // Pink
    }
  ];

  // Restore scroll position on mount
  useEffect(() => {
    const savedIndex = localStorage.getItem('activeSectionIndex');
    if (savedIndex) {
      const index = parseInt(savedIndex);
      const sections = ['about', 'skills', 'work', 'contact'];
      const sectionId = sections[index];
      const element = document.getElementById(sectionId);

      if (element) {
        // Small delay to ensure layout is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'instant' });
        }, 100);
      }
    }
  }, []);

  // Save scroll position and handle scroll spy
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const handleScroll = () => {
      if (timeoutId) return;

      timeoutId = setTimeout(() => {
        const sections = ['about', 'skills', 'work', 'contact'];
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        // Check if we're at the bottom of the page
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
          setActiveIndex(sections.length - 1);
          localStorage.setItem('activeSectionIndex', (sections.length - 1).toString());
          timeoutId = undefined;
          return;
        }

        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const { offsetTop, offsetHeight } = section;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveIndex(i);
              localStorage.setItem('activeSectionIndex', i.toString());
              break;
            }
          }
        }
        timeoutId = undefined;
      }, 100); // Throttle to 100ms
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-indigo-500/30">
      <main>
        <Hero />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
      <Dock items={dockItems} initialActiveIndex={activeIndex} />
    </div>
  );
}

export default App;
