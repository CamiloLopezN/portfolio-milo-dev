import "./App.css";
import Home from "./app/components/pages/home/Home";
import Work from "./app/components/pages/work/Work.tsx";
import Skills from "./app/components/pages/skills/Skills.tsx";
import Contact from "./app/components/pages/contact/Contact.tsx";
import AboutMe from "./app/components/pages/aboutMe/AboutMe.tsx";
import { SlideMenu } from "./app/components/public/slideMenu/SlideMenu.tsx";
import { ScrollContext } from "./app/utils/contexts/ScrollContext.ts";
import { useEffect, useState } from "react";
import { RoutesPath } from "./app/utils/constants";
import { CurrentPathContext } from "./app/utils/contexts/CurrentPathContext.ts";

function App() {
  const [isVisibleSlide, setIsVisibleSlide] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<RoutesPath>(RoutesPath.HOME);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 50 && // Adjust the offset as needed
          scrollPosition < sectionTop + sectionHeight - 50 // Adjust the offset as needed
        ) {
          setCurrentPath(section.id as RoutesPath);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isVisibleSlide, setIsVisibleSlide }}>
      <CurrentPathContext.Provider value={{ currentPath, setCurrentPath }}>
        <SlideMenu />
        <Home />
        <Work />
        <Skills />
        <AboutMe />
        <Contact />
      </CurrentPathContext.Provider>
    </ScrollContext.Provider>
  );
}

export default App;
