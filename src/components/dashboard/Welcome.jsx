import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Welcome() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    AOS.init();
  });

  return (
    //   <div className="md:px-14 px-8">
    //     <div className="text-center">
    //       <h1 className="md:text-[32px] text-[25px] font-semibold">Welcome to</h1>

    //       <div className="flex justify-center items-center gap-3">
    //         <img
    //           src="/logo.svg"
    //           alt="logo"
    //           className="md:w-[67px] md:h-[67px] w-[60px] p-2"
    //         />
    //         <h1 className="md:text-[45px] text-[30px] font-semibold text-[var(--secondary-color)]">
    //           DLawNet
    //         </h1>
    //       </div>
    //     </div>
    //     <div className="space-y-3 m-8">
    //       <h1 className="md:text-2xl text-lg">Hello, User</h1>
    //       <p className="md:w-[95%] text-justify md:text-start">
    //         We’re excited to have you with us and can’t wait for you to discover
    //         everything we have in store. Whether you’re here to learn, grow, or
    //         connect, you&apos;re in the right place. Ready to get started?
    //       </p>
    //     </div>
    //     <div className="m-8">
    //       <Link
    //         to={"/"}
    //         className="px-4 py-4 text-sm md:text-base rounded-md bg-[var(--primary-color)] text-[var(--text-color)]"
    //       >
    //         Activate your account and get started
    //       </Link>
    //     </div>
    //   </div>
    // );

    <div className="md:px-16 px-8">
      {/* Welcome Section */}
      <div className="text-center">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h1 className="md:text-[32px] text-[25px] font-semibold">
            Welcome to
          </h1>

          <div className="flex justify-center items-center gap-3">
            <img
              src="/logo.svg"
              alt="logo"
              className="md:w-[67px] md:h-[67px] w-[60px] p-2"
            />
            <h1 className="md:text-[45px] text-[30px] font-semibold text-[var(--secondary-color)]">
              DLawNet
            </h1>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="animate-pulse space-y-4 m-8">
          <div className="h-4 bg-gray-300 rounded-md w-[70%] md:w-[70%]"></div>
          <div className="h-3 bg-gray-300 rounded-md w-[90%] md:w-[60%]"></div>
          <div className="h-3 bg-gray-300 rounded-md w-[80%] md:w-[50%]"></div>
        </div>
      ) : (
        <div className="space-y-3 m-8">
          <h1 className="md:text-2xl text-lg">Hello, User</h1>
          <p className="md:w-[95%] text-justify md:text-start md:text-lg text-sm">
            We’re excited to have you with us and can’t wait for you to discover
            everything we have in store. Whether you’re here to learn, grow, or
            connect, you&apos;re in the right place. Ready to get started?
          </p>
        </div>
      )}

      {/* Activate Account Button */}
      <div className="my-14 mx-8">
        {isLoading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-300 rounded-md w-[10%] md:w-[20%]"></div>
          </div>
        ) : (
          <Link
            to={"/"}
            className="px-4 py-4 text-sm md:text-lg rounded-md bg-[var(--primary-color)] text-[var(--text-color)]"
          >
            Activate your account and get started
          </Link>
        )}
      </div>
    </div>
  );
}

export default Welcome;
