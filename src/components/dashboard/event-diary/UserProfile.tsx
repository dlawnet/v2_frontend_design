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
} from "@app/components/ui/dialog";
import { useDropzone } from "react-dropzone";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./customCalendar.css";
import SideScreen from "./SideScreen";

interface PersonalEventDiaryProps {
  onShare: (inputValue: string) => void;
}

const UserProfile = () => {
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
      <div className="w-full min-[1200px]:w-[80%] ">
        <div className="relative">
          <div className="ml-[-32px] max-[1200px]:mr-[-12px] h-[204px] bg-[#FDDF5A]">
            <div>
              <img
                src="/images/profile-arrow.svg"
                alt="arrow"
                className="pt-5 pl-10 lg:pl-5"
              />
            </div>
          </div>
        </div>
        {/* Profile start */}
        <div className="relative">
          <div className="mt-[-50px]">
            <div className="flex items-center justify-between px-5">
              <div className="w-[164px] h-[164px] rounded-full ">
                <img
                  src="/images/profile-pic.png"
                  alt="profile-pic"
                  className="w-[100px] h-[100px] sm:w-full sm:h-full rounded-full"
                />
              </div>
              <p className="text-[#491217] text-lg border border-[#491217] w-[103px] sm:w-[118px] h-[45px] flex justify-center items-center rounded-full cursor-pointer hover:scale-105">
                Edit Profile
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[-50px] sm:mt-0">
          <div className="flex items-center">
            <div className="flex items-center gap-3 mt-2">
              <p className="text-[#10141A] text-2xl sm:text-3xl font-bold">
                Ayodeji Awodele
              </p>
              <img
                src="/images/verified.svg"
                alt="verified"
                className="w-6 h-6"
              />
              <p className="bg-[#491217] rounded p-1 text-white">President</p>
            </div>
          </div>
          <p className="text-black text-opacity-70 text-lg mt-2">@AyoAwo225</p>
          <p className="text-black text-lg">
            President of Abuja Law society || Lawyer in the making || Gamer ||
            Lover of Sports
          </p>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-2">
              <img src="/images/case.svg" alt="case" />
              <p className="text-black text-lg">Lawyer</p>
            </div>
            <div className="flex items-centergap-2">
              <img src="/images/location.svg" alt="location" />
              <p className="text-black text-lg">Abuja, Nigeria</p>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <p>100k Followers</p>
            <p>10 Following</p>
          </div>
        </div>
        <div className="flex items-center justify-around my-5 border-b border-[#000000]">
          <p className="text-lg text-black cursor-pointer">Posts</p>
          <p className="text-lg text-black text-opacity-70 cursor-pointer">
            Events
          </p>
          <p className="text-lg text-black text-opacity-70 cursor-pointer">
            Likes
          </p>
        </div>
        {/* Profile ends */}

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
                Hello! My name is Ayodeji Awodele, the president of Abuja Law
                society for the term 23/24. Welcome to our prestigious Law
                School, where we are committed to cultivating the next
                generation of legal professionals. With a rich tradition of
                academic excellence and a focus on innovative, hands-on
                learning, our programs are designed to prepare students for the
                complexities of modern law. From constitutional law to
                international human rights, we offer a diverse curriculum taught
                by renowned faculty. Our vibrant community, strong alumni
                network, and emphasis on ethics and social justice ensure that
                our graduates are well-equipped to lead with integrity and make
                a meaningful impact in the legal field.
              </p>
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
      </div>
      {/* SIde start */}
      <SideScreen />
      {/* SIde Ends */}
    </div>
  );
};

export default UserProfile;
