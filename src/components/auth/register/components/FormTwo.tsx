"use client";
import React, { useState } from "react";
import { Button } from "@app/components/base/button";
import { Input } from "@app/components/base/input";
import { Checkbox } from "@app/components/base/checkbox";

interface FormTwoProps {
  onBack: () => void;
}

const FormTwo: React.FC<FormTwoProps> = ({ onBack }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  return (
    <div className="flex justify-center mt-10 text-white mb-10 px-8">
      <div className="bg-[#491217] w-full max-w-[523px] rounded-xl pb-10 px-4 sm:px-0">
        <div className="flex items-center justify-between mt-3 px-5">
          <p className="cursor-pointer" onClick={onBack}>
            Back
          </p>
          <p className="hidden sm:block text-3xl text-white">2/2</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/logo.svg" alt="Logo" className="mt-5 sm:mt-0" />
          <div className="">
            <h1 className="text-[1.9rem] sm:text-3xl text-white mb-3">
              Sign Up
            </h1>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex items-center sm:flex flex-col sm:flex-row sm:justify-between gap-4">
                <select className="w-[276px] sm:w-[192px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70">
                  <option value="" className="text-white text-opacity-70">
                    Country
                  </option>
                  <option value="uk">United Kingdom</option>
                  <option value="in">India</option>
                  <option value="fr">France</option>
                  <option value="other">Other</option>
                </select>
                <select className="w-[276px] sm:w-[192px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none sm:mt-0">
                  <option value="" className="text-white text-opacity-70">
                    State
                  </option>
                  <option value="uk">United Kingdom</option>
                  <option value="in">India</option>
                  <option value="fr">France</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Address"
                  className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
              </div>
              <div className="mb-4">
                <select className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none">
                  <option value="us" className="text-white text-opacity-70">
                    Institution Type
                  </option>
                  <option value="uk">United Kingdom</option>
                  <option value="in">India</option>
                  <option value="fr">France</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Institution"
                  className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Duration of Study (optional)"
                  className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Years in School? (optional)"
                  className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
              </div>
              <div className="mb-4 flex gap-2 max-w-[270px] sm:max-w-[390px]">
                <Checkbox className="w-4 h-4 mt-1 rounded" />
                <p className="text-xs text-white text-opacity-70">
                  I hereby accept the Terms and Conditions abiding the law
                  students account and acknowledge that the details provided
                  above are valid and accurate.
                </p>
              </div>
              <div className="mb-4 flex flex-col items-center">
                <Button
                  variant="default"
                  size="default"
                  className="bg-white text-black text-opacity-70 w-[149px] sm:w-[313px] h-[43px] border border-white hover:bg-[#491217] hover:text-white rounded-xl text-xl font-semibold mt-3"
                >
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
