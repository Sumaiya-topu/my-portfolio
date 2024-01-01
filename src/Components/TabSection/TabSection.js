import React from "react";
import internCertificate from "../../assets/339732615_926556435053441_8466234969196073202_n.jpg";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Button, Carousel, Typography } from "@material-tailwind/react";
import sustHackathon from "../../assets/1675796839034.jpg";
import samurai1 from "../../assets/1671992010680.jpg";
import samurai2 from "../../assets/1671992009993.jpg";

const TabSection = () => {
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap  justify-center w-3/4 mx-auto pt-28 md:gap-10 h-screen">
        <div className="w-full items-center">
          <div className=" md:text-right w-full  ">
            <p>
              Successfully Completed the internship program <br /> as a{" "}
              <span className=" text-green-300 text-2xl font-serif">
                MERN Stack Developer at <span className="  ">Thinky Storm</span>
                .
              </span>{" "}
              <br />
              <small>Jan 01,2023 to Apr 01,2023 </small>{" "}
            </p>
          </div>
        </div>
        <div>
          <img className="" src={internCertificate} alt="" />
        </div>
      </div>
      <div className="bg-[#2629269b] pt-28">
        {" "}
        <div className="w-3/4 mx-auto mb-5">
          <h1 className="text-left text-2xl flex items-end gap-2 font-sans">
            Other Activities <AiOutlineDoubleRight></AiOutlineDoubleRight>
          </h1>
        </div>
        {/* slider start */}
        <Carousel className="lg:rounded-xl  lg:w-3/4 mx-auto">
          <div className="relative h-full w-full">
            <img
              src={samurai1}
              alt="Code samurai 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Code Samurai-2022
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className=" opacity-80"
                >
                  Inter-University Hackathon for two days. It was a great
                  experience.
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src={samurai2}
              alt="Code samurai"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Code Samurai-2022
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Inter-University Hackathon for two days. It was a great
                  experience.. Everyone was so tired, exhausted and thrilled.
                </Typography>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src={sustHackathon}
              alt="Sust Hackathon"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  SUST SWE Technovent 2023
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Me and my team, we’ve unlocked a new charm of ours by
                  participating in the 36 hours Hackathon on SUST SWE Technovent
                  2023 . It was crazy.
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TabSection;
