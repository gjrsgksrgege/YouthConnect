import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Button from "../../component/button";

import SkpLogo from "../../assets/skp-logo.png";
import ParishLogo from "../../assets/parish-logo.png";
import Photo from "../../assets/g1.png";
import Photo2 from "../../assets/g2.png";
import Photo3 from "../../assets/g3.png";
import Photo4 from "../../assets/g4.png";
import Photo5 from "../../assets/g5.png";
import Photo6 from "../../assets/g6.png";

const Index = () => {
  return (
    <>
      <Navbar />
      <section className="mx-auto max-w-[96rem] flex flex-col items-center justify-center p-4 md:p-12 lg:px-24 gap-4 md:gap-6">
        <div className="flex flex-row items-center gap-4 md:gap-6">
          <img src={SkpLogo} className="w-16 h-auto" />
          <div className="h-20 w-[2px] bg-gray-300"></div>
          <img src={ParishLogo} className="w-16 h-auto" />
        </div>

        <h1 className="text-4xl lg:text-6xl xl:text-7xl text-center font-black tracking-tighter md:max-w-[85%] lg:max-w-[60%] capitalize">
          A place with aims to{" "}
          <span className="text-[#ffc808]">Reach young people</span> the
          goodness He has shown us
        </h1>

        <p className="text-center text-sm md:max-w-[50%] md:text-lg lg:max-w-[55%]">
          Welcome to the SKP Youth Connect, the first online community created
          for kabataan like you. Here, we grow together in faith, build
          friendships rooted in Christ, and discover the joy of serving others.
        </p>

        <div className="flex flex-row justify-center gap-4">
          <Button BtnName="Sponsorship" />
          <Button BtnName="Join Community" />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 md:py-12">
          <div className="flex flex-row flex-wrap items-baseline justify-center gap-4 max-w-[70%]">
            <img
              src={Photo}
              className="w-[16rem] h-auto object-cover hover:-translate-y-6 hover:-translate-x-6 ease-in-out duration-300"
            ></img>
            <img
              src={Photo2}
              className="w-[16rem] h-auto object-cover hover:-translate-y-6 ease-in-out duration-300"
            ></img>
            <img
              src={Photo3}
              className="w-[16rem] h-auto object-cover hover:-translate-y-6 hover:translate-x-6 ease-in-out duration-300"
            ></img>
            <img
              src={Photo4}
              className="w-[16rem] h-auto object-cover hover:translate-y-6 hover:-translate-x-6 ease-in-out duration-300"
            ></img>
            <img
              src={Photo5}
              className="w-[16rem] h-auto object-cover hover:translate-y-6 ease-in-out duration-300"
            ></img>
            <img
              src={Photo6}
              className="w-[16rem] h-auto object-cover hover:translate-y-6 hover:translate-x-6 ease-in-out duration-300"
            ></img>
          </div>

          <Button BtnName="View All" />
        </div>

        <div className="mt-4 lg:mt-24 w-full max-w-[450px] bg-gray-600 p-6 rounded-xl shrink-0">
          <div className="flex flex-col gap-2 items-center justify-center text-white">
            <p>We share, We listen</p>
            <Button BtnName="Join the academy" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
