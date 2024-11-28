import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative">
      <section className="py-20 text-center container mx-auto px-6">
        <div className="grid lg:grid-cols-2 h-full">
          <div className="text-start lg:w-[85%] lg:flex lg:flex-col lg:justify-center lg:items-start">
            <h1 className="text-4xl lg:text-5xl poppins-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              Backend Developer
            </h1>
            <p className="py-12 lg:py-16 text-start text-lg lg:text-lg open-sans-400 leading-relaxed lg:leading-10">
              I am a skilled backend developer with 2 years of experience in
              building server-side applications. My expertise lies in developing
              APIs, Web apps, Websites and more ...
            </p>
            <button className="btn btn-md btn-outline btn-primary lg:btn-lg">
              Let's collaborate
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="h-full w-full bg-blue-300"></div>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="-bottom-10"
      >
        <path
          fill="#4a00ff"
          fill-opacity="1"
          d="M0,64L48,106.7C96,149,192,235,288,234.7C384,235,480,149,576,149.3C672,149,768,235,864,229.3C960,224,1056,128,1152,112C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
