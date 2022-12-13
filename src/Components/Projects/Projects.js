import React from "react";
import painted_lady from "../../assets/painted loady logo-01 (1).png";
import ipix from "../../assets/painted loady logo-02 (1).png";
import code_camp from "../../assets/logo.png";

const Projects = () => {
  const projects = [
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
    {
      img: code_camp,
      title: "Code-Camp",
      live_link: "https://code-camp-85c2d.web.app/",
    },
  ];

  return (
    <div className="">
      <hr className="w-3/4 mx-auto" />
      <div className=" grid grid-cols-1 lg:grid-cols-3 w-3/4 mx-auto my-32">
        {projects.map((project) => (
          <div className="p-4">
            <div className="flex justify-center">
              <div className=" bg-black mt-10 w-52 h-52 border rounded-full border-slate-900">
                <img src={project.img} className=" w-full p-10 " alt="" />
              </div>
            </div>
            <div className=" lg:p-10 ">
              <a href={project.live_link}>
                <h1 className="text-2xl font-bold text-orange-400 text-center">
                  {project.title}
                </h1>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
