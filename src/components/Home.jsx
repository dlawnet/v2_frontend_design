// import { ImArrowUpRight2 } from "react-icons/im";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CarouselVII from "./constant/CarouselVII";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import { ImArrowUpRight2 } from "react-icons/im";
// import Carousel from "./constant/Carousel";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="">
      <Navbar />

      <div>
        <div className="bg-[url('/hero.svg')] bg-no-repeat bg-cover py-8 md:px-14 lg:px-32 flex flex-col justify-center items-center mx-auto">
          <div className="md:flex flex-col justify-center py-2 items-center">
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <h1 className="text-3xl animate-pulse sm:text-[2rem] md:text-5xl lg:text-[2.2rem] px-8 lg:px-14 md:px-0 xl:text-[2.9rem] font-bold leading-tight pb-6 py-14 md:py-4 text-[rgb(253,223,90,0.6)] md:text-center">
                Unlock your full potential as a Law Student.
              </h1>
            </div>

            <div
              className="flex md:justify-center items-center md:text-center px-8 lg:w-[60%] md:px-0"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="text-[var(--secondary-color)] text-[80%] md:text-[80%] md:w-[80%] lg:text-[100%] xl:text-[120%] md:py-6">
                Join DLawNet today for your Legal Education and Networking.
              </p>
            </div>

            <button
              onClick={() => navigate("/login")}
              className="px-6 z-30 md:mt-4 md:mb-6 mx-8 my-6 md:mx-0 py-3 bg-[var(--primary-color)] rounded-md text-white relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-900 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-500 [text-shadow:3px_5px_2px_#491217;] hover:[text-shadow:2px_2px_2px_#491217]"
            >
              Get Started
            </button>
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            {/* <div className="md:flex md:space-y-0 gap-8 justify-center"> */}
            {/* First Card */}
            {/* <div className="bg-[var(--secondary-color)] overflow-hidden relative transition-all duration-700 hover:shadow-[0_0_15px_#ffff] hover:-translate-y-10 p-3 mx-8 md:mx-0 md:pt-4 rounded-md md:px-2 lg:px-4 md:w-[100%] w-[80%] shadow-2xl space-y-3">
                <div className="flex justify-end">
                  <ImArrowUpRight2
                    className="font-bold text-[var(--primary-color)] cursor-pointer w-[10%] h-[10%]"
                    onClick={() => navigate("/login")}
                  />
                </div>
                <div className="py-3">
                  <img
                    src="/student.svg"
                    alt="student"
                    className="font-bold text-[var(--primary-color)] md:w-[20%] w-[15%]"
                  />
                </div>

                <p className="text-[var(--primary-color)] pt-2 font-semibold text-[90%] md:text-[90%] lg:text-[100%]">
                  In all areas of Law, get help from our panel of experts for
                  exam preps & tutorials.
                </p>
              </div> */}

            {/* Second Card */}
            {/* <div className="md:block hidden overflow-hidden relative transition-all duration-700 hover:shadow-[0_0_15px_#ffff] hover:-translate-y-10 bg-[var(--secondary-color)] rounded-md md:px-2 lg:px-4 w-[100%] shadow-2xl space-y-3">
                <div className="flex justify-end">
                  <ImArrowUpRight2
                    className="font-bold text-[var(--primary-color)] cursor-pointer w-[10%] h-[10%]"
                    onClick={() => navigate("/login")}
                  />
                </div>
                <div className="py-3">
                  <img
                    src="/calender.png"
                    alt="calendar"
                    className="font-bold text-[var(--primary-color)] md:w-[30%] w-[15%]"
                  />
                </div>


                <p className="text-[var(--primary-color)] pt-2 font-semibold text-[90%] md:text-[100%] lg:text-[110%] xl:text-[120%]">
                  Get connected with other law school students & activities
                  Nationwide.
                </p>
              </div> */}

            {/* Third Card */}
            {/* <div className="md:block hidden overflow-hidden relative transition-all duration-700 hover:shadow-[0_0_15px_#ffff] hover:-translate-y-10 bg-[var(--secondary-color)] py-4 rounded-md md:px-2 lg:px-4 md:w-[100%] shadow-2xl space-y-3">
                <div className="flex justify-end">
                  <ImArrowUpRight2
                    size={40}
                    className="font-bold cursor-pointer text-[var(--primary-color)]"
                    onClick={() => navigate("/login")}
                  />
                </div>
                <div className="py-3">
                  <img
                    src="/law.svg"
                    alt="law"
                    className="font-bold text-[var(--primary-color)] md:w-[40%] cursor-pointer"
                  />
                </div>

                <p className="text-[var(--primary-color)] pt-2 font-semibold text-[90%] md:text-[100%] lg:text-[110%] xl:text-[120%]">
                  Watch & learn how to moot from the best.
                </p>
              </div> */}

            {/* Fourth Card */}
            {/* <div className="md:block hidden overflow-hidden relative transition-all duration-700 hover:shadow-[0_0_15px_#ffff] hover:-translate-y-10 bg-[var(--secondary-color)] py-4 rounded-md md:px-2 lg:px-4 w-[100%] shadow-2xl space-y-3">
                <div className="flex justify-end">
                  <ImArrowUpRight2
                    size={40}
                    className="font-bold cursor-pointer text-[var(--primary-color)]"
                    onClick={() => navigate("/login")}
                  />
                </div>
                <div className="py-3">
                  <img
                    src="/data.svg"
                    alt="data"
                    className="font-bold text-[var(--primary-color)] md:w-[30%] cursor-pointer"
                  />
                </div>

                <p className="text-[var(--primary-color)] pt-2 font-semibold text-[90%] md:text-[100%] lg:text-[110%] xl:text-[120%]">
                  In all areas of Law, get help from our panel of experts for
                  exam preps & tutorials.
                </p>
              </div> */}

            {/* </div> */}

            {/* <div className="flex items-center">
              <div>Next</div>
              <div className="flex gap-6 px-8">
                <div className="w-64 bg-[var(--secondary-color)] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] pt-20 pb-4 px-6 space-y-3 relative overflow-hidden">
                  <div className="w-24 h-24 bg-[var(--primary-color)] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">
                      01
                    </p>
                  </div>
                  <img
                    src="/student.svg"
                    alt="student"
                    className="font-bold text-[var(--primary-color)] md:w-[20%] w-[15%]"
                  />
                  <p className="text-lg leading-7 py-2">
                    In all areas of Law, get help from our panel of experts for
                    exam preps & tutorials.
                  </p>
                </div>

                <div className="w-64 bg-[var(--secondary-color)] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] pt-20 pb-4 px-6 space-y-3 relative overflow-hidden">
                  <div className="w-24 h-24 bg-[var(--primary-color)] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">
                      02
                    </p>
                  </div>
                  <img
                    src="/calender.png"
                    alt="calendar"
                    className="font-bold text-[var(--primary-color)] md:w-[25%] w-[15%]"
                  />
                  <p className="text-lg leading-7 py-2">
                    Get connected with other law school students & activities
                    Nationwide.
                  </p>
                </div>

                <div className="w-64 bg-[var(--secondary-color)] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] pt-20 pb-4 px-6 space-y-3 relative overflow-hidden">
                  <div className="w-24 h-24 bg-[var(--primary-color)] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">
                      03
                    </p>
                  </div>
                  <img
                    src="/law.svg"
                    alt="law"
                    className="font-bold text-[var(--primary-color)] md:w-[35%] cursor-pointer"
                  />
                  <p className="text-lg leading-7 py-2">
                    Watch & learn how to moot from the best.
                  </p>
                </div>

                <div className="w-64 bg-[var(--secondary-color)] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] pt-20 pb-4 px-6 space-y-3 relative overflow-hidden">
                  <div className="w-24 h-24 bg-[var(--primary-color)] rounded-full absolute -right-5 -top-7">
                    <p className="absolute bottom-6 left-7 text-white text-2xl">
                      04
                    </p>
                  </div>
                  <img
                    src="/data.svg"
                    alt="data"
                    className="font-bold text-[var(--primary-color)] md:w-[25%] cursor-pointer"
                  />
                  <p className="text-lg leading-7 py-2">
                    In all areas of Law, get help from our panel of experts for
                    exam preps & tutorials.
                  </p>
                </div>
              </div>
              <div>
                <MdNavigateNext />
              </div>
            </div> */}

            <CarouselVII />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
