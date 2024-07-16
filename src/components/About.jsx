import shape from "../assets/images/shape.png";
import people from "../assets/images/hero-image.png";

const About = () => {
  return (
    <>
      <div className="px-5 grid grid-cols-1 place-items-center pt-20 lg:grid-cols-2 lg:px-20">
        <div className="">
          <div className="relative -z-10 mb-10 overflow-hidden">
            <img
              src={shape}
              alt=""
              className="absolute -z-10 w-40 sm:-top-2 sm:w-52 md:w-60 md:-top-3 lg:w-96 lg:-top-2"
            />
            <h1 className="text-3xl text-slate-700 font-semibold sm:text-3xl lg:text-7xl">
              🧑‍💻 About Me
            </h1>
          </div>
          <p className="text-lg text-slate-700 font-normal lg:text-xl">
            <span className="text-3xl font-semibold text-transparent bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text lg:text-4xl">
              Hello, I'm Bintang!
            </span>{" "}
            a passionate and detail-oriented frontend developer with a knack for
            creating visually stunning and highly functional websites.
          </p>
        </div>
        <img src={people} alt="" width={400} className="lg:w-[600px]" />
      </div>
    </>
  );
};

export default About;
