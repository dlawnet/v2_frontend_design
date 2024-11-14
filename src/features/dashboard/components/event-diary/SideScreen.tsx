import React, {useState} from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@app/components/base/dialog";
import {useDropzone} from "react-dropzone";
import {Button, Input} from "@nextui-org/react";
import Calendar from "react-calendar";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import "react-calendar/dist/Calendar.css";
import "./customCalendar.css";

const SideScreen = () => {
  const [date, setDate] = useState(new Date());
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
    <div className="border-l pt-4 hidden min-[1200px]:block w-[25%]">
      <div className="flex flex-col items-center">
        <div className="relative pl-5">
          <img
            src="/images/search.svg"
            alt="search"
            className="absolute mt-[10px] ml-4"
          />
          <input
            type="search"
            placeholder="Search"
            className="w-[90%] h-10 border border-[#491217] rounded-[15px] pl-9 outline-none"
          />
        </div>
      </div>
      <p className="pl-5 pt-3">Event Calendar</p>
      <div className="w-[90%] ml-5">
        <Calendar
          // onChange={setDate}
          value={date}
          tileContent={tileContent}
          prevLabel={null}
          nextLabel={null}
          next2Label={null}
          prev2Label={null}
          navigationLabel={({ date }) => customNavigation({ date })} //
        />
      </div>
      <div>
        <p className="pl-5 pt-3">Upcoming Events </p>
        <div className="flex flex-col items-center">
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
          {/*  */}
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
          {/*  */}
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
            </div>
          </div>
        </div>
        {/*  */}
        <div className="pl-5 mt-5 flex justify-center bg-white">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#491217] text-white rounded-[10px] hover:scale-105">
                Add <img src="/images/calender-icon.svg" alt="calender-icon" />
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
                <div className="">
                  <Input
                    type="date"
                    id="name"
                    placeholder="Date"
                    className="border border-[#491217] rounded-[10px]  max-w-[142px]"
                  />
                </div>
                <div className="">
                  <Input
                    type="date"
                    id="username"
                    className="border border-[#491217] rounded-[10px] max-w-[142px]"
                  />
                </div>
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
              {/* Upload documents starts */}
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
                  <div className="">
                    <p className="text-base sm:text-lg text-[#000000]">
                      {uploadedFiles.length > 0
                        ? `${uploadedFiles[0].name} uploaded`
                        : "Upload Image"}
                    </p>
                  </div>
                </div>
              </div>
              {/* Upload documents ends */}
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
    </div>
  );
};

export default SideScreen;
