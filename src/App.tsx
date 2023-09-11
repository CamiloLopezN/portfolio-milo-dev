import "./App.css";
import AboutMe from "./app/components/pages/about-me/AboutMe";
import Contact from "./app/components/pages/contact/Contact";
import Home from "./app/components/pages/home/Home";
import Skills from "./app/components/pages/skills/Skills";
import Work from "./app/components/pages/work/Work";
import Header from "./app/components/public/header/Header";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Work />
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;
