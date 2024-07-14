import About from "./components/About";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { motion } from "framer-motion";

function App() {
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <>
      <Navbar scrollToSection={scrollToSection}/>
      <main className="">
        <motion.section id="Home" className="bg-gradient-to-b from-sky-100 to-white">
          <Hero />
        </motion.section>
        <motion.section id="About" className="pt-5">
          <About />
        </motion.section>
        <motion.section id="Projects">
          <Projects />
        </motion.section>
        <motion.section>
          <Skills />
        </motion.section>
        <motion.section id="Contact">
          <Contact />
        </motion.section>
      </main>
    </>
  );
}

export default App;
