import React, {useState} from "react";
import {useGetAccountBalance, useGetTopUpItems} from "@app/features/dashboard";
import TopUpItem from "@app/features/dashboard/components/TopUpItem";
import {DataTable} from "@app/components/DataTable";

const BanksPage2 = () => {
    const [showCredit, setShowCredit] = useState(false);

    const toggleCredit = () => {
        setShowCredit(!showCredit);
    };
    const {data: getBalance} = useGetAccountBalance()
    const {data: getTopupItems} = useGetTopUpItems()
    return (
        <div className="mb-5 p-2 md:p-6">
            <div
                className="mt-5 flex gap-10 md:gap-8 w-full px-10 items-center sm:justify-between flex-col lg:justify-start lg:px-0 md:flex-row">
                <div className="w-[295px] h-[129px] border rounded-xl hover:shadow">
                    <div className="ml-10 mt-4">
                        <p className="text-[#491217] text-3xl">Balance</p>
                        <p className="text-[#000000] text-3xl">{getBalance} Credits</p>
                    </div>
                    <p className="text-[#0F0905] text-opacity-60 text-lg text-center">
                        =N{getBalance}
                    </p>
                </div>

                {/* Top-Up Wallet start */}
                <div
                    className="w-[295px] h-[129px] border rounded-xl hover:shadow flex items-center justify-center gap-5 cursor-pointer"
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
                    <div className="flex flex-wrap gap-5 px-4 py-2 justify-center md:justify-start">
                        {getTopupItems?.data.map((item: any) => (
                            <TopUpItem
                                key={item.id}
                                credit={item.title}
                                price={item.amount}
                            />
                        ))}
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
                        <DataTable columns={[]} data={[]}>

                        </DataTable>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    );
};

export default BanksPage2;
