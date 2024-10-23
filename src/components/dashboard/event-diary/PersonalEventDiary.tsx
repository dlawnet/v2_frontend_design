"use client";
import React, { useState } from "react";
import { Avatar, Button, Input } from "@nextui-org/react";
import { FaImage, FaFile, FaRegFile } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@app/components/base/dialog";
import { useDropzone } from "react-dropzone";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./customCalendar.css";
import SideScreen from "./SideScreen";

interface PersonalEventDiaryProps {
  onShare: (inputValue: string) => void;
}

const PersonalEventDiary = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleShare = () => {
    console.log("Cash");
    // onShare(inputValue);
  };

  const [uploadedFiles, setUploadedFiles] = useState<
    Array<File & { preview: string; progress: number; uploaded: boolean }>
  >([]);

  const handleDrop = (acceptedFiles: File[]) => {
    setUploadedFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          progress: 0,
          uploaded: false,
        })
      )
    );
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    maxSize: 10485760,
    accept: {
      "image/*": [],
    },
  });

  const [date, setDate] = useState(new Date());

  const tileContent = ({ date, view }: any) => {
    if (view === "month") {
      if (date.getDate() === 10 || date.getDate() === 20) {
        return <div className="highlight-yellow"></div>;
      }
    }
  };

  const customNavigation = ({ date, nextMonth, prevMonth }: any) => (
    <div className="custom-header flex justify-between items-center px-4 py-2">
      <div className="text-sm">
        {date.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </div>
      <div className="flex">
        <button onClick={prevMonth} className="nav-arrow">
          <FiChevronLeft size={20} />
        </button>
        <button onClick={nextMonth} className="nav-arrow">
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex px-3">
      <div className="w-full min-[1200px]:w-[80%] mt-2 ">
        <div className="flex justify-evenly border-b">
          <div className="flex flex-col items-center">
            <p className="text-lg">Personal Event Diary</p>
            <div className="w-[69px] h-1 bg-[#491217] rounded-t-[5px]"></div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-opacity-50">Law Society</p>
            <div className="hidden w-[69px] h-1 bg-[#491217] rounded-t-[5px]"></div>
          </div>
        </div>
        <div className="relative">
          <img src="/images/Profile-icon.svg" className="absolute mt-4 ml-4" />
          <textarea
            placeholder="What is happening?"
            // value={inputValue}
            // onChange={handleInputChange}
            className="w-full border-b h-[160px] border-gray-300 rounded-md p-2 pt-4 pl-12 outline-none"
          >
            {" "}
          </textarea>
          <div className="absolute top-28 ml-6">
            <div className="flex gap-3">
              <img
                src="/images/photo.svg"
                alt="photo"
                className="cursor-pointer"
              />
              <img src="/images/gif.svg" alt="gif" className="cursor-pointer" />
              <img
                src="/images/uis_calender.svg"
                alt="uis_calender"
                className="cursor-pointer"
              />
            </div>
          </div>
          <Button
            onClick={handleShare}
            className="absolute right-0 top-[85px] mr-10 mt-4 bg-[#491217] bg-opacity-75 text-white text-opacity-75 rounded-[10px]"
          >
            Share
          </Button>
        </div>
        {/* Mobile start */}
        <div className=" md:hidden">
          <p className="pl-5 pt-3">Upcoming Events</p>
          <div className="flex items-center w-full gap-4 overflow-x-scroll py-2 scrolle-[#FDDF5A]">
            <div className="pl-5 mt-5">
              <div className="w-[217px] shadow-custom-shadow p-3 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img src="/images/dot.svg" alt="dot" />
                    <p>10th October</p>
                  </div>
                  <p className="text-[#491217]">Personal</p>
                </div>
                <p className="text-lg">Chamber meeting</p>
                <p className="text-sm">Meeting with Inviticus Members</p>
              </div>
            </div>
            {/* Repeat for each event */}
            <div className="pl-5 mt-5">
              <div className="w-[217px] shadow-custom-shadow p-3 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img src="/images/dot.svg" alt="dot" />
                    <p>10th October</p>
                  </div>
                  <p className="text-[#491217]">Personal</p>
                </div>
                <p className="text-lg">Chamber meeting</p>
                <p className="text-sm">Meeting with Inviticus Members</p>
              </div>
            </div>
            {/* Repeat for each event */}
            <div className="pl-5 mt-5">
              <div className="w-[217px] shadow-custom-shadow p-3 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <img src="/images/dot.svg" alt="dot" />
                    <p>10th October</p>
                  </div>
                  <p className="text-[#491217]">Personal</p>
                </div>
                <p className="text-lg">Chamber meeting</p>
                <p className="text-sm">Meeting with Inviticus Members</p>
              </div>
            </div>
            {/* Repeat for each event */}
          </div>
          <div className="pl-5 mt-5 flex justify-center bg-white">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#491217] text-white rounded-[10px] hover:scale-105">
                  Add{" "}
                  <img src="/images/calender-icon.svg" alt="calender-icon" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-[423px] bg-white flex flex-col items-center">
                <div className="w-full mt-[-20px]">
                  <img
                    src="/images/logo-small.svg"
                    alt="logo"
                    className="w-[55px] h-[55px]"
                  />
                </div>
                <DialogHeader>
                  <DialogTitle className="text-black text-3xl">
                    Create Event
                  </DialogTitle>
                </DialogHeader>
                <div className="flex items-center gap-2">
                  <Input
                    type="date"
                    id="name"
                    placeholder="Date"
                    className="border border-[#491217] rounded-[10px] max-w-[142px]"
                  />
                  <Input
                    type="date"
                    id="username"
                    className="border border-[#491217] rounded-[10px] max-w-[142px]"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    id="name"
                    placeholder="Subject of Event"
                    className="border border-[#491217] rounded-[10px] w-[290px]"
                  />
                </div>
                <div>
                  <select className="border border-[#491217] rounded-[10px] w-[290px] h-[52px] outline-none">
                    <option value="public">Public Collage</option>
                    <option value="private">Private Collage</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <div
                    {...getRootProps()}
                    className={`w-[292px] h-[49px] rounded-[8px] border border-dashed border-spacing-2 border-[#000000] cursor-pointer flex items-center pl-2 ${
                      isDragActive
                        ? "border-dashed border-black"
                        : "border-dashed"
                    }`}
                  >
                    <input {...getInputProps()} />
                    <div>
                      <p className="text-base sm:text-lg text-[#000000]">
                        {uploadedFiles.length > 0
                          ? `${uploadedFiles[0].name} uploaded`
                          : "Upload Image"}
                      </p>
                    </div>
                  </div>
                </div>
                <textarea
                  className="border border-[#491217] rounded-[10px] w-[290px] h-[151px] outline-none pl-2"
                  placeholder="Description?"
                ></textarea>
                <DialogFooter>
                  <Button
                    type="submit"
                    className="bg-[#491217] text-white rounded-[10px] hover:scale-105"
                  >
                    Add{" "}
                    <img src="/images/calender-icon.svg" alt="calender-icon" />
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        {/* Post start */}
        <div className="flex gap-3 mt-4">
          <img src="/images/logo.svg" alt="logo" className="w-12 h-12" />
          <div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <p className="text-[#10141A] font-bold">DLawnet</p>
                <img src="/images/verified.svg" alt="verified" />
                <p className="text-sm text-opacity-50">@DLawnetsociety · 1h</p>
              </div>
            </div>
            <div className="max-w-[727px]">
              <p className="mt-2">
                Everyone loves networking and legal education, what if there was
                a platform that you could get both Yes! you heard me right.
              </p>
              <p className="mt-8">
                Just Login and Activate your account to get started and do more
                than you can imagine. Connect with lawyers that have experience
                on the field.
              </p>
              <p className="mt-8 text-[#2D9CE6]">DLawnet.com</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div className="max-w-[303px]">
                <img
                  src="/images/Post-image.png"
                  alt="post"
                  className="w-full aspect-square object-cover rounded-[10px]"
                />
              </div>
              <div className="max-w-[303px]">
                <img
                  src="/images/Post-image2.png"
                  alt="post"
                  className="w-full aspect-square object-cover rounded-[10px]"
                />
              </div>
              <div className="max-w-[303px]">
                <img
                  src="/images/Post-image3.png"
                  alt="post"
                  className="w-full aspect-square object-cover rounded-[10px]"
                />
              </div>
              <div className="max-w-[303px]">
                <img
                  src="/images/Post-image4.png"
                  alt="post"
                  className="w-full aspect-square object-cover rounded-[10px]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between my-5 max-w-[622px]">
              <img
                src="/images/comment.svg"
                alt="comment"
                className="cursor-pointer "
              />

              <img
                src="/images/repost.svg"
                alt="repost"
                className="cursor-pointer"
              />
              <img
                src="/images/like-post.svg"
                alt="like"
                className="cursor-pointer"
              />
              <img
                src="/images/saved.svg"
                alt="saved"
                className="cursor-pointer"
              />
              <img
                src="/images/download.svg"
                alt="download"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* Post ends */}

        <div className="relative">
          <div className="absolute right-0 mr-40 mt-[-40px]">
            <img src="/images/add-post.svg" alt="add-post" className="" />
          </div>
          <div className="h-[68px] border border-opacity-20 flex items-center justify-center my-2">
            <p>Show 135 Posts</p>
          </div>
        </div>
      </div>
      {/* SIde start */}
      <SideScreen />
      {/* SIde Ends */}
    </div>
  );
};

export default PersonalEventDiary;
