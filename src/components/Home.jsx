import { ImArrowUpRight2 } from "react-icons/im";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="">
      <Navbar />

      <div>
        <div className="bg-[url('/hero.svg')] bg-no-repeat bg-cover py-16 md:px-14 lg:px-32 flex flex-col justify-center items-center mx-auto">
          <div className="md:flex flex-col justify-center py-8 items-center">
            <h1 className="md:text-[42px] text-[38px] font-bold lg:w-[80%] leading-tight pb-6 md:px-36 px-14 py-14 md:py-0 text-[var(--secondary-color)] md:text-center">
              Unlock your full potential as a Law Student.
            </h1>

            <p className="text-[var(--secondary-color)] py-3 md:w-[50%] w-[85%] md:text-center px-14 text-[18px]">
              Join DLawNet today for your Legal Education and Networking.
            </p>

            <button className="px-8 py-4 my-8 mx-14 md:mx-0 rounded-md bg-[var(--primary-color)] text-[var(--secondary-color)]">
              Get Started
            </button>
          </div>

          {/*  */}

          <div className="md:flex space-y-4 md:space-y-0 gap-8 my-8 justify-center">
            <div className="bg-[var(--secondary-color)] mx-14 md:mx-0 p-6 md:py-4 rounded-md md:px-2 lg:px-6 lg:w-[70%] shadow-2xl space-y-3">
              <div className="flex justify-end">
                <ImArrowUpRight2
                  size={40}
                  className="font-bold text-[var(--primary-color)]"
                />
              </div>
              <div className="py-3">
                <img
                  src="/student.svg"
                  alt="student"
                  className="font-bold text-[var(--primary-color)] md:w-[30%] w-[15%]"
                />
              </div>

              <p className="text-[var(--primary-color)] lg:w-[90%] py-2 font-semibold">
                In all areas of Law, get help from our panel of experts for exam
                preps & tutorials.
              </p>
            </div>

            <div className="md:block hidden bg-[var(--secondary-color)] py-4 rounded-md md:px-2 lg:px-8 lg:w-[70%] shadow-2xl space-y-3">
              <div className="flex justify-end">
                <ImArrowUpRight2
                  size={40}
                  className="font-bold text-[var(--primary-color)]"
                />
              </div>
              <div className="py-3">
                <img
                  src="/calender.png"
                  alt="student"
                  className="font-bold text-[var(--primary-color)] md:w-[30%]"
                />
              </div>

              <p className="text-[var(--primary-color)] py-6 font-semibold">
                Get connected with other law school students & activities
                Nationwide.
              </p>
            </div>

            <div className="md:block hidden bg-[var(--secondary-color)] py-4 rounded-md md:px-2 lg:px-8 lg:w-[70%] shadow-2xl space-y-3">
              <div className="flex justify-end">
                <ImArrowUpRight2
                  size={40}
                  className="font-bold text-[var(--primary-color)]"
                />
              </div>
              <div className="py-3">
                <img
                  src="/law.svg"
                  alt="student"
                  className="font-bold text-[var(--primary-color)] md:w-[30%]"
                />
              </div>

              <p className="text-[var(--primary-color)] md:py-6 font-semibold">
                Watch & learn how to moot from the best.
              </p>
            </div>

            <div className="md:block hidden bg-[var(--secondary-color)] py-4 rounded-md md:px-2 lg:px-8 lg:w-[70%] shadow-2xl space-y-3">
              <div className="flex justify-end">
                <ImArrowUpRight2
                  size={40}
                  className="font-bold text-[var(--primary-color)]"
                />
              </div>
              <div className="py-3">
                <img
                  src="/data.svg"
                  alt="student"
                  className="font-bold text-[var(--primary-color)] md:w-[30%]"
                />
              </div>

              <p className="text-[var(--primary-color)] lg:w-[90%] font-semibold">
                In all areas of Law, get help from our panel of experts for exam
                preps & tutorials.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
