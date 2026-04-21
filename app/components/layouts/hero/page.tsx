import { Button } from "../../retroui/Button";

const HeroSection = () => {
  return (
    <div className="min-h-[50vh] md:min-h-[40vh] flex flex-col justify-center items-center text-center mb-16 md:mb-32 relative px-2 mt-4 md:mt-0">
      <div className="absolute top-10 left-70 w-16 h-16 bg-purple-300 rounded-full border-[3px] border-black shadow-hard animate-bounce delay-75 hidden lg:block opacity-20"></div>
      <div className="absolute bottom-30 right-70 w-12 h-12 bg-orange-300 rotate-12 border-[3px] border-black shadow-hard animate-pulse hidden lg:block opacity-20"></div>

      <div className="inline-flex items-center gap-2 bg-red-500 px-3 py-2 bg-pop-orange border-[3px] border-black shadow-[4px_4px_0px_0px_#000] text-white rounded-full mb-6 md:mb-8 font-bold transform md:-rotate-3 hover:rotate-0 transition-transform cursor-default animate-enter text-xs md:text-base">
        <div className="w-4 h-4 md:w-5 md:h-5" />
        <h1>👋 HELLO WORLD! I'M MUHAMMAD CHAIRUL HAMSY</h1>
      </div>

      <h2 className="text-4xl md:text-8xl font-black mb-4 md:mb-6 leading-tight md:leading-none animate-enter delay-100">
        SOFTWARE <br />
        <span className="marker-highlight text-candy-text relative inline-block transform hover:-rotate-1 transition-transform">
          ENGINEER
        </span>
      </h2>

      <p className="text-base md:text-2xl max-w-2xl text-gray-700 mb-6 md:mb-10 font-medium animate-enter delay-200 px-4">
        Building modern, fast, and interactive web applications. Focused on
        clean code, performance, and impactful user experience.
      </p>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 animate-enter delay-300 w-full md:w-auto px-4">
      <Button className="py-5 px-10">
        VIEW PROJECT →
      </Button>
      <Button className="py-5 px-10">
        RESUME
      </Button>
      </div>
    </div>
  );
};

export default HeroSection;
