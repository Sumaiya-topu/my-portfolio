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
          A versatile and passionate Full Stack Developer with a strong
          foundation in cutting-edge technologies and a drive to create
          meaningful and impactful web experiences. <br />
          As a Full Stack Developer, I take a holistic approach to every
          project. From crafting the user interface with elegant design elements
          to architecting robust back-end systems, I believe in creating
          seamless and user-friendly applications that resonate with users and
          deliver exceptional performance.
        </p>
      </div>
    </div>
  );
};

export default About;
