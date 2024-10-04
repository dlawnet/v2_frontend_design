import { useEffect, useState } from "react";
import { BiRepost } from "react-icons/bi";
import { FaBoxArchive } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import {
  MdGifBox,
  MdOutlineFavoriteBorder,
  MdOutlineFileDownload,
} from "react-icons/md";
import { RiChat1Line } from "react-icons/ri";
import { BsPin } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import { ImPlus } from "react-icons/im";
import EventDiaryProfile from "./EventDiaryProfile";
import LazyImage from "../constant/LazyImage";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import AOS from "aos";
import "aos/dist/aos.css";

function Eventdiary() {
  const [activeSection, setActiveSection] = useState("PersonalEventDiary");
  const [addEvent, setAddEvent] = useState(false);
  const [canclePost, setCanclePost] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const handleAddEvent = () => {
    setAddEvent(!addEvent);
  };

  const handleGoBack = () => {
    handleSectionClick("PersonalEventDiary");
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <div className=" ">
      {activeSection === "EventDiaryProfile" ? (
        ""
      ) : (
        <div className="flex text-center pt-8 justify-center md:justify-start md:text-start lg:px-52 lg:gap-28 md:px-28 md:gap-24 px-18 gap-14">
          <button
            onClick={() => handleSectionClick("PersonalEventDiary")}
            className={`${
              activeSection === "PersonalEventDiary"
                ? "border-b-4 border-[var(--primary-color)]"
                : ""
            }`}
          >
            Personal Diary
          </button>
          <button
            onClick={() => handleSectionClick("LawSociety")}
            className={`${
              activeSection === "LawSociety"
                ? "border-b-4 border-[var(--primary-color)]"
                : ""
            } `}
          >
            Law Society
          </button>
        </div>
      )}

      <div className="md:grid md:grid-cols-[60%_40%] md:gap-2 lg:gap-0 lg:grid-cols-[70%_30%]">
        {activeSection === "PersonalEventDiary" && (
          <div className="md:px-14">
            <div className="border border-gray-300 md:px-8 py-6 p-4">
              <div className="flex justify-between flex-col">
                <div className="flex mb-6 items-center">
                  <div
                    onClick={() => handleSectionClick("EventDiaryProfile")}
                    className="pb-3"
                  >
                    <img
                      src="/user.png"
                      alt="user"
                      className="w-[40px] h-[40px]"
                    />
                  </div>

                  <textarea
                    placeholder="What is happening?!"
                    className="w-[100%] h-[100%] overflow-hidden bg-transparent outline-none p-4"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center text-[var(--primary-color)]">
                    <GrGallery size={25} />
                    <MdGifBox size={25} />
                    <FaBoxArchive size={25} />
                  </div>

                  <button
                    className="bg-[var(--primary-color)] px-4 py-2 text-sm rounded-lg text-white"
                    type="button"
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>

            <div className="my-6 border cursor-pointer p-6">
              <div className="flex gap-4">
                <img
                  src="/logo.svg"
                  alt="user"
                  className="md:w-[40px] w-[30px] h-[30px] md:h-[40px]"
                />
                <div className="flex-col">
                  
                  <div className="flex gap-1 items-center">
                    <h1 className="text-[var(--primary-color)] flex items-center gap-1 font-semibold">
                      DLawnet
                      <IoIosCheckmarkCircle />
                    </h1>
                    <p className="text-sm text-gray-300">
                      @DLawnetsociety · 1h
                    </p>
                  </div>

                  <div className="space-y-4">
                    {isLoading ? (
                      <div className="animate-pulse space-y-4">
                        <div className="h-4 bg-gray-300 rounded-md w-[70%] md:w-[70%]"></div>
                        <div className="h-3 bg-gray-300 rounded-md w-[90%] md:w-[60%]"></div>
                        <div className="h-3 bg-gray-300 rounded-md w-[80%] md:w-[50%]"></div>
                      </div>
                    ) : (
                      <p className="lg:w-[85%] w-[100%]">
                        Everyone loves networking and legal education, what if
                        there was a platform that you could get both Yes! you
                        heard me right.
                      </p>
                    )}

                    {isLoading ? (
                      <div className="animate-pulse space-y-4">
                        <div className="h-4 bg-gray-300 rounded-md w-[70%] md:w-[70%]"></div>
                        <div className="h-3 bg-gray-300 rounded-md w-[90%] md:w-[60%]"></div>
                        <div className="h-3 bg-gray-300 rounded-md w-[80%] md:w-[50%]"></div>
                      </div>
                    ) : (
                      <p className="lg:w-[85%] w-[100%]">
                        Just Login and Activate your account to get started and
                        do more than you can imagine. Connect wit lawyers that
                        have experience on the field.
                      </p>
                    )}
                    <p className="text-blue-600">DLawnet.com</p>

                    <div className="space-y-4">
                      <div className="flex gap-6">
                        {/* <img
                          src="/Image.png"
                          alt="user"
                          className="w-[40%] h-[40%]"
                        /> */}
                        <LazyImage
                          classStyle={"w-[35%] h-[35%]"}
                          src="/Image.png"
                          alt="Lazy loaded image"
                        />
                        {/* <img
                          src="/Image1.png"
                          alt="user"
                          className="w-[35%] h-[35%]"
                        /> */}
                        <LazyImage
                          classStyle={"w-[35%] h-[35%]"}
                          src="/Image1.png"
                          alt="Lazy loaded image"
                        />
                      </div>
                      <div className="flex gap-6">
                        <LazyImage
                          classStyle={"w-[35%] h-[35%]"}
                          src="/Image2.png"
                          alt="Lazy loaded image"
                        />
                        {/* <img
                          src="/Image3.png"
                          alt="user"
                          className="w-[35%] h-[35%]"
                        /> */}

                        <LazyImage
                          classStyle={"w-[35%] h-[35%]"}
                          src="/Image3.png"
                          alt="Lazy loaded image"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[20px] lg:gap-[75px] md:gap-8 mb-8">
                      <RiChat1Line
                        size={35}
                        className="text-blue-600 bg-blue-100 p-2 rounded-full"
                      />
                      <BiRepost
                        size={35}
                        className="text-green-600 bg-green-100 p-2 rounded-full"
                      />
                      <MdOutlineFavoriteBorder
                        size={35}
                        className="text-red-600 bg-red-100 p-2 rounded-full"
                      />
                      <IoBookmarkOutline
                        size={35}
                        className="text-blue-600 bg-blue-100 p-2 rounded-full"
                      />
                      <MdOutlineFileDownload
                        size={35}
                        className="text-blue-600 bg-blue-100 p-2 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="border p-3 text-center mt-16">
                    <p>Show 135 Posts</p>
                  </div>

                  <div
                    onClick={() => setCanclePost(!canclePost)}
                    className="flex justify-end"
                  >
                    <div className="animate-bounce rounded-full bg-[var(--primary-color)] p-3  shadow-black shadow-md w-fit">
                      <ImPlus color="white" size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "LawSociety" && (
          <div className="border md:px-10">
            <div>
              <div className="flex py-8 justify-center mx-auto">
                <img src="/lawschool.png" alt="logo" className="w-[160px]" />
              </div>

              <div className="flex flex-col py-8 px-6 md:px-14 bg-[var(--primary-color)] gap-4">
                <h1 className="text-[var(--primary-color)] text-xl text-white">
                  Abuja Law
                </h1>
                <p className="text-[10px] text-gray-300">30k Members</p>

                {isLoading ? (
                  <div className="animate-pulse space-y-4 ">
                    <div className="h-4 bg-gray-300 rounded-md w-[70%] md:w-[70%]"></div>
                    <div className="h-3 bg-gray-300 rounded-md w-[90%] md:w-[60%]"></div>
                    <div className="h-3 bg-gray-300 rounded-md w-[80%] md:w-[50%]"></div>
                  </div>
                ) : (
                  <p className="text-white">
                    Welcome to our prestigious Law School, where we are
                    committed to cultivating the next generation of legal
                    professionals. With a rich tradition of academic excellence
                    and a focus on innovative, hands-on learning, our programs
                    are designed to prepare students for the complexities of
                    modern law...Read More
                  </p>
                )}
              </div>
            </div>

            <div className="pt-6 md:px-14 px-6">
              <div>
                <div className="flex text-sm pb-5 font-semibold gap-1 text-[var(--primary-color)] items-center">
                  <BsPin size={25} />
                  <p>Pinned</p>
                </div>
                <div className="pb-6 border-b-2">
                  <div>
                    <div className="flex gap-4 mb-4 pb-6">
                      <img
                        src="/Profile.png"
                        alt="user"
                        className="w-[50px] h-[50px]"
                      />

                      <div className="flex gap-1 flex-col">
                        <h1 className="text-[var(--primary-color)] flex items-center gap-1 font-semibold">
                          Ayodeji Awodele <IoIosCheckmarkCircle />
                        </h1>
                        <p className="text-sm text-gray-400">@Ayoawo225 · 5h</p>
                      </div>
                    </div>

                    <div className="pb-3 lg:pl-16 text-justify md:space-y-3 w-full">
                      {isLoading ? (
                        <div className="animate-pulse space-y-4 ">
                          <div className="h-4 bg-gray-300 rounded-md w-[70%] md:w-[70%]"></div>
                          <div className="h-3 bg-gray-300 rounded-md w-[90%] md:w-[60%]"></div>
                          <div className="h-3 bg-gray-300 rounded-md w-[80%] md:w-[50%]"></div>
                        </div>
                      ) : (
                        <p>
                          Hello! My name is Ayodeji Awodele, the president of
                          Abuja Law society for the term 23/24. Welcome to our
                          prestigious Law School, where we are committed to
                          cultivating the next generation of legal
                          professionals. With a rich tradition of academic
                          excellence and a focus on innovative, hands-on
                          learning, our programs are designed to prepare
                          students for the complexities of modern law. From
                          constitutional law to international human rights, we
                          offer a diverse curriculum taught by renowned faculty.
                          Our vibrant community, strong alumni network, and
                          emphasis on ethics and social justice ensure that our
                          graduates are well-equipped to lead with integrity and
                          make a meaningful impact in the legal field.
                        </p>
                      )}

                      {isLoading ? (
                        <div className="animate-pulse space-y-4 my-3">
                          <div className="h-4 bg-gray-300 rounded-md w-[70%] md:w-[70%]"></div>
                          <div className="h-3 bg-gray-300 rounded-md w-[90%] md:w-[60%]"></div>
                          <div className="h-3 bg-gray-300 rounded-md w-[80%] md:w-[50%]"></div>
                        </div>
                      ) : (
                        <p className="w-full">
                          Everyone loves networking and legal education, what if
                          there was a platform that you could get both Yes! you
                          heard me right.
                        </p>
                      )}
                      {isLoading ? (
                        <div className="animate-pulse space-y-4 ">
                          <div className="h-4 bg-gray-300 rounded-md w-[70%] md:w-[70%]"></div>
                          <div className="h-3 bg-gray-300 rounded-md w-[90%] md:w-[60%]"></div>
                          <div className="h-3 bg-gray-300 rounded-md w-[80%] md:w-[50%]"></div>
                        </div>
                      ) : (
                        <p className="w-full">
                          Just Login and Activate your account to get started
                          and do more than you can imagine. Connect wit lawyers
                          that have experience on the field.
                        </p>
                      )}
                    </div>

                    <div className="space-y-4 lg:pl-14">
                      {/* <p className="w-full">
                        Everyone loves networking and legal education, what if
                        there was a platform that you could get both Yes! you
                        heard me right.
                      </p>

                      <p className="w-full">
                        Just Login and Activate your account to get started and
                        do more than you can imagine. Connect wit lawyers that
                        have experience on the field.
                      </p> */}

                      <p className="text-blue-600">DLawnet.com</p>

                      <div className="flex gap-[45px] lg:gap-24 md:gap-8 mb-8">
                        <RiChat1Line
                          size={35}
                          className="text-blue-600 bg-blue-100 p-2 rounded-full"
                        />
                        <BiRepost
                          size={35}
                          className="text-green-600 bg-green-100 p-2 rounded-full"
                        />
                        <MdOutlineFavoriteBorder
                          size={35}
                          className="text-red-600 bg-red-100 p-2 rounded-full"
                        />
                        <IoBookmarkOutline
                          size={35}
                          className="text-blue-600 bg-blue-100 p-2 rounded-full"
                        />
                        <MdOutlineFileDownload
                          size={35}
                          className="text-blue-600 bg-blue-100 p-2 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:flex gap-4 py-6 ">
                  <div>
                    <div className="flex gap-3">
                      <img
                        src="/logo.svg"
                        alt="user"
                        className="w-[50px] h-[50px]"
                      />

                      <div className="flex gap-1 flex-col">
                        <h1 className="text-[var(--primary-color)] flex items-center gap-1 font-semibold">
                          Abuja Law <IoIosCheckmarkCircle />
                        </h1>
                        <p className="text-sm text-gray-400">
                          @Abujalawschool · 1h
                        </p>
                      </div>
                    </div>

                    <div className="py-3 lg:pl-16">
                      {isLoading ? (
                        <div className="animate-pulse space-y-4 ">
                          <div className="h-4 bg-gray-300 rounded-md w-[70%] md:w-[70%]"></div>
                          <div className="h-3 bg-gray-300 rounded-md w-[90%] md:w-[60%]"></div>
                          <div className="h-3 bg-gray-300 rounded-md w-[80%] md:w-[50%]"></div>
                        </div>
                      ) : (
                        <p>
                          We are to announce the Upcoming Inter-chamber football
                          match between Uniabuja and OAU.
                        </p>
                      )}
                      {isLoading ? (
                        <div className="animate-pulse space-y-4 mt-3">
                          <div className="h-4 bg-gray-300 rounded-md w-[70%] md:w-[70%]"></div>
                          <div className="h-3 bg-gray-300 rounded-md w-[90%] md:w-[60%]"></div>
                          <div className="h-3 bg-gray-300 rounded-md w-[80%] md:w-[50%]"></div>
                        </div>
                      ) : (
                        <div className="py-3">
                          <p>
                            Details of the match would be communicated soon.
                          </p>
                          <p className="text-[var(--primary-color)]">
                            #LAW#abujaslaw
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4 lg:pl-16">
                      <div className="flex gap-6">
                        {/* <img
                          src="/champ.png"
                          alt="user"
                          className="w-[45%] h-[45%]"
                        /> */}
                        <LazyImage
                          classStyle={"w-[45%] h-[45%]"}
                          src="/champ.png"
                          alt="Lazy loaded image"
                        />
                        {/* <img
                          src="/granacho.png"
                          alt="user"
                          className="w-[45%] h-[45%]"
                        /> */}
                        <LazyImage
                          classStyle={"w-[45%] h-[45%]"}
                          src="/granacho.png"
                          alt="Lazy loaded image"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8 lg:pl-16">
                      <div className="flex gap-[45px] lg:gap-24 md:gap-8 mb-8">
                        <RiChat1Line
                          size={35}
                          className="text-blue-600 bg-blue-100 p-2 cursor-pointer rounded-full"
                        />
                        <BiRepost
                          size={35}
                          className="text-green-600 bg-green-100 p-2 cursor-pointer rounded-full"
                        />
                        <MdOutlineFavoriteBorder
                          size={35}
                          className="text-red-600 bg-red-100 p-2 cursor-pointer rounded-full"
                        />
                        <IoBookmarkOutline
                          size={35}
                          className="text-blue-600 bg-blue-100 p-2 cursor-pointer rounded-full"
                        />
                        <MdOutlineFileDownload
                          size={35}
                          className="text-blue-600 bg-blue-100 p-2 cursor-pointer rounded-full"
                        />
                      </div>
                    </div>

                    <div
                      onClick={() => setCanclePost(!canclePost)}
                      className="flex justify-end"
                    >
                      <div className="animate-bounce rounded-full bg-[var(--primary-color)] p-3  shadow-black shadow-md w-fit">
                        <ImPlus color="white" size={30} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "EventDiaryProfile" && (
          <EventDiaryProfile handleGoBack={handleGoBack} />
        )}

        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="border md:py-8 pt-4 px-4 md:px-10">
            <div className="flex px-4 justify-center pb-4">
              <input
                className="bg-slate-200 outline-none p-3 rounded-2xl"
                type="search"
                placeholder="search"
              />
            </div>

            <div className="py-6">
              <p>Event Calender</p>

              <div className="calendar-wrapper text-sm space-y-6 p-4">
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  headerToolbar
                  events={[
                    { title: "Event 1", date: "2024-10-15" },
                    { title: "Event 2", date: "2024-10-20" },
                  ]}
                  eventTextColor="#D32F2F"
                  eventDisplay="block"
                  height="auto"
                  width="auto"
                />

                {/* <div className="calendar-wrapper text-sm space-y-6 p-4">
                  <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,dayGridWeek,dayGridDay",
                    }}
                    events={[
                      { title: "Event 1", date: "2024-10-15" },
                      { title: "Event 2", date: "2024-10-20" },
                    ]}
                    eventTextColor="#D32F2F"
                    eventDisplay="block"
                    height="auto"
                  />
                </div> */}
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="pt-4 font-semibold">Upcoming Events</h1>

              <div className="shadow-md rounded-lg py-4 px-4 shadow-gray-500 flex flex-col bg-gray-50">
                <div className="flex justify-between text-[12px]">
                  <p className="flex gap-1 items-center">
                    <div className="bg-[var(--primary-color)] w-2 h-2 rounded-full"></div>{" "}
                    10th October
                  </p>
                  <p className="text-[var(--primary-color)]">Personal</p>
                </div>
                <div className="pt-4 text-sm">
                  <p className="font-semibold">Chamber meeting</p>
                  <p>Meeting with Inviticus Members</p>
                </div>
              </div>

              <div className="shadow-md rounded-lg py-4 px-4 shadow-gray-500 flex flex-col bg-gray-50">
                <div className="flex justify-between text-[12px]">
                  <p className="flex gap-1 items-center">
                    <div className="bg-[var(--primary-color)] w-2 h-2 rounded-full"></div>{" "}
                    14th October
                  </p>
                  <p className="text-[var(--primary-color)]">Personal</p>
                </div>
                <div className="pt-4 text-sm">
                  <p className="font-semibold">Panel meeting</p>
                  <p>Meeting with Ladoke Members</p>
                </div>
              </div>

              <div className="shadow-md rounded-lg py-4 px-4 shadow-gray-500 flex flex-col bg-gray-50">
                <div className="flex justify-between text-[12px]">
                  <p className="flex gap-1 items-center">
                    <div className="bg-[var(--secondary-color)] w-2 h-2 rounded-full"></div>{" "}
                    19th October
                  </p>
                  <p className="text-[var(--primary-color)]">School</p>
                </div>
                <div className="pt-4 text-sm">
                  <p className="font-semibold">Inter-chamber debate</p>
                  <p>Debate between chambers</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center py-8">
              <button
                onClick={handleAddEvent}
                className="bg-[var(--primary-color)] cursor-pointer flex items-center gap-4 px-6 py-2 text-lg rounded-lg text-white"
              >
                Add
                <FaBoxArchive />
              </button>
            </div>
          </div>
        </div>
      </div>

      {addEvent && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[1000] transform duration-700 ease-in-out`}
        >
          <div className=" mx-auto lg:w-[30%] md:w-[50%] w-[70%] shadow-black shadow-md rounded-lg my-28 md:my-[4rem] p-4 bg-white justify-center flex-col">
            <div className="flex justify-between items-center pb-6">
              <img src="/logo.svg" alt="user" className="w-[50px] h-[50px]" />

              <button
                onClick={() => handleAddEvent(!addEvent)}
                className="text-[var(--secondary-color)] outline-none flex justify-end"
              >
                <IoClose size={35} />
              </button>
            </div>

            <div>
              <h1 className="font-semibold text-xl text-center pb-4">
                Create Event
              </h1>
              <div className="ml-9 space-y-3">
                <div className="text-sm space-x-3 relative">
                  <input
                    type="text"
                    name="startDate"
                    placeholder="Start Date"
                    required
                    className="border border-[var(--primary-color)] outline-none w-[35%] bg-transparent p-4 "
                  />
                  <BiSolidDownArrow
                    className="absolute top-5 left-24"
                    size={12}
                  />
                  <input
                    type="text"
                    name="startDate"
                    placeholder="State"
                    required
                    className="border border-[var(--primary-color)] outline-none w-[42%] bg-transparent p-4 "
                  />
                  <BiSolidDownArrow
                    className="absolute top-5 left-64"
                    size={12}
                  />
                </div>

                <div className="text-sm space-y-3">
                  <input
                    type="text"
                    name="subjectOfEvent"
                    placeholder="Subject of Event"
                    required
                    className="border border-[var(--primary-color)] w-[85%] outline-none bg-transparent p-4 "
                  />
                  <input
                    type="text"
                    name="Institution"
                    placeholder="Public/Private or Colleges"
                    required
                    className="border border-[var(--primary-color)] w-[85%] outline-none bg-transparent p-4 "
                  />
                </div>

                <div className="">
                  <input
                    type="file"
                    accept="image/*"
                    className="mb-4 "
                    placeholder="upload profile"
                  />
                </div>

                <textarea
                  placeholder="Description?"
                  className="w-[85%] border outline-none border-[var(--primary-color)] p-4"
                />

                <div className="">
                  <button
                    // onClick={handleAddEvent}
                    className="bg-[var(--primary-color)] cursor-pointer flex items-center gap-4 px-3 py-2 text-sm rounded-lg text-white"
                  >
                    Add
                    <FaBoxArchive />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {canclePost && (
        <div>
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[1000] transform duration-700 ease-in-out`}
          >
            <div className=" mx-auto lg:w-[40%] md:w-[45%] w-[70%] shadow-black shadow-md rounded-lg my-[50%] md:my-[7rem] p-4 bg-white justify-center flex-col">
              <div className="flex justify-between items-center pb-3">
                <img src="/logo.svg" alt="logo" className="w-[40px] h-[40px]" />
                <div
                  onClick={() => setCanclePost(false)}
                  className="flex justify-end p-1"
                >
                  <button className="text-black outline-none">
                    <IoClose size={25} />
                  </button>
                </div>
              </div>
              <div className="px-6">
                <div className="flex justify-between flex-col">
                  <div className="flex mb-6 flex-col">
                    <div className="pb-3 flex items-center gap-2">
                      <img
                        src="/user.png"
                        alt="user"
                        className="w-[40px] h-[40px]"
                      />
                      <p className="text-xs p-1 font-medium bg-[var(--secondary-color)]">
                        Public
                      </p>
                    </div>

                    <textarea
                      placeholder="What is happening?!"
                      className="w-[100%] h-[5rem] text-sm overflow-hidden bg-transparent outline-none px-4"
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center text-[var(--primary-color)]">
                      <GrGallery size={20} />
                      <MdGifBox size={20} />
                      <FaBoxArchive size={20} />
                    </div>

                    <button
                      className="bg-[var(--primary-color)] px-4 py-2 text-sm rounded-lg text-white"
                      type="button"
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Eventdiary;
