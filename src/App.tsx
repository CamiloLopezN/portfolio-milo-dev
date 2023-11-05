import "./App.css";
import Home from "./app/components/pages/home/Home";
import Header from "./app/components/public/header/Header";
import Skills from "./app/components/pages/skills/Skills.tsx";
import Work from "./app/components/pages/work/Work.tsx";
import AboutMe from "./app/components/pages/about-me/AboutMe.tsx";
import Contact from "./app/components/pages/contact/Contact.tsx";


function App() {

  return (
    <>
      <section style={{ display: "flex", flexDirection: "column", height: "20%" }}>
        <Header />
        <Home />
      </section>
      <Skills />
      <Work />
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;
