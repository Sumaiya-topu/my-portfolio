import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import ContactForm from "./Components/ContactForm/ContactForm";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Skill from "./Components/Skills/Skill";

import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <div data-theme="business" className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
