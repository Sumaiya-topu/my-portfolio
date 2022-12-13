import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <img
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="w-1/2 mx-auto"
          src={hero}
          alt=""
        />
        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h3 className=" text-white font-semibold mb-5 ">Hello, I'm</h3>
          <h1 className="text-5xl font-bold text-white">Sumaia Akter</h1>
          <p className="mt-2">Full Stack Developer</p>
          <a href="Sumaia Akter.pdf" download="Sumaia Akter (1).pdf">
            <button className="btn btn-accent mt-5 rounded-sm text-white font-bold px-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-400">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
