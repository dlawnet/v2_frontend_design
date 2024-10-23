"use client";
import React, { useState } from "react";
import { Avatar, Button, Input } from "@nextui-org/react";

import { useDropzone } from "react-dropzone";
import SideScreen from "./SideScreen";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@app/components/base/dialog";

interface PersonalEventDiaryProps {
  onShare: (inputValue: string) => void;
}

const LawSociety = () => {
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

  return (
    <div className="flex px-3">
      <div className="w-full min-[1200px]:w-[80%] ">
        <div className="flex justify-evenly border-b pt-2">
          <div className="flex flex-col items-center">
            <p className="text-lg">Personal Event Diary</p>
            <div className="hidden w-[69px] h-1 bg-[#491217] rounded-t-[5px]"></div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-opacity-50">Law Society</p>
            <div className="w-[69px] h-1 bg-[#491217] rounded-t-[5px]"></div>
          </div>
        </div>
        <div className="relative">
          <div className=" h-[204px] bg-white">
            <div className="flex justify-center">
              <img src="/images/law-school.png" alt="arrow" className="" />
            </div>
          </div>
        </div>
        <div className="text-white bg-[#491217] border-t border-b border-black border-opacity-20 ml-[-35px] pl-9 max-[1200px]:mr-[-15px]">
          <p className="text-3xl pt-3">Abuja Law</p>
          <div className="pt-3 flex gap-3">
            <div className="flex">
              <div className="w-[18px] h-[18px] border rounded-full bg-white"></div>
              <div className="w-[18px] h-[18px] border rounded-full bg-white ml-[-5px]"></div>
              <div className="w-[18px] h-[18px] border rounded-full bg-white ml-[-5px]"></div>
            </div>
            <p className="text-sm">30k Members</p>
          </div>
          <p className="max-w-[700px] py-3">
            Welcome to our prestigious Law School, where we are committed to
            cultivating the next generation of legal professionals. With a rich
            tradition of academic excellence and a focus on innovative, hands-on
            learning, our programs are designed to prepare students for the
            complexities of modern law...Read More
          </p>
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

        {/* Mobile ends */}
        {/* Post start */}
        <div className="mt-4">
          <div className="flex items-center gap-1 ml-14">
            <img src="/images/pin.svg" alt="pin" className="" />
            <p className="text-[#491217]">Pinned</p>
          </div>
        </div>
        {/* Post1 */}
        <div className="flex gap-3 mt-4 border-b">
          <img src="/images/logo.svg" alt="logo" className="w-12 h-12" />
          <div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <p className="text-[#10141A] font-bold">Ayodeji Awodele</p>
                <img src="/images/verified.svg" alt="verified" />
                <p className="text-xs text-white p-1 bg-[#491217] rounded">
                  President
                </p>
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
        {/* Post2 */}
        <div className="flex gap-3 mt-4 border-b">
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
                We are to announce the Upcoming Inter-chamber football match
                between Uniabuja and OAU.
              </p>
              <p className="mt-10">
                Details of the match would be communicated soon.
              </p>
              <p className="mt-2 text-[#491217]">#LAW#abujaslaw</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div className="max-w-[303px]">
                <img
                  src="/images/match.png"
                  alt="post"
                  className="w-full aspect-square object-cover rounded-[10px]"
                />
              </div>
              <div className="max-w-[303px]">
                <img
                  src="/images/man-u.png"
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
      </div>
      {/* SIde start */}
      <SideScreen />
      {/* SIde Ends */}
    </div>
  );
};

export default LawSociety;
