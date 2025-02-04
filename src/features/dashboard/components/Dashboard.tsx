"use client"
import React, { useState, useEffect } from "react";
import { Button } from "@app/components/base/button";
import { useUser } from "@app/lib/auth";
import { Dialog, DialogContent } from "@app/components/base/dialog";
import EmailVerify from "./EmailVerify";

const Dashboard = () => {
  const { data: user } = useUser();
  const [isDialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (user?.data?.status === "registered") {
      setDialogOpen(true);
    }
  }, [user]);

  return (
          <div className="p-4 lg:p-10 flex flex-col gap-4 lg:gap-10 lora">
            <div className="flex flex-col justify-center items-center ">
              <h1 className="text-lg lg:text-2xl text-center">Welcome</h1>
              <h1 className="text-lg lg:text-2xl">to</h1>
              <div className="flex items-center">
                <img src="/images/logo.svg" alt="Logo" className="w-[50px] h-auto" />
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

              <div>
                <Button className="bg-[#491217] text-white h-[50px] rounded hover:bg-[#491217] hover:scale-105">
                  <a href={"/dashboard/banks"}> Activate your account and get started</a>
                </Button>
                <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                  <DialogContent>
                    <EmailVerify userEmail={user?.data?.email} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

  );
};

export default Dashboard;
