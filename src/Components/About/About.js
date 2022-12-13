import React from "react";

const About = () => {
  return (
    <div
      data-aos="fade-out"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
      className="bg-secondary lg:w-3/4 mx-auto text-lef text-justify p-10 lg:py-20 lg:px-40 bg-opacity-10"
    >
      <div
        data-aos="zoom-up-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <h1 className="">
          A simple brief about{" "}
          <span className="text-2xl lg:text-4xl font-bold text-primary">
            {" "}
            <br />
            Sumaia Akter
          </span>
        </h1>
        <p className="mt-5">
          A full stack developer who is mainly passionate about MERN. A
          developer who is experienced in MongoDB, Express Js, React and Node
          Js. As a javascript coder, it is so much fun to work as a full stack
          developer. As a formar student of Computer Science and Engineering it
          was a great opportunity to boost the skill set.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
