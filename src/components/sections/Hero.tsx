import { Button } from "../retroui/Button";
import { FileUser, MoveDown } from "lucide-react";
import { Card } from "../retroui/Card";

const Hero = () => {
return (
    <section id="/" className="min-h-[50vh] md:min-h-screen flex flex-col justify-center items-center text-center relative px-2 md:mt-0">
      <div className="absolute top-20 left-3 md:top-50 md:left-5 md:lg:top-45 lg:left-70 w-10 h-10 lg:w-16 lg:h-16 bg-purple-300 rounded-full border-[3px] border-black  shadow-[4px_4px_0px_0px_#000] animate-bounce delay-75 opacity-20"></div>

      <div className="absolute bottom-70 right-3 md:bottom-50 md:right-5 lg:bottom-50 lg:right-70 w-9 h-9 lg:w-12 lg:h-12 bg-orange-300 rotate-12 border-[3px] border-black  shadow-[4px_4px_0px_0px_#000] animate-pulse opacity-20 "></div>

      <Card className="inline-flex items-center bg-destructive px-3 py-2 text-background border-[3px] rounded-full border-black mb-6 md:mb-8 font-bold transform md:-rotate-3 hover:shadow-[4px_4px_0px_0px_#000] hover:rotate-0 transition-transform cursor-default animation-enter text-xs md:text-base">
        <h1 className="text-sm md:text-lg">
          👋 HELLO I'M MUHAMMAD CHAIRUL HAMSY
        </h1>
      </Card>

      <h2
        className="text-5xl md:text-8xl font-black mb-4 md:mb-6 leading-tight md:leading-none animate-enter delay-100"
        style={{ WebkitTextStroke: "2px black" }}
      >
        FRONTEND <br />
        <span className="marker-highlight relative inline-block transform hover:-rotate-1 transition-transform">
          DEVELOPER
        </span>
      </h2>

      <p className="text-lg md:text-2xl max-w-2xl text-secondary mb-6 md:mb-10 font-medium animate-enter delay-200 px-4">
        Building modern, fast, and interactive web applications. Focused on
        clean code, performance, and impactful user experience.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4 animate-enter delay-300 w-full md:w-auto px-4">
        <Button className="w-full md:w-auto rounded-lg py-2 px-4 md:py-3 md:px-6 gap-2 text-lg justify-center">
          VIEW PROJECT
          <span className="border rounded-full py-1 bg-foreground">
            <MoveDown height={13} strokeWidth={4} className="text-primary" />
          </span>
        </Button>

        <Button className="w-full md:w-auto rounded-lg py-2 px-3 gap-2 text-lg justify-center">
          RESUME
          <FileUser width={15} strokeWidth={4} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
