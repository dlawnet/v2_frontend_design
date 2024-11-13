'use client'
import React, { useState } from "react";
import { Button } from "@app/components/base/button";
import {
  Dialog,
  DialogTrigger,
} from "@app/components/base/dialog";
import EmailVerify from "@app/features/dashboard/components/EmailVerify";
import Invoice from "@app/features/dashboard/components/Invoice";

interface BanksPage1Props {
  setBankPage: (page: string) => void;
}

const BanksPage1: React.FC<BanksPage1Props> = ({ setBankPage }) => {
  
  return (
    <Dialog>
      <div className="mt-5 px-7 pb-5 lg:pb-0 lg:px-0 lg:pl-10">
        <div>
          <DialogTrigger>
            <Button
              className="mt-5 w-[255px] flex flex-col items-start bg-[#491217] text-white h-[109px] rounded hover:bg-[#491217]"
              onClick={() => setBankPage("BanksPage2")}
            >
              <div className="flex items-center gap-2">
                <img src="/images/coins.svg" alt="Logo" />
                <p className="text-[#FDDF5A] text-xl">Activate Account</p>
              </div>
              Click Here to Activate Your Account
            </Button>
          </DialogTrigger>

          {/* <EmailVerify userEmail=""/> */}
          <Invoice/>
        </div>

        <div className="mt-10">
          <p className="font-medium text-xl lg:text-3xl">Please Note:</p>
          <p className="text-xl lg:text-xl mt-5">
            Subscription is by a wallet system of Pay As You Use.
          </p>
          <ul className="list-disc list-inside text-xl lg:text-xl mt-5">
            <li className="ml-3">
              Setup Fee: University Law Students ₦6,000 a one time activation fee
              to enable use of all features & facilities.
            </li>
            <li className="ml-3">
              Setup Fee: Law School Students ₦12,000 a one time activation fee to
              enable use of all features & facilities.
            </li>
            <li className="ml-3">
              Other Payments will depend on requested services activated through
              the wallet system of deposit & balance.
            </li>
          </ul>
          <p className="text-xl lg:text-xl mt-5">
            Please be advised, after every payment to the bank, upload your
            remittance receipt to activate the service.
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default BanksPage1;
