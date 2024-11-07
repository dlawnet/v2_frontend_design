"use client";
import React, {useEffect, useState} from "react";
import {Collapsible, CollapsibleContent, CollapsibleTrigger,} from "../../../components/base/collapsible";
import Image from "next/image";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg: breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center bg-[#491217]">
      <div className="p-8 bg-[#491217] text-white min-w-[370px] lg:flex gap-20">
        <div className="border-b pb-2 mr-3 border-[#0F0905] lg:border-none">
          <div className="py-3">
            <Image src="/images/logo.svg" alt="logo" width={50} height={50} />
          </div>
          <p className="mt-2">For Legal education & Networking.</p>
          <div className="flex gap-3 py-5">
            <Image
              src="/images/instagram.png"
              alt="instagram"
              width={24}
              height={24}
            />
            <Image
              src="/images/facebook.png"
              alt="facebook"
              width={24}
              height={24}
            />
            <Image
              src="/images/youtube.png"
              alt="youtube"
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Page Section */}
        <div className="mt-5 mb-10 border-b pb-10 mr-3 border-[#0F0905] lg:border-none">
          {isLargeScreen ? (
            <div>
              <span>Page</span>
              <ul className="flex flex-col gap-3 mt-3 mb-3">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          ) : (
            <Collapsible>
              <CollapsibleTrigger className="w-full" onClick={handleToggle}>
                <div className="flex justify-between">
                  <span>Page</span>
                  <span id="arrow">{isOpen ? "▲" : "▼"}</span>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 mb-3">
                <ul className="flex flex-col gap-3">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>

        {/* Quick Links Section */}
        <div className="mt-5 mb-10 border-b pb-10 mr-3 border-[#0F0905] lg:border-none">
          {isLargeScreen ? (
            <div>
              <span>Quick Links</span>
              <ul className="flex flex-col gap-3 mt-3 mb-3">
                <li>E-research Library</li>
                <li>Yellowmart</li>
                <li>T'enterprise Mall</li>
              </ul>
            </div>
          ) : (
            <Collapsible>
              <CollapsibleTrigger className="w-full" onClick={handleToggle}>
                <div className="flex justify-between">
                  <span>Quick Links</span>
                  <span id="arrow">{isOpen ? "▲" : "▼"}</span>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 mb-3">
                <ul className="flex flex-col gap-3">
                  <li>E-research Library</li>
                  <li>Yellowmart</li>
                  <li>T'enterprise Mall</li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>

        <div className="border-b pb-10 mr-3 border-[#0F0905] lg:border-none lg:mt-5">
          <p>Office</p>
          <p className="w-[150px] mt-5">
            Golan Height Place Airport Road Abuja, Nigeria
          </p>
          <p className="mt-5">+234-805-177-7120</p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <p className="text-center">© 2023 - 2024 All Rights Reserved</p>
          <p>Powered By</p>
          <img src="/images/buckingham-law.png" alt="" />
          <p className="text-center mt-2">Buckingham Law Consortium</p>
          <p className="text-center">Abuja, London & New York</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
