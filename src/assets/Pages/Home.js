import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Projects from "../../Components/Projects/Projects";
import Skill from "../../Components/Skills/Skill";
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Components/ContactForm/ContactForm";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Skill></Skill>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
