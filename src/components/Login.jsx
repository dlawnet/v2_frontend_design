import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Login() {
  return (
    <div className="flex w-full h-screen flex-col">
      <Navbar />
      <div
        style={{ height: "100dvh" }}
        className="flex items-center justify-center mt-8"
      >
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          <div className="bg-[var(--primary-color)] pt-4 mx-8 md:py-6 rounded-lg">
            <div className="flex justify-center  items-center text-center">
              <img src="/logo.svg" alt="logo" className="w-[67px] h-[67px]" />
            </div>
            <div className="md:flex ml-14 md:justify-around items-center">
              <div className="flex justify-around items-center py-9">
                <div className="space-y-4">
                  <h1 className="font-bold text-xl lg:2xl text-[var(--text-color)]">
                    Login
                  </h1>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email Address*"
                    required
                    className="border border-white w-[85%] bg-transparent text-white p-4 "
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                    required
                    className="border border-white w-[85%] bg-transparent text-white p-4 "
                  />
                  <div className="flex md:gap-44 gap-12 md:text-sm text-[12px] my-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="stayLoggedIn"
                        className="mr-2"
                      />
                      <label
                        htmlFor="stayLoggedIn"
                        className="text-[var(--text-color)]"
                      >
                        Remember Me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-primary-500 text-[var(--text-color)]"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="flex justify-center text-center">
                    <Link
                      to={"/welcome"}
                      className="md:w-[95%] mt-4 w-full mr-10 md:mr-14 py-3 bg-[var(--text-color)] text-[var(--primary-color)] rounded-md hover:bg-primary-600"
                    >
                      Login
                    </Link>
                  </div>
                  <div className="my-2 text-sm mr-14 text-[var(--text-color)]">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="text-primary-500">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
