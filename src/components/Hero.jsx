import React from "react";
import github from "../assets/images/github.png";
import ig from "../assets/images/ig.png";
import linkedin from "../assets/images/linkedin.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="w-[550px] h-[450px] rounded-full absolute -top-[320px] -translate-x-1/2 left-1/2 blur-2xl z-0 lg:hidden">
        <span>.</span>
      </div>
      <div className="w-full h-[100vh] px-5 flex flex-col gap-5 justify-center items-center">
        <div className="text-center grid grid-cols-1 gap-3">
          <motion.h1
            className="text-2xl font-bold text-slate-700 sm:text-3xl md:text-4xl lg:text-5xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          >
            Bintang Santosa.
          </motion.h1>
          <motion.h2
            className="text-4xl font-bold text-transparent bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text sm:text-5xl md:text-6xl lg:text-7xl z-10"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.9 }}
          >
            Frontend Developer
          </motion.h2>
          <motion.p
            className="font-normal text-slate-600 sm:text-xl md:text-2xl lg:max-w-[700px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1.3 }}
          >
            <span className="text-lg font-bold text-slate-500 sm:text-xl md:text-2xl lg:text-3xl">
              Frontend Developer
            </span>{" "}
            with 2+ years of experience in React.js for developing a website and
            web applications
          </motion.p>
        </div>
        <div className="flex gap-12 md:mt-5">
          {[github, ig, linkedin].map((item) => (
            <motion.a
              href=""
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 1.5 }}
            >
              <img
                className="w-14 bg-slate-100 shadow-md place-self-end rounded-lg hover:-rotate-12 hover:scale-125 sm:w-16 md:w-20"
                src={item}
                alt=""
                srcset=""
              />
            </motion.a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
