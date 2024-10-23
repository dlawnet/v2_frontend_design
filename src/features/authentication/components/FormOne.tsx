import React, {useState} from "react";
import {Button} from "@app/components/base/button";
import {Input} from "@app/components/base/input";

const FormOne = ({ onNext }: { onNext: (data: { fullName: string; email: string; phone: string; password: string; confirmPassword: string }) => void }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = () => {
    if (password === confirmPassword) {
      onNext({ fullName, email, phone, password, confirmPassword });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
      <div className="flex justify-center mt-10 text-white mb-10 px-8">
        <div className="bg-[#491217] w-full max-w-[523px] rounded-xl pb-10 px-4 sm:px-0">
          <p className="hidden sm:block text-3xl text-white text-right pr-5 pt-2">1/2</p>
          <div className="flex flex-col items-center">
            <img src="/images/logo.svg" alt="Logo" className="mt-5 sm:mt-0" />
            <div>
              <h1 className="text-[1.9rem] sm:text-3xl text-white mb-3">Sign Up</h1>
              <div>
                <Input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
                <Input
                    type="tel"
                    placeholder="Phone No."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-[276px] sm:w-[400px] bg-[#491217] h-[49px] border border-white text-white pl-2 outline-none placeholder:text-white placeholder:text-opacity-70"
                />
                <Button
                    variant="default"
                    size="default"
                    className="bg-white text-black w-[139px] sm:w-[313px] h-[43px] border border-white hover:bg-[#491217] hover:text-white rounded-xl text-xl font-semibold mt-3"
                    onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FormOne;
