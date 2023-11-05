import "./App.css";
import Home from "./app/components/pages/home/Home";
import Work from "./app/components/pages/work/Work.tsx";
import Skills from "./app/components/pages/skills/Skills.tsx";
import Contact from "./app/components/pages/contact/Contact.tsx";
import AboutMe from "./app/components/pages/about-me/AboutMe.tsx";
import { SlideMenu } from "./app/components/public/slide-menu/SlideMenu.tsx";
import { ScrollContext } from "./app/contexts/ScrollContext.ts";
import { useState } from "react";

function App() {
  const [isVisibleSlide, setIsVisibleSlide] = useState<boolean>(false);

  return (
    <ScrollContext.Provider value={{ isVisibleSlide, setIsVisibleSlide }}>
      <SlideMenu />
      <Home />
      <Work />
      <Skills />
      <AboutMe />
      <Contact />
    </ScrollContext.Provider>
  );
}

export default App;
