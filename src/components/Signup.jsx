import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BiSolidDownArrow } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

function Signup() {
  const [registerNext, setRegisterNext] = useState(false);

  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="flex w-full h-screen flex-col">
      <Navbar />
      <div className="flex items-center px-6 md:px-24 mt-16 md:mt-0 justify-center py-8">
        {registerNext ? (
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <div className="bg-[var(--primary-color)] my-4 rounded-lg">
              <div className="flex justify-center py-6 items-center text-center">
                <img src="/logo.svg" alt="logo" className="w-[67px] h-[67px]" />
              </div>
              <p className="text-2xl absolute md:left-[62%] left-[80%] top-[9rem] text-white">
                2/2
              </p>
              <div className="md:flex md:ml-14 ml-8 md:justify-around items-center">
                <div className="flex justify-around items-center py-6">
                  <div className="space-y-2">
                    <h1 className="font-bold text-xl lg:2xl text-[var(--text-color)]">
                      Sign Up
                    </h1>

                    <div className="text-sm space-x-3 relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Country"
                        required
                        className="border border-white w-[40%] bg-transparent text-white p-4 "
                      />
                      <BiSolidDownArrow
                        className="absolute text-white top-5 md:left-32 left-20"
                        size={12}
                      />
                      <input
                        type="text"
                        name="email"
                        placeholder="State"
                        required
                        className="border border-white w-[42%] bg-transparent text-white p-4 "
                      />
                      <BiSolidDownArrow
                        className="absolute text-white top-5 md:left-80 left-56"
                        size={12}
                      />
                    </div>

                    <div className="text-sm space-y-3 relative">
                      <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        required
                        className="border border-white w-[85%] outline-none bg-transparent text-white p-4 "
                      />
                      <input
                        type="text"
                        name="Institution"
                        placeholder="Institution Type"
                        required
                        className="border border-white w-[85%] outline-none bg-transparent text-white p-4 "
                      />
                      <BiSolidDownArrow
                        className="absolute text-white top-3 md:left-[21rem] left-[15rem]"
                        size={12}
                      />
                    </div>

                    <div className="text-sm space-y-3 text-white">
                      <input
                        type="text"
                        name="Institution"
                        placeholder="Institution"
                        required
                        className="border border-white w-[85%] outline-none bg-transparent text-white p-4 "
                      />
                      <input
                        type="text"
                        name="duration"
                        placeholder="Duration of Study (optional)"
                        required
                        className="border border-white w-[85%] outline-none bg-transparent text-white p-4 "
                      />
                    </div>
                    <input
                      type="text"
                      name="years"
                      placeholder="Years in School? (optional)"
                      required
                      className="border border-white w-[85%] outline-none bg-transparent text-white p-4 "
                    />

                    <div className="text-sm space-y-8">
                      <div className="flex items-center mb-8">
                        <div className="">
                          <input
                            type="checkbox"
                            id="stayLoggedIn"
                            className="mr-2"
                          />
                          <label
                            htmlFor="stayLoggedIn"
                            className="text-[var(--text-color)] text-[8px] md:text-sm"
                          >
                            I hereby accept the Terms and Conditions abding the
                            law
                            <p className="px-5">
                              students account and acknowledge that the details
                              provided
                            </p>
                            <p className="px-5">
                              above are valid and accurate.
                            </p>
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-[85%] outline-none px-4 py-2 bg-[var(--text-color)] text-[var(--primary-color)] rounded-md hover:bg-primary-600"
                    >
                      Create Account
                    </button>

                    <div className="text-sm md:text-xl pt-4 text-center mr-8 md:mr-0 md:text-start text-[var(--text-color)]">
                      Already have an account? {""}
                      <a href="#" className="text-primary-500">
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <div className="bg-[var(--primary-color)] my-4 rounded-lg">
              <div className="flex justify-center py-6 items-center text-center">
                <img src="/logo.svg" alt="logo" className="w-[67px] h-[67px]" />
              </div>
              <p className="text-2xl absolute md:left-[62%] left-[75%] top-[9rem] text-white">
                1/2
              </p>
              <div className="md:flex md:ml-14 mx-8 md:justify-around items-center">
                <div className="flex justify-around items-center py-6">
                  <div className="space-y-2">
                    <h1 className="font-bold text-xl lg:2xl text-[var(--text-color)]">
                      Sign Up
                    </h1>

                    <div className="text-sm space-y-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="border border-white md:w-[85%] w-[100%] outline-none bg-transparent text-white p-4 "
                      />
                      <input
                        type="text"
                        name="email"
                        placeholder="Email "
                        required
                        className="border border-white md:w-[85%] w-[100%] outline-none bg-transparent text-white p-4 "
                      />
                    </div>

                    <div className="text-sm space-y-3">
                      <input
                        type="number"
                        name="Phone"
                        placeholder="Phone No"
                        required
                        className="border border-white md:w-[85%] w-[100%] outline-none bg-transparent text-white p-4 "
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        className="border border-white md:w-[85%] w-[100%] outline-none bg-transparent text-white p-4 "
                      />
                    </div>

                    <input
                      type="password"
                      name="confim"
                      placeholder="Confirm Password"
                      required
                      className="border border-white md:w-[85%] w-[100%] outline-none bg-transparent text-white p-4 "
                    />

                    <div className="text-sm space-y-8">
                      <div className="flex items-center md:gap-32 justify-between md:justify-normal mb-8">
                        <div>
                          <input
                            type="checkbox"
                            id="stayLoggedIn"
                            className="mr-2"
                          />
                          <label
                            htmlFor="stayLoggedIn"
                            className="text-[var(--text-color)] md:text-sm"
                          >
                            Remember Me
                          </label>
                        </div>
                        <a href="#" className="text-[var(--text-color)]">
                          Forgot Password?
                        </a>
                      </div>
                    </div>

                    <div className="">
                      <input
                        type="file"
                        accept="image/*"
                        className="mb-4 text-white"
                        placeholder="upload profile"
                      />
                    </div>

                    <button
                      onClick={() => setRegisterNext(true)}
                      type="submit"
                      className="md:w-[85%] w-full outline-none px-4 py-2 bg-[var(--text-color)] text-[var(--primary-color)] rounded-md hover:bg-primary-600"
                    >
                      Next
                    </button>

                    <div className="text-sm pt-4 text-center md:text-start text-[var(--text-color)]">
                      Already have an account? {""}
                      <a href="#" className="text-primary-500">
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
