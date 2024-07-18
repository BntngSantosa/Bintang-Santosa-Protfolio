import React, { useState, useEffect } from "react";
import images from "../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);

  return (
    <>
      <div className="px-5 bg-gradient-to-b from-white to-sky-100 lg:px-20 pt-10">
        <div className="text-center mb-5">
          <h1
            className="text-2xl font-bold italic text-transparent bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text mb-5 sm:text-3xl lg:text-6xl lg:py-5"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Highlight Projects{" "}
            <span className="text-3xl text-yellow-300 not-italic md:text-4xl lg:text-6xl">
              📂
            </span>
          </h1>
          <p
            className="text-slate-700 px-4 sm:text-md lg:text-2xl lg:px-72"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            These are some of the projects I have created. These projects have
            not only helped me build my portfolio, but also enhanced the skills
            I have developed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div
            className="w-full bg-white p-5 flex flex-col justify-between gap-2 rounded-lg overflow-hidden hover:shadow-lg hover:scale-95 transition-all ease-out"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img src={images.project1} alt="" className="w-full rounded-t-lg" />
            <h2 className="text-md text-cyan-800 font-semibold italic md:text-lg">
              MoView
            </h2>
            <div className="w-full flex flex-col gap-2">
              <h3 className="font-normal text-sm">Movie Web -</h3>
              <div className="flex gap-3 items-center">
                <img
                  src={images.javascript}
                  alt=""
                  className="w-4 h-5 md:w-6 md:h-7"
                />
                <img
                  src={images.tailwind}
                  alt=""
                  className="w-5 h-4 md:w-7 md:h-6"
                />
              </div>
            </div>
          </div>
          <div
            className="w-full bg-white p-5 flex flex-col justify-between gap-2 rounded-lg overflow-hidden hover:shadow-lg hover:scale-95 transition-all ease-out"
            data-aos="fade-up"
            data-aos-duration="2300"
          >
            <img src={images.project2} alt="" className="w-full rounded-t-lg" />
            <h2 className="text-md text-purple-800 font-semibold italic md:text-lg">
              Aquastarium
            </h2>
            <div className="w-full flex flex-col gap-2">
              <h3 className="font-normal text-sm">Water Monitoring -</h3>
              <div className="flex gap-3 items-center flex-wrap">
                <img
                  src={images.javascript}
                  alt=""
                  className="w-4 h-5 md:w-6 md:h-7"
                />
                <img
                  src={images.php}
                  alt=""
                  className="w-12 h-7 md:w-14 md:h-8"
                />
                <img src={images.c} alt="" className="w-6 h-6 md:h-8 md:w-8" />
                <img
                  src={images.tailwind}
                  alt=""
                  className="w-5 h-4 md:w-7 md:h-6"
                />
                <img
                  src={images.mysql}
                  alt=""
                  className="w-8 h-6 md:w-10 md:h-8"
                />
                <img
                  src={images.hivemq}
                  alt=""
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
            </div>
          </div>
          <div
            className="w-full bg-white p-5 flex flex-col justify-between gap-2 rounded-lg overflow-hidden hover:shadow-lg hover:scale-95 transition-all ease-out"
            data-aos="fade-up"
            data-aos-duration="2600"
          >
            <img src={images.project3} alt="" className="w-full rounded-t-lg" />
            <h2 className="text-md text-slate-600 font-semibold italic">
              Pas Visitor
            </h2>
            <div className="w-full flex flex-col gap-2">
              <h3 className="font-normal text-sm">Perpanjang Pas Visitor -</h3>
              <div className="flex gap-3 items-center">
                <img
                  src={images.javascript}
                  alt=""
                  className="w-4 h-5 md:w-6 md:h-7"
                />
                <img
                  src={images.bootstrap}
                  alt=""
                  className="w-6 h-5 md:w-8 md:h-7"
                />
                <img
                  src={images.spreadsheet}
                  alt=""
                  className="w-8 h-7 md:w-10 md:h-9"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
