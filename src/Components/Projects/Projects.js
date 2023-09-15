import React from "react";
import painted_lady from "../../assets/painted loady logo-01 (1).png";
import ipix from "../../assets/go-tutor.png";
import gotutor from "../../assets/apple-touch-icon.png";
import code_camp from "../../assets/logo.png";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      img: gotutor,
      title: "GO-Tutor",
      live_link: "https://go-tutor.netlify.app/",
    },
    {
      img: painted_lady,
      title: "Painted-Lady",
      live_link: "https://painted-lady.web.app/",
    },
    {
      img: ipix,
      title: "i-Pix",
      live_link: "https://ipix-ad895.web.app/",
    },
  ];

  return (
    <div className="projects lg:h-screen">
      <hr
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        className="w-3/4 mx-auto"
      />
      <h1
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="text-xl w-3/4 mx-auto text-start lg:text-2xl text-slate-200 font-sans mt-44"
      >
        Latest Projects_____________________
      </h1>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-anchor-placement="center-bottom"
        className=" grid grid-cols-1 lg:grid-cols-3 w-3/4 mx-auto my-32"
      >
        {projects.map((project) => (
          <Link to={project.live_link}>
            {" "}
            <div className=" hover:-translate-y-1 hover:scale-125 duration-300 lg:mt-20">
              <div className="flex justify-center">
                <div className=" bg-black w-52 h-52 border rounded-full">
                  <img src={project.img} className=" w-full p-10 " alt="" />
                </div>
              </div>
              <div className=" lg:p-10 ">
                <a href={project.live_link}>
                  <h1 className="text-2xl font-bold text-orange-400 text-center hover:text-rose-500">
                    {project.title}
                  </h1>
                </a>
              </div>
              <div className="divider"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
