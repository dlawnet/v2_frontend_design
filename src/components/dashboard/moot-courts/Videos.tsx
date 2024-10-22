"use client";
import React from "react";
import YouTube from "react-youtube";

const Videos = () => {
  const videoId = "vj6aSJgxPUM";

  const opts = {
    height: "390",
    width: "470",
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
      <div className="flex justify-between gap-5 mt-5">
        <div>
          <div className="">
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
            <p>2 Months ago</p>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                <img src="/images/like.svg" alt="Like" />
                <p>2M</p>
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/dislike.svg" alt="dislike" />
                <p>DISLIKE</p>
              </div>
              <p>...</p>
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
        </div>
        <div className="mt-10">
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
