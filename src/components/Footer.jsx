import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
function Footer() {
  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="bg-[var(--primary-color)]">
      <div className=" md:text-xl space-y-4 md:space-y-0 text-[var(--text-color)] md:flex justify-between lg:p-14 p-8 md:gap-6">
        <div className="space-y-3">
          <div>
            <img src="/logo.svg" alt="logo" className="w-[67px] h-[67px]" />
          </div>
          <div className="space-y-3 text-base">
            <p> For Legal Education & Networking</p>
            <div className="flex gap-6 items-center">
              <FaInstagram size={20} />
              <TbBrandFacebook size={20} />
              <CiYoutube size={20} />
            </div>
          </div>
        </div>

        {/* 
      <div className="md:space-y-3 space-y-2 text-base flex border-t-[1px] md:border-none border-black flex-col">
        <h1 className="font-semibold py-2">Page</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div> */}

        <div className="md:space-y-3 space-y-2 flex border-t-[1px] text-base md:border-none border-black flex-col">
          <h1 className="font-semibold py-2">Quick Links</h1>
          <Link to="/">E- Research Library</Link>
          <Link to="/">Yellowmart</Link>
          <Link to="/">T’enterprise Mall</Link>
        </div>

        <div className="md:space-y-3 space-y-2 flex border-t-[1px] text-base md:border-none border-black flex-col">
          <h1 className="font-semibold py-2">Office</h1>
          <p>
            Golan Height Place Airport <br /> Road Abuja, Nigeria
          </p>
          <p>+234-805-177-7120</p>
        </div>

        <div className="space-y-1 pt-8 md:pt-0 flex flex-col text-base justify-center border-t-[1px] md:border-none border-black">
          <img src="/powered.png" alt="logo" className="w-[70px] h-[70px]" />
          <p>Buckingham Law Consortium</p>
          <p>Abuja, London & New York </p>
        </div>

        <div className="absolute right-0 px-4 md:bottom-[-20rem] ">
          <button
            onClick={toTop}
            className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#491217] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[var(--secondary-color)] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-4 overflow-hidden border-2 rounded-full group"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:-rotate-12 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className=" mx-auto w-fit text-sm ">
        <h1 className="text-gray-200 mt-8 py-2">
          © 2023 - 2024 All Rights Reserved
        </h1>
      </div>
    </div>
  );
}

export default Footer;
