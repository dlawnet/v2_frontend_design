import React from "react";
import {Button} from "@app/components/base/button";
import ReusableCard from "./ReusableCard";

const Hero = () => {
  return (
    <div className="relative pt-14 flex flex-col justify-center sm:items-center bg-black px-5 sm:bg-none bg-[url('/images/bg-img.png')] bg-cover bg-center py-5">
      <div className="absolute inset-0 bg-black opacity-50 sm:hidden"></div>{" "}
      {/* Dark overlay */}
      <div className="relative flex flex-col sm:items-center">
        <h1 className="text-[#FDDF5A] text-5xl max-w-[673px] sm:text-center font-bold">
          Unlock your full potential as a Law Student.
        </h1>
        <p className="text-[#FDDF5A] text-2xl max-w-[473px] sm:text-center mt-5">
          Join DLawNet today for your Legal Education and Networking.
        </p>
        <Button className="bg-[#491217] w-[158px] h-[57px] text-[#FDDF5A] rounded text-lg mt-5 hover:bg-[#491217] hover:text-white hover:scale-105 transition-transform">
          Get Started
        </Button>
      </div>
      <div className="relative w-full flex md:justify-center gap-4 mt-10 overflow-x-scroll md:overflow-auto md:flex-wrap">
        <div className="flex-shrink-0">
          <ReusableCard
            imageSrc="/images/graduation.png"
            title="Graduation"
            description="In all areas of Law, get help from our panel of experts for exam preps & tutorials."
            hidden="block"
          />
        </div>
        <div className="flex-shrink-0">
          <ReusableCard
            imageSrc="/images/calender.png"
            title="Graduation"
            description="Get connected with other law school students & activities Nationwide."
            hidden=""
          />
        </div>
        <div className="flex-shrink-0">
          <ReusableCard
            imageSrc="/images/court-hammer.png"
            title="Graduation"
            description="Watch & learn how to moot from the best."
            hidden=""
          />
        </div>
        <div className="flex-shrink-0">
          <ReusableCard
            imageSrc="/images/DATA.png"
            title="Graduation"
            description="Access rear Legal materials from our e-law Research Library."
            hidden=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
