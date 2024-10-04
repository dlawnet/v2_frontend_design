import { useEffect, useState } from "react";
import { BiRepost } from "react-icons/bi";
import { FaBoxArchive } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoBookmarkOutline, IoClose } from "react-icons/io5";
import { MdOutlineFavoriteBorder, MdOutlineFileDownload } from "react-icons/md";
import { RiChat1Line } from "react-icons/ri";

function EventDiaryProfile({ handleGoBack }) {
  const [editProfile, setEditProfile] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="lg:px-14md: px-8 relative">
      <p
        onClick={handleGoBack}
        className="text-4xl font-bold px-8 top-[-3rem] md:top-0 absolute"
      >
        &larr;
      </p>
      <div className="bg-yellow-300 w-[100%] h-[20%] mt-[-1.5rem] mx-[-1rem] lg:mx-[-.5rem]"></div>
      <div className="my-12 md:my-0">
        <div className="flex md:px-14 justify-between items-center">
          <img
            src="/profile.svg"
            alt="profile"
            className="sm:w-[30%] sm:h-[30%]"
          />

          <p
            onClick={() => setEditProfile((profile) => !profile)}
            className="px-4 py-2 text-[var(--primary-color)] border border-[var(--primary-color)] rounded-full"
          >
            Edit Profile
          </p>
        </div>

        <div className="flex md:px-14 pt-4 gap-2">
          <p className="text-[30px] text-[var(--primary-color)] font-semibold">
            Ayodeji Awodele
          </p>
          <div className="flex gap-2 items-center">
            <IoIosCheckmarkCircle className="w-[2rem] text-[var(--primary-color)] h-[2rem]" />
            <p className="text-white bg-[var(--primary-color)] p-1 text-sm">
              President
            </p>
          </div>
        </div>

        {/* <div className="space-y-1 px-14">
          <p>@AyoAwo225</p>
          <p className="text-lg">
            President of Abuja Law society || Lawyer in the making || Gamer ||
            Lover of Sports
          </p>
          <div className="flex gap-8 py-1 items-center">
            <div className="flex items-center gap-2 text-[var(--primary-color)]">
              <FaBoxArchive size={20} />
              <p>Lawyer</p>
            </div>
            <div className="flex items-center gap-2 text-[var(--primary-color)]">
              <FaBoxArchive size={20} />
              <p>Abuja, Nigeria</p>
            </div>
          </div>

          <div className="flex text-lg gap-3">
            <p>100k Followers</p>
            <p>10 Following</p>
          </div>
        </div> */}

        <div className="space-y-1">
          {/* Loading Condition for Skeleton Loader */}
          {isLoading ? (
            <div className="animate-pulse space-y-4">
              {/* Skeleton for Username */}
              <div className="h-3 bg-gray-300 rounded-md w-[30%]"></div>

              {/* Skeleton for Bio */}
              <div className="h-4 bg-gray-300 rounded-md w-[80%]"></div>
              <div className="h-4 bg-gray-300 rounded-md w-[70%]"></div>

              {/* Skeleton for Location and Lawyer */}
              <div className="flex gap-8 py-1 items-center">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[60px]"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[80px]"></div>
                </div>
              </div>

              {/* Skeleton for Followers/Following */}
              <div className="flex text-lg gap-3">
                <div className="h-4 bg-gray-300 rounded-md w-[100px]"></div>
                <div className="h-4 bg-gray-300 rounded-md w-[80px]"></div>
              </div>
            </div>
          ) : (
            // Actual Content
            <div className="space-y-1 md:px-14">
              <p>@AyoAwo225</p>
              <p className="text-lg">
                President of Abuja Law society || Lawyer in the making || Gamer
                || Lover of Sports
              </p>
              <div className="flex gap-8 py-1 items-center">
                <div className="flex items-center gap-2 text-[var(--primary-color)]">
                  <FaBoxArchive size={20} />
                  <p>Lawyer</p>
                </div>
                <div className="flex items-center gap-2 text-[var(--primary-color)]">
                  <FaBoxArchive size={20} />
                  <p>Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex text-lg gap-3">
                <p>100k Followers</p>
                <p>10 Following</p>
              </div>
            </div>
          )}
        </div>

        <div className="border-b-[1px] pt-8 border-black">
          <div className="flex px-14 justify-between text-lg">
            <p>Posts</p>
            <p>Events</p>
            <p>Likes</p>
          </div>
        </div>

        <div className="md:flex md:px-14 gap-4 py-6 ">
          <div>
            <div className="flex gap-3 items-center">
              <img
                src="/profile.svg"
                alt="user"
                className="w-[45px] h-[45px]"
              />

              <div className="flex gap-1 items-center">
                <h1 className="text-[var(--primary-color)] flex items-center gap-1 font-semibold">
                  Abuja Law <IoIosCheckmarkCircle />
                </h1>
                <p className="text-sm text-gray-400">@Abujalawschool · 1h</p>
              </div>
            </div>
            {/* <div className="py-3">
              <p className="text-justify">
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
            </div> */}
            <div className="py-3">
              {isLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-3 bg-gray-300 rounded-md w-[90%]"></div>
                  <div className="h-3 bg-gray-300 rounded-md w-[95%]"></div>
                  <div className="h-3 bg-gray-300 rounded-md w-[85%]"></div>
                  <div className="h-3 bg-gray-300 rounded-md w-[80%]"></div>
                  <div className="h-3 bg-gray-300 rounded-md w-[90%]"></div>
                  <div className="h-3 bg-gray-300 rounded-md w-[75%]"></div>
                  <div className="h-3 bg-gray-300 rounded-md w-[85%]"></div>
                  <div className="h-3 bg-gray-300 rounded-md w-[95%]"></div>
                  <div className="h-3 bg-gray-300 rounded-md w-[90%]"></div>
                </div>
              ) : (
                <div className="py-3">
                  <p className="text-justify">
                    Hello! My name is Ayodeji Awodele, the president of Abuja
                    Law society for the term 23/24. Welcome to our prestigious
                    Law School, where we are committed to cultivating the next
                    generation of legal professionals. With a rich tradition of
                    academic excellence and a focus on innovative, hands-on
                    learning, our programs are designed to prepare students for
                    the complexities of modern law. From constitutional law to
                    international human rights, we offer a diverse curriculum
                    taught by renowned faculty. Our vibrant community, strong
                    alumni network, and emphasis on ethics and social justice
                    ensure that our graduates are well-equipped to lead with
                    integrity and make a meaningful impact in the legal field.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-8 ">
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
          </div>
        </div>
      </div>

      {editProfile && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[1000] transform duration-700 ease-in-out`}
        >
          <div className=" mx-auto lg:w-[30%] md:w-[50%] w-[70%] shadow-black shadow-md rounded-lg my-28 md:my-[10rem] bg-white justify-center flex-col">
            <div className="rounded-lg flex bg-[var(--primary-color)] py-3 px-4 justify-between">
              <div className="text-white flex items-center gap-2">
                <IoClose
                  onClick={() => setEditProfile((profile) => !profile)}
                  size={25}
                />
                <p>Edit Profile</p>
              </div>

              <div className="px-5 rounded-full py-1 bg-[var(--secondary-color)]">
                Save
              </div>
            </div>
            <div>
              <div className="pt-8 px-8">
                <img
                  src="/lawProfile.png"
                  alt="profile"
                  className="w-[30%] h-[30%] z-50"
                />
              </div>

              <div className="space-y-4 p-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-lg p-2 border-black border w-full"
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="rounded-lg p-2 border-black border w-full"
                />
                <textarea
                  placeholder="Bio"
                  className="rounded-lg p-2 h-[10rem] border-black border w-full"
                />
                <input
                  type="text"
                  placeholder="Occupation"
                  className="rounded-lg p-2 border-black border w-full"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="rounded-lg p-2 border-black border w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventDiaryProfile;
