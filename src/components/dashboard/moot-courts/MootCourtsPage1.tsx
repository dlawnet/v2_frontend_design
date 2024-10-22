"use client";

import VideoCard from "./VideoCard";

const MootCourtsPage1 = () => {
  const videos = [
    {
      id: "1",
      imageSrc: "/images/law-school.png",
      title: "10 Things about Law school",
      description: "27M views · 2 months ago",
      duration: "24:45",
    },
    {
      id: "2",
      imageSrc: "/images/law-school.png",
      title: "Another Law school video",
      description: "15M views · 1 month ago",
      duration: "18:30",
    },
    {
      id: "3",
      imageSrc: "/images/law-school.png",
      title: "Another Law school video",
      description: "15M views · 1 month ago",
      duration: "18:30",
    },
    {
      id: "4",
      imageSrc: "/images/law-school.png",
      title: "Another Law school video",
      description: "15M views · 1 month ago",
      duration: "18:30",
    },
  ];

  return (
    <div className="mt-3  lg:ml-0 ">
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
      <div className="mt-5 flex flex-col items-center sm:items-start">
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
          <p className="bg-[#491217] bg-opacity-70 text-sm w-[81px] h-[30px] rounded-[25px] text-[#FDDF5A] text-opacity-70 flex justify-center items-center border border-[#491217] border-opacity-70 cursor-pointer hover:scale-105">
            Competions
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center sm:justify-between mt-5 sm:items-start ml-14">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            imageSrc={video.imageSrc}
            title={video.title}
            description={video.description}
            duration={video.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default MootCourtsPage1;
