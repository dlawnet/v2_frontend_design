import Navbar from "./Navbar";

function Signup() {
  return (
    <div className="flex w-full h-screen flex-col">
      <Navbar />
      <div
        // style={{ height: "100dvh" }}
        className="flex items-center md:px-24 mt-32 md:mt-0 justify-center py-8"
      >
        <div className="bg-[var(--primary-color)] my-4 rounded-lg">
          <div className="flex justify-center py-6 items-center text-center">
            <img src="/logo.svg" alt="logo" className="w-[67px] h-[67px]" />
          </div>
          <div className="md:flex ml-14 md:justify-around items-center">
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
                    className="border border-white w-[85%] bg-transparent text-white p-4 "
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email "
                    required
                    className="border border-white w-[85%] bg-transparent text-white p-4 "
                  />
                </div>

                <div className="text-sm space-y-3">
                  <input
                    type="number"
                    name="Phone"
                    placeholder="Phone No"
                    required
                    className="border border-white w-[85%] bg-transparent text-white p-4 "
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="border border-white w-[85%] bg-transparent text-white p-4 "
                  />
                </div>

                <input
                  type="password"
                  name="confim"
                  placeholder="Confirm Password"
                  required
                  className="border border-white w-[85%] bg-transparent text-white p-4 "
                />

                {/*  */}
                <div className="text-sm space-y-8">
                  <div className="flex items-center md:gap-32 gap-20 mb-8">
                    <div>
                      <input
                        type="checkbox"
                        id="stayLoggedIn"
                        className="mr-2"
                      />
                      <label
                        htmlFor="stayLoggedIn"
                        className="text-[var(--text-color)] text-sm"
                      >
                        Remember Me
                      </label>
                    </div>
                    <a href="#" className="text-[var(--text-color)]">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                {/* image */}
                <div className="">
                  <input
                    type="file"
                    accept="image/*"
                    className="mb-4 text-white"
                    placeholder="upload profile"
                  />
                </div>

                {/*  */}
                <button
                  type="submit"
                  className="w-[85%] px-4 py-2 bg-[var(--text-color)] text-[var(--primary-color)] rounded-md hover:bg-primary-600" // Increased padding and added bottom margin
                >
                  Create Account
                </button>

                <div className="text-sm pt-4 text-[var(--text-color)]">
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
    </div>
  );
}

export default Signup;
