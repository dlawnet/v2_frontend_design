import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";
import { CiYoutube } from "react-icons/ci";
function Footer() {
  return (
    <div className="bg-[var(--primary-color)] md:text-xl space-y-4 md:space-y-0 text-[var(--text-color)] md:flex justify-between lg:p-14 p-8 md:gap-6">
      <div className="space-y-3">
        <div>
          <img src="/logo.svg" alt="logo" className="w-[67px] h-[67px]" />
        </div>
        <div className="space-y-3">
          <p> For Legal Education & Networking</p>
          <div className="flex gap-6 items-center">
            <FaInstagram size={20} />
            <TbBrandFacebook size={20} />
            <CiYoutube size={20} />
          </div>
        </div>
      </div>

      <div className="md:space-y-3 space-y-2 flex border-t-[1px] md:border-none border-black flex-col">
        <h1 className="font-semibold py-2">Page</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="md:space-y-3 space-y-2 flex border-t-[1px] md:border-none border-black flex-col">
        <h1 className="font-semibold py-2">Quick Links</h1>
        <Link to="/">E- Research Library</Link>
        <Link to="/">Yellowmart</Link>
        <Link to="/">T’enterprise Mall</Link>
      </div>

      <div className="md:space-y-3 space-y-2 flex border-t-[1px] md:border-none border-black flex-col">
        <h1 className="font-semibold py-2">Office</h1>
        <p>
          Golan Height Place Airport <br /> Road Abuja, Nigeria
        </p>
        <p>+234-805-177-7120</p>
      </div>

      <div className="space-y-1 pt-8 md:pt-0 flex flex-col justify-center items-center border-t-[1px] md:border-none border-black">
        <h1 className="font-semibold py-2">
          © 2023 - 2024 All Rights Reserved
        </h1>
        <p>Powered By </p>
        <img src="/powered.png" alt="logo" className="w-[70px] h-[70px]" />
        <p>Buckingham Law Consortium</p>
        <p>Abuja, London & New York </p>
      </div>
    </div>
  );
}

export default Footer;
