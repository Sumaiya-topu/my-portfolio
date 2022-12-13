import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div data-theme="business" className="App">
      <Hero></Hero>
      <Projects></Projects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
