import React from "react";

const About = () => {
  return (
    <section className="flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8 pt-20 sm:pt-32 lg:pt-36">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
        <div className="text-center lg:text-right order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span>About</span> {""}
            <span>Me</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
