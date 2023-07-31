import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.png";
import { FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiDiamondTrophy } from "react-icons/gi";
import { Button, Tooltip } from "@material-tailwind/react";

const Hero = () => {
  return (
    <div>
      <div className=" flex justify-end  items-end gap-5">
        <Tooltip content="Acievements">
          <Link to="/acievement" className="">
            <GiDiamondTrophy
              data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
              className="text-4xl text-red-600 hover:text-white "
            ></GiDiamondTrophy>
          </Link>
        </Tooltip>
        <a
          data-aos="zoom-in-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          href="Sumaia Akter (1).pdf"
          download="Sumaia Akter (1).pdf"
        >
          <button className="btn btn-sm btn-secondary  mr-5  mt-5 rounded-sm text-white font-bold px-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-400">
            Resume
          </button>
        </a>
      </div>
      <div className="hero ">
        <div className=" border-l border-gray-500	 relative ">
          <div
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            className=" absolute -left-5 top-1/2 "
          >
            <a href="https://www.linkedin.com/in/sumaiya-akter-82b387193/">
              <FaLinkedin className="lg:text-4xl bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-white hover:text-blue-600 duration-700"></FaLinkedin>
            </a>
            <a href="https://github.com/Sumaiya-topu">
              <FaGithub className="mt-2 lg:text-4xl bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-700"></FaGithub>
            </a>
            <a href="https://www.facebook.com/sumaiya.jahan.2.0/">
              <FaFacebookSquare className="mt-2 lg:text-4xl bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:bg-white hover:text-blue-600 duration-700"></FaFacebookSquare>
            </a>
          </div>
          <img
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            className="w-1/2 mx-auto saturate-50"
            src={hero}
            alt=""
          />
          <div
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h3 className=" text-white font-semibold mb-5 ">Hello, I'm</h3>
            <h1 className="text-5xl font-bold text-white shadow-sm">
              Sumaia Akter
            </h1>
            <p className="mt-2">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
