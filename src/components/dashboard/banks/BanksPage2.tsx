import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@app/components/base/table";
import React, { useState } from "react";

const BanksPage2 = () => {
  const [showCredit, setShowCredit] = useState(false);

  const toggleCredit = () => {
    setShowCredit(!showCredit);
  };

  return (
    <div className="mb-5">
      <div className="mt-5 flex gap-10 md:gap-16 w-full px-10 items-center sm:justify-between flex-col lg:justify-start lg:px-0 md:flex-row">
        <div className="w-[295px] h-[129px] border-2 rounded-xl shadow">
          <div className="ml-10 mt-4">
            <p className="text-[#491217] text-3xl">Balance</p>
            <p className="text-[#000000] text-3xl">25,000 Credits</p>
          </div>
          <p className="text-[#0F0905] text-opacity-60 text-lg text-center">
            =N10,000
          </p>
        </div>
        {/* Top-Up Wallet start */}
        <div
          className="w-[295px] h-[129px] border-2 rounded-xl shadow flex items-center justify-center gap-5 cursor-pointer"
          onClick={toggleCredit}
        >
          <div>
            <img
              src="/images/plus.svg"
              alt="Logo"
              className="w-[55px] h-[55px]"
            />
          </div>
          <div>
            <p className="text-[#491217] text-2xl">Top-Up Wallet</p>
            <p className="text-[#000000] text-base w-[171px]">
              Top-up wallet from bank, bank transfer, etc.
            </p>
          </div>
        </div>
        {/* Top-Up Wallet end */}
      </div>
      {/* Credit start */}
      {showCredit && (
        <div className="mt-10 max-w-[741px]">
          <div className="flex flex-col items-end mr-10">
            <div>
              <img
                src="/images/close.svg"
                alt="close"
                className="cursor-pointer"
                onClick={toggleCredit}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-5 px-5 justify-center md:justify-start">
            {/*  */}
            <div className="w-[185px] h-[133px] border-2 shadow border-[#491217] rounded-xl">
              <div className="flex flex-col items-center">
                <img
                  src="/images/coins-fill.svg"
                  alt="Coin"
                  className="w-[66px] h-[66px]"
                />
              </div>
              <div className="ml-5">
                <p className="text-lg text-[#491217]">3000 Credit</p>
                <p className="text-lg text-[#0F0905]">N5,000</p>
              </div>
            </div>
            {/* New */}
            <div className="w-[185px] h-[133px] border-2 shadow border-[#491217] rounded-xl">
              <div className="flex flex-col items-center">
                <img
                  src="/images/coins-fill.svg"
                  alt="Coin"
                  className="w-[66px] h-[66px]"
                />
              </div>
              <div className="ml-5">
                <p className="text-lg text-[#491217]">3000 Credit</p>
                <p className="text-lg text-[#0F0905]">N5,000</p>
              </div>
            </div>
            {/*  */}
            {/* New */}
            <div className="w-[185px] h-[133px] border-2 shadow border-[#491217] rounded-xl">
              <div className="flex flex-col items-center">
                <img
                  src="/images/coins-fill.svg"
                  alt="Coin"
                  className="w-[66px] h-[66px]"
                />
              </div>
              <div className="ml-5">
                <p className="text-lg text-[#491217]">3000 Credit</p>
                <p className="text-lg text-[#0F0905]">N5,000</p>
              </div>
            </div>
            {/*  */}
            {/* New */}
            <div className="w-[185px] h-[133px] border-2 shadow border-[#491217] rounded-xl">
              <div className="flex flex-col items-center">
                <img
                  src="/images/coins-fill.svg"
                  alt="Coin"
                  className="w-[66px] h-[66px]"
                />
              </div>
              <div className="ml-5">
                <p className="text-lg text-[#491217]">3000 Credit</p>
                <p className="text-lg text-[#0F0905]">N5,000</p>
              </div>
            </div>
            {/*  */}
            {/* New */}
            <div className="w-[185px] h-[133px] border-2 shadow border-[#491217] rounded-xl">
              <div className="flex flex-col items-center">
                <img
                  src="/images/coins-fill.svg"
                  alt="Coin"
                  className="w-[66px] h-[66px]"
                />
              </div>
              <div className="ml-5">
                <p className="text-lg text-[#491217]">3000 Credit</p>
                <p className="text-lg text-[#0F0905]">N5,000</p>
              </div>
            </div>
            {/*  */}
            {/* New */}
            <div className="w-[185px] h-[133px] border-2 shadow border-[#491217] rounded-xl">
              <div className="flex flex-col items-center">
                <img
                  src="/images/coins-fill.svg"
                  alt="Coin"
                  className="w-[66px] h-[66px]"
                />
              </div>
              <div className="ml-5">
                <p className="text-lg text-[#491217]">3000 Credit</p>
                <p className="text-lg text-[#0F0905]">N5,000</p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      )}
      {/* Credit ends */}
      {/* Transaction start */}
      <div className="mt-10 px-5 sm:px-0 sm:mr-10 sm:ml-10 lg:ml-0">
        <div className="flex items-center justify-between">
          <p className="text-2xl text-black">Transactions</p>
          <p className="text-lg text-black sm:hidden">View All</p>
        </div>
        <div className="border-2 rounded-xl mt-5 overflow-x-auto">
          <div className="min-w-full overflow-x-auto">
            <Table className="w-full lg:w-full">
              <TableHeader>
                <TableHead className="pl-10">ID</TableHead>
                <TableHead>Service Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Charges</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
              </TableHeader>
              <TableRow className="bg-[#F7F6FE] h-[62px]">
                <TableCell className="pl-5">2119983</TableCell>
                <TableCell>Activation Fee</TableCell>
                <TableCell className="">
                  <span className="text-[#1F9254] bg-[#EBF9F1] p-2 rounded-full">
                    Success
                  </span>
                </TableCell>
                <TableCell>6,000 Naira</TableCell>
                <TableCell>13/05/2024</TableCell>
                <TableCell>10:45AM</TableCell>
              </TableRow>
            </Table>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default BanksPage2;
