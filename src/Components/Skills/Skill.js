import React from "react";
import skill from "../../assets/hacker.png";

const Skill = () => {
  return (
    <div className="lg:flex item text-left w-3/4 mx-auto lg:mt-32 mb-20 lg:h-[700px]">
      <div className="w-full">
        <h1
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="text-2xl lg:text-4xl mb-10"
        >
          We can talk about___
        </h1>
        <div
          data-aos="fade-up-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <p>Javascript</p>
          <progress
            className="progress progress-primary w-full lg:w-3/4"
            value="95"
            max="100"
          ></progress>
          <p>React Js</p>
          <progress
            className="progress progress-primary w-full lg:w-3/4"
            value="80"
            max="100"
          ></progress>
          <p>HTML & Vanilla CSS</p>
          <progress
            className="progress progress-primary w-full lg:w-3/4"
            value="95"
            max="100"
          ></progress>
          <p>MongoDb</p>
          <progress
            className="progress progress-primary w-full lg:w-3/4"
            value="70"
            max="100"
          ></progress>
          <p>Express Js</p>
          <progress
            className="progress progress-primary w-full lg:w-3/4"
            value="80"
            max="100"
          ></progress>
          <p>Node Js</p>
          <progress
            className="progress progress-primary w-full lg:w-3/4"
            value="85"
            max="100"
          ></progress>
          <p>Other React Library</p>
          <progress
            className="progress progress-primary w-full lg:w-3/4"
            value="60"
            max="100"
          ></progress>
          <p>Problem Solving</p>
          <progress
            className="progress progress-primary w-full lg:w-3/4"
            value="95"
            max="100"
          ></progress>
        </div>
      </div>
      <div className="lg:w-3/4 mt-5 lg:mt-0">
        <img
          data-aos="fade-up-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
          className="w-full "
          src={skill}
          alt=""
        />
      </div>
    </div>
  );
};

export default Skill;
