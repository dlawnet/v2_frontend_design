"use client"
import React from "react";
import {Button} from "@app/components/base/button";
import {useUser} from "@app/lib/auth";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@app/components/base/dialog"

const Dashboard = () => {
  const { data: user } = useUser();

  return (
    <Dialog>
      <div className="mt-5 px-7 pb-5 lg:pb-0 lg:px-0 lg:pl-10">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl lg:text-5xl text-center">Welcome</h1>
          <h1 className="text-4xl lg:text-5xl">to</h1>
          <div className="flex items-center">
            <img src="/images/logo.svg" alt="Logo" />
            <p className="text-[#FDDF5A] text-4xl lg:text-5xl">DLawNet</p>
          </div>
        </div>
        <div className="mt-10">
          <p className="font-medium text-2xl lg:text-3xl">Hello {user?.data?.first_name} {user?.data?.last_name},</p>
          <p className="text-xl lg:text-2xl lg:max-w-[80%] mt-5">
            We're excited to have you with us and can't wait for you to discover
            everything we have in store. Whether you're here to learn, grow, or
            connect, you're in the right place. Ready to get started?
          </p>

          {user?.data?.status === 'registered'
            ? (
              <div>
                <DialogTrigger>
                  <Button className="mt-5 bg-[#491217] text-white h-[50px] rounded hover:bg-[#491217] hover:scale-105">
                    Activate your account and get started
                  </Button>
                </DialogTrigger>

                <DialogContent className="w-full max-w-2xl p-6 bg-white rounded-[10px] overflow-hidden">
                  Hello
                </DialogContent>
              </div>
            ) : (
              <Button className="mt-5 bg-[#491217] text-white h-[50px] rounded hover:bg-[#491217] hover:scale-105">
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
