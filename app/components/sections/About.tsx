import Image from "next/image";
import { Card } from "../retroui/Card";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-around gap-10 px-4 py-20 sm:px-6 lg:px-8 pt-20 sm:pt-32 lg:pt-36">
      <div className="relative shrink-0">
        {/* Bintang Berputar */}
        <div className="absolute -top-5 -left-5 z-10 text-primary text-4xl drop-shadow-md animate-spin-star select-none">
          ★
        </div>

        {/* Polaroid wrapper */}
        <div className="relative border-[3px] shadow-brutal rounded-lg p-3 pb-9 -rotate-2">
          <Card
            className="rounded-md overflow-hidden"
            style={{
              border: "3px solid #1a1a1a",
              boxShadow: "6px 6px 0px #1a1a1a",
              borderRadius: "8px",
            }}
          >
            <Image
              src="/image/about.gif"
              alt="profile"
              width={400}
              height={400}
              className="object-cover block w-[400px] h-[400px]"
              priority
            />
          </Card>

          {/* Instant Results badge */}
          <div className="absolute bottom-3 right-4 bg-primary border-2 border-[#1a1a1a] rounded text-[11px] font-bold font-mono text-primary-foreground px-2.5 py-0.5 tracking-wider select-none">
            My Profile
          </div>
        </div>
      </div>

      {/* Card Text */}
      <div className="flex-1 max-w-xl">
        <Card
          className="p-6 lg:p-8 rounded-lg"
          style={{
            border: "3px solid #1a1a1a",
            boxShadow: "6px 6px 0px #1a1a1a",
          }}
        >
          <Card.Title className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            About Me
          </Card.Title>
          <Card.Description className="text-[13px] md:text-[15px] leading-relaxed text-secondary">
            My name is <strong>Muhammad Chairul Hamsy</strong>. I am a
            professional and enthusiastic programmer in my daily life. I am a
            quick learner with a self-learning attitude. I love to learn and
            explore new technologies and am passionate about problem-solving. I
            love almost all the stacks of web application development and love
            to make the web more open to the world. My core skill is based on{" "}
            <strong>JavaScript</strong> and I love to do most of the things
            using JavaScript. I am available for any kind of job opportunity
            that suits my skills and interests.
          </Card.Description>
        </Card>
      </div>
    </section>
  );
};

export default About;
