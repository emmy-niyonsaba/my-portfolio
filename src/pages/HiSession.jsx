


import React from "react";
import{profile} from '../../public/images/index.js';
const HiSession = () => {

  return (
    <section className="w-full bg-blue-900 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Text Content */}
        <div className="text-white flex flex-col gap-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi There 👋 I am{" "}
            <span className="text-red-400">Emmanuel Niyonsaba</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
            I am a junior software developer who enjoys building modern web
            applications using up-to-date programming languages and frameworks.
            I love solving problems, learning new technologies, and creating
            clean, user-friendly digital experiences.
          </p>

          <button className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-xl text-white font-semibold w-36">
            About Me
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-3xl shadow-lg border-4 border-blue-800"
          />
        </div>
      </div>
    </section>
  );
};

export default HiSession;
