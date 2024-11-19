import React from "react";

interface TopUpItemProps {
    credit: string;
    price: string;
}

const TopUpItem: React.FC<TopUpItemProps> = ({  credit, price }) => {
    return (
        <div className="w-[185px] h-[133px] border-2 shadow border-[#491217] rounded-xl">
            <div className="flex flex-col items-center mt-2">
                <img src={"/images/coins-fill.svg"} alt={"Coin"} className="w-[66px] h-[66px]" />
            </div>
            <div className="ml-5 mt-2">
                <p className="text-lg text-[#491217]">{credit}</p>
                <p className="text-lg text-[#0F0905]">{price}</p>
            </div>
        </div>
    );
};

export default TopUpItem;
