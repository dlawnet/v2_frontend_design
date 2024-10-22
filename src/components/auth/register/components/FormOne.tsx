import { Button } from "@app/components/base/button";
import { Input } from "@app/components/base/input";
import React from "react";

const FormOne = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="flex justify-center mt-10 text-white mb-10 px-8">
      <div className="bg-[#491217] w-full max-w-[523px] rounded-xl pb-10 px-4 sm:px-0">
        <p className="hidden sm:block text-3xl text-white text-right pr-5 pt-2">
          1/2
        </p>
        <div className="flex flex-col items-center">
          <img src="/images/logo.svg" alt="Logo" className="mt-5 sm:mt-0" />
          <div>
            <h1 className="text-[1.9rem] sm:text-3xl text-white mb-3">
              Sign Up
            </h1>
            <div>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="tel"
                  placeholder="Phone No."
                  className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="password"
                  placeholder="Password"
                  className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
              </div>
              <div className="mb-4 flex flex-col items-center">
                <Button
                  variant="default"
                  size="default"
                  className="bg-white text-black w-[139px] sm:w-[313px] h-[43px] border border-white hover:bg-[#491217] hover:text-white rounded-xl text-xl font-semibold mt-3"
                  onClick={onNext}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white text-opacity-70 text-sm sm:text-lg">
              Already have an account?{" "}
              <a href="/auth/login" className="text-white">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOne;
