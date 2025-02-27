import React, { useState, useEffect } from "react";
import images from "../assets/images";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="w-full px-5 py-20 bg-gradient-to-b from-sky-100 to-sky-300 lg:px-20 lg:pt-28 lg:pb-20">
        <div className="mb-10 grid grid-cols-1 gap-5 relative">
          <h1
            className="text-3xl text-slate-700 font-semibold italic md:text-4xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <span className="text-4xl not-italic md:text-5xl lg:text-6xl">
              🪄
            </span>
            Specialized Skills{" "}
            <span className="text-sm not-italic absolute rotate-12 md:text-lg lg:text-xl">
              ✨
            </span>
          </h1>
          <p
            className="font-normal text-slate-500 md:text-lg md:pr-40 lg:text-2xl lg:max-w-[900px]"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            I am someone who enjoys seeking challenges. Here are a few skills
            that I have developed and honed.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 place-items-center md:grid-cols-4 lg:grid-cols-5">
          <div
            className="bg-slate-700 w-[80px] h-[80px] flex rounded-md hover:shadow-xl hover:shadow-slate-700 hover:-translate-y-2 transition-all ease-out lg:w-[160px] lg:h-[160px]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img
              src={images.javascript}
              alt=""
              className="h-8 m-auto lg:w-20 lg:h-24"
            />
          </div>
          <div
            className="bg-slate-700 w-[80px] h-[80px] flex rounded-md hover:shadow-xl hover:shadow-slate-700 hover:-translate-y-2 transition-all ease-out lg:w-[160px] lg:h-[160px]"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <img
              src={images.tailwind}
              alt=""
              className="h-6 m-auto lg:w-20 lg:h-16"
            />
          </div>
          <div
            className="bg-slate-700 w-[80px] h-[80px] flex rounded-md hover:shadow-xl hover:shadow-slate-700 hover:-translate-y-2 transition-all ease-out lg:w-[160px] lg:h-[160px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <img
              src={images.bootstrap}
              alt=""
              className="h-8 m-auto lg:w-22 lg:h-20"
            />
          </div>
          <div
            className="bg-slate-700 w-[80px] h-[80px] flex rounded-md hover:shadow-xl hover:shadow-slate-700 hover:-translate-y-2 transition-all ease-out lg:w-[160px] lg:h-[160px]"
            data-aos="fade-up"
            data-aos-duration="2300"
          >
            <img
              src={images.php}
              alt=""
              className="h-10 w-24 m-auto lg:w-44 lg:h-24"
            />
          </div>
          <div
            className="bg-slate-700 w-[80px] h-[80px] flex rounded-md hover:shadow-xl hover:shadow-slate-700 hover:-translate-y-2 transition-all ease-out lg:w-[160px] lg:h-[160px]"
            data-aos="fade-up"
            data-aos-duration="2600"
          >
            <img
              src={images.mysql}
              alt=""
              className="h-10 w-12 m-auto lg:w-28 lg:h-24"
            />
          </div>
          <div
            className="bg-slate-700 w-[80px] h-[80px] flex rounded-md hover:shadow-xl hover:shadow-slate-700 hover:-translate-y-2 transition-all ease-out lg:w-[160px] lg:h-[160px]"
            data-aos="fade-up"
            data-aos-duration="2900"
          >
            <img
              src={images.c}
              alt=""
              className="w-12 h-12 m-auto lg:w-28 lg:h-28"
            />
          </div>
          <div
            className="bg-slate-700 w-[80px] h-[80px] flex rounded-md hover:shadow-xl hover:shadow-slate-700 hover:-translate-y-2 transition-all ease-out lg:w-[160px] lg:h-[160px]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src={images.hivemq}
              alt=""
              className="w-10 h-10 m-auto rounded-sm lg:w-20 lg:h-20 lg:rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
