"use client"
import React, { useState } from "react";
import {Button} from "@app/components/base/button";
import {useUser} from "@app/lib/auth";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@app/components/base/dialog";
import { Mail, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const { data: user } = useUser();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    if (email) {
      // Simulate email submission (add DLawNet API here)
      setStep(2);
    }
  };

  return (
    <Dialog>
      <div className="p-4 lg:p-10 flex flex-col gap-4 lg:gap-10 lora">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-lg lg:text-2xl text-center">Welcome</h1>
          <h1 className="text-lg lg:text-2xl">to</h1>
          <div className="flex items-center">
            <img src="/images/logo.svg" alt="Logo" className="w-[50px] h-auto"/>
            <p className="text-[#FDDF5A] text-xl lg:text-3xl">DLawNet</p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 lg:gap-5 helvetica">
          <p className="font-medium text-lg lg:text-2xl">
            Hello {user?.data?.first_name} {user?.data?.last_name},
          </p>

          <p className="text-[.8em] lg:text-[.9em] lg:max-w-[60%] leading-5">
            We're excited to have you with us and can't wait for you to discover
            everything we have in store. Whether you're here to learn, grow, or
            connect, you're in the right place. Ready to get started?
          </p>

          {user?.data?.status === 'registered'
            ? (
              <div>
                <DialogTrigger>
                  <Button className="bg-[#491217] text-white h-[50px] rounded hover:bg-[#491217] hover:scale-105">
                    Activate your account and get started
                  </Button>
                </DialogTrigger>

                <DialogContent className="w-full max-w-2xl p-6 bg-white rounded-[10px] overflow-hidden">
                  {step === 1 ? (
                    <div className="flex flex-col items-center gap-4">
                      <Mail className="w-10 h-10 text-[#491217]" />
                      <h2 className="text-2xl font-semibold text-[#491217]">Verify Your Email</h2>
                      <p className="text-gray-600 text-center">
                        Enter your email address, and we'll send you a link to verify it.
                      </p>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#491217]"
                      />
                      <Button
                        onClick={handleEmailSubmit}
                        className="bg-[#491217] text-white rounded px-4 py-2 hover:bg-[#491217] hover:scale-105"
                      >
                        Send Verification Email
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                      <h2 className="text-2xl font-semibold text-[#491217]">Verification Email Sent!</h2>
                      <p className="text-gray-600 text-center">
                        A verification link has been sent to <strong>{email}</strong>. Please check your inbox.
                      </p>
                    </div>
                  )}
                </DialogContent>
              </div>
            ) : (
              <Button className="bg-[#491217] text-white h-[50px] rounded hover:bg-[#491217] hover:scale-105">
                Get started
              </Button>
            )
          }
        </div>
      </div>
    </Dialog>
  );
};

export default Dashboard;
