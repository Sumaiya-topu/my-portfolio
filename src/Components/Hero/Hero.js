import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.png";
import video from "../../assets/Adobe After Effects Star Field.mp4";

const Hero = () => {
  return (
    <div className="hero">
      {/* <video autoPlay loop muted playsInline className="video">
        <source src={video} type="video/mp4" />
  </video>*/}

      <div className=" absolute ">
        <img className="w-1/2 mx-auto" src={hero} alt="" />
        <h3 className=" text-white font-semibold mb-5 ">Hello, I'm</h3>
        <h1 className="text-5xl font-bold text-white">Sumaia Akter</h1>
        <p className="mt-2">Full Stack Developer</p>
        <a href="Sumaia Akter.pdf" download="Sumaia Akter (1).pdf">
          <button className="btn btn-accent mt-5 rounded-sm text-white font-bold px-10">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
