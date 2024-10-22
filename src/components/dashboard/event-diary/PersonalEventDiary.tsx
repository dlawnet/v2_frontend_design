import React from "react";

const PersonalEventDiary = () => {
  return (
    <div>
      <div className="w-[80%] mt-2">
        <div className="flex justify-evenly">
          <div className="flex flex-col items-center">
            <p className="text-lg">Personal Event Diary</p>
            <div className="w-[69px] h-1 bg-[#491217] rounded-t-[5px]"></div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg text-opacity-50">Law Society</p>
            <div className="hidden w-[69px] h-1 bg-[#491217] rounded-t-[5px]"></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PersonalEventDiary;
