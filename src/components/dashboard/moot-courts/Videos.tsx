"use client";
import { Input } from "@app/components/base/input";
import React from "react";
import YouTube from "react-youtube";

const Videos = () => {
  const videoId = "vj6aSJgxPUM";

  const opts = {
    height: "390",
    width: "670",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="mt-5 bg-[#FFFFFF] bg-opacity-85">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="/images/search.svg"
            alt="search"
            className="absolute mt-[10px] ml-4"
          />
          <input
            type="search"
            placeholder="Search"
            className="w-[328px] sm:w-[428px] h-10 border border-[#491217] rounded-[15px] pl-9 outline-none pr-2"
          />
        </div>
      </div>
      <div className="flex justify-between gap-5 w-full mt-10">
        <div>
          <div className="w-[500px]">
            <YouTube
              videoId={videoId}
              opts={{
                ...opts,
              }}
              className="w-full bg-black"
            />
          </div>
          <p className="text-lg mt-2 font-semibold">
            10 Things about Law School
          </p>
          <div className="flex justify-between mt-2 max-w-[712px]">
            <p className="text-black text-opacity-70">2 Months ago</p>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                <img src="/images/like.svg" alt="Like" />
                <p>2M</p>
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/dislike.svg" alt="dislike" />
                <p>DISLIKE</p>
              </div>
              <img
                src="/images/three-dot.svg"
                alt="more"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 mt-5">
            <img src="/images/logo2.svg" alt="logo2" />
            <div>
              <div className="flex items-center gap-1">
                <p className="font-semibold">Dlawnet</p>
                <img src="/images/verify.svg" alt="verify" />
              </div>
              <p>14.1M Subscribers</p>
            </div>
          </div>
          <div className="flex  gap-20 mt-10">
            <p>604 Comments</p>
            <div className="flex items-center">
              <img src="/images/sort.svg" alt="sort icon" />
              <p>SORT BY</p>
            </div>
          </div>
          <div className="flex mt-20">
            <div className="w-10 h-10 rounded-full mt-1">
              <img src="/images/profile-pic-vid.png" alt="profile" />
            </div>
            <div className="ml-2">
              <Input
                placeholder="Add a comment..."
                className=" border-none outline-none w-[630px] max-w-[670px]"
              />
              <div className="w-full h-[1px] bg-black bg-opacity-50"></div>
              <div className="flex items-center justify-between py-3">
                <img src="/images/emoji.svg" alt="emoji" />
                <div className="flex items-center gap-2">
                  <p className="text-sm text-black text-opacity-50 cursor-pointer">
                    CANCEL
                  </p>
                  <p className="text-sm bg-black bg-opacity-50 px-4 py-[8px] text-black text-opacity-55 cursor-pointer">
                    COMMENT
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="flex mt-10">
            <div className="w-10 h-10 rounded-full mt-1">
              <img src="/images/profile-pic-vid-2.png" alt="profile" />
            </div>
            <div className="ml-2">
              <div className="flex items-center gap-2">
                <p className="font-semibold">Jenny Wilson</p>
                <p className="text-sm text-black text-opacity-50">
                  3 days ago (edited)
                </p>
              </div>
              <p className="text-sm mt-2">
                Wow This is so nice!. i didn't know these things thank you
              </p>
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-1">
                  <img src="/images/like.svg" alt="Like" className="w-4 h-4" />
                  <p className="text-xs">242</p>
                  <img
                    src="/images/dislike.svg"
                    alt="dislike"
                    className="w-4 h-4"
                  />
                </div>
                <div className="">
                  <p className="text-xs">REPLY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Side start */}
        <div className="mt-0">
          <div className="flex items-center gap-2">
            <p className="bg-[#FDDF5A] text-sm w-[40px] h-[30px] rounded-[25px] text-[#491217] flex justify-center items-center cursor-pointer hover:scale-105">
              All
            </p>
            <p className="bg-[#491217] bg-opacity-70 text-sm w-[81px] h-[30px] rounded-[25px] text-[#FDDF5A] text-opacity-70 flex justify-center items-center border border-[#491217] border-opacity-70 cursor-pointer hover:scale-105">
              Moot Court
            </p>
            <p className="bg-[#491217] bg-opacity-70 text-sm w-[81px] h-[30px] rounded-[25px] text-[#FDDF5A] text-opacity-70 flex justify-center items-center border border-[#491217] border-opacity-70 cursor-pointer hover:scale-105">
              Tutorials
            </p>
          </div>
          {/* Item 1 */}
          <div className="flex items-center gap-2 mb-3">
            <div className="relative">
              <img src="/images/law-school-small.png" alt="Law School" />
              <p className="absolute right-0 mt-[-25px] w-[30px] h-[20px] flex items-center justify-center rounded text-xs bg-black text-white">
                8:45
              </p>
            </div>
            <div>
              <p className="font-bold text-sm">10 Things about Law school</p>
              <div className="flex items-center mt-3">
                <p className="text-xs">Dlawnet</p>
                <img src="/images/verify.svg" alt="verify" />
              </div>
              <p className="text-xs">443K Views · 22 hours ago</p>
            </div>
          </div>
          {/* Item 1 end */}
          <div className="flex items-center gap-2 mb-3">
            <div className="relative">
              <img src="/images/law-school-small.png" alt="Law School" />
              <p className="absolute right-0 mt-[-25px] w-[30px] h-[20px] flex items-center justify-center rounded text-xs bg-black text-white">
                8:45
              </p>
            </div>
            <div>
              <p className="font-bold text-sm">10 Things about Law school</p>
              <div className="flex items-center mt-3">
                <p className="text-xs">Dlawnet</p>
                <img src="/images/verify.svg" alt="verify" />
              </div>
              <p className="text-xs">443K Views · 22 hours ago</p>
            </div>
          </div>
          {/* Item 1 end */}
          <div className="flex items-center gap-2 mb-3">
            <div className="relative">
              <img src="/images/law-school-small.png" alt="Law School" />
              <p className="absolute right-0 mt-[-25px] w-[30px] h-[20px] flex items-center justify-center rounded text-xs bg-black text-white">
                8:45
              </p>
            </div>
            <div>
              <p className="font-bold text-sm">10 Things about Law school</p>
              <div className="flex items-center mt-3">
                <p className="text-xs">Dlawnet</p>
                <img src="/images/verify.svg" alt="verify" />
              </div>
              <p className="text-xs">443K Views · 22 hours ago</p>
            </div>
          </div>
          {/* Item 1 end */}
        </div>
      </div>
    </div>
  );
};

export default Videos;
