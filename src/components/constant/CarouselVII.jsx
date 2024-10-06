// import { useState } from "react";

// function CarouselVII() {
//   const items = [
//     {
//       id: 1,
//       imgSrc: "/student.svg",
//       text: "In all areas of Law, get help from our panel of experts for exam preps & tutorials.",
//     },
//     {
//       id: 2,
//       imgSrc: "/calender.png",
//       text: "Get connected with other law school students & activities Nationwide.",
//     },
//     {
//       id: 3,
//       imgSrc: "/law.svg",
//       text: "Watch & learn how to moot from the best.",
//     },
//     {
//       id: 4,
//       imgSrc: "/data.svg",
//       text: "In all areas of Law, get help from our panel of experts for exam preps & tutorials.",
//     },
//     {
//       id: 5,
//       imgSrc: "/example.svg",
//       text: "Another example of content here.",
//     },
//     // Add more items as necessary
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsToShow = 3;

//   const next = () => {
//     if (currentIndex + itemsToShow < items.length) {
//       setCurrentIndex(currentIndex + itemsToShow);
//     }
//   };

//   const prev = () => {
//     if (currentIndex - itemsToShow >= 0) {
//       setCurrentIndex(currentIndex - itemsToShow);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={prev} disabled={currentIndex === 0}>
//           Prev
//         </button>
//         <div className="flex gap-6 px-8">
//           {items
//             .slice(currentIndex, currentIndex + itemsToShow)
//             .map((item, index) => (
//               <div
//                 key={item.id}
//                 className="w-64 bg-[var(--secondary-color)] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] pt-20 pb-4 px-6 space-y-3 relative overflow-hidden"
//               >
//                 <div className="w-24 h-24 bg-[var(--primary-color)] rounded-full absolute -right-5 -top-7">
//                   <p className="absolute bottom-6 left-7 text-white text-2xl">
//                     {String(currentIndex + index + 1).padStart(2, "0")}
//                   </p>
//                 </div>
//                 <img
//                   src={item.imgSrc}
//                   alt={`carousel-item-${item.id}`}
//                   className="font-bold text-[var(--primary-color)] md:w-[25%] w-[15%]"
//                 />
//                 <p className="text-lg leading-7 py-2">{item.text}</p>
//               </div>
//             ))}
//         </div>
//         <button
//           onClick={next}
//           disabled={currentIndex + itemsToShow >= items.length}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CarouselVII;

// import { useState } from "react";
// import { GrFormPrevious } from "react-icons/gr";
// import { MdNavigateNext } from "react-icons/md";

// const Carousel = () => {
//   const items = [
//     {
//       id: 1,
//       imgSrc: "/student.svg",
//       text: "In all areas of Law, get help from our panel of experts for exam preps & tutorials.",
//     },
//     {
//       id: 2,
//       imgSrc: "/calender.png",
//       text: "Get connected with other law school students & activities Nationwide.",
//     },
//     {
//       id: 3,
//       imgSrc: "/law.svg",
//       text: "Watch & learn how to moot from the best.",
//     },
//     {
//       id: 4,
//       imgSrc: "/data.svg",
//       text: "In all areas of Law, get help from our panel of experts for exam preps & tutorials.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsToShow = 3; // Number of items to display at a time

//   const prev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - itemsToShow : prevIndex - itemsToShow
//     );
//   };

//   const next = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + itemsToShow >= items.length ? 0 : prevIndex + itemsToShow
//     );
//   };

//   return (
//     // <div className="relative">
//     //   <button
//     //     onClick={prev}
//     //     disabled={currentIndex === 0}
//     //     className="absolute left-0 z-10 bg-[var(--primary-color)] p-2 text-white rounded-full disabled:opacity-50"
//     //   >
//     //     Prev
//     //   </button>
//     //   <div className="overflow-hidden w-full">
//     //     <div
//     //       className="flex gap-8 px-14 transition-transform duration-700 ease-in-out"
//     //       style={{
//     //         transform: `translateX(-${(currentIndex / items.length) * 100}%)`,
//     //       }}
//     //     >
//     //       {items.map((item, index) => (
//     //         <div
//     //           key={item.id}
//     //           className="w-[25%] flex-shrink-0 bg-[var(--secondary-color)] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] pt-20 pb-4 px-6 space-y-3 relative overflow-hidden"
//     //         >
//     //           <div className="w-24 h-24 bg-[var(--primary-color)] rounded-full absolute -right-5 -top-7">
//     //             <p className="absolute bottom-6 left-7 text-white text-2xl">
//     //               {String(index + 1).padStart(2, "0")}
//     //             </p>
//     //           </div>
//     //           <img
//     //             src={item.imgSrc}
//     //             alt={`carousel-item-${item.id}`}
//     //             className="font-bold text-[var(--primary-color)] md:w-[25%] w-[15%]"
//     //           />
//     //           <p className="text-lg leading-7 py-2">{item.text}</p>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     //   <button
//     //     onClick={next}
//     //     disabled={currentIndex + itemsToShow >= items.length}
//     //     className="absolute right-0 z-10 bg-[var(--primary-color)] p-2 text-white rounded-full disabled:opacity-50"
//     //   >
//     //     Next
//     //   </button>
//     // </div>

//     <div className="flex items-center lg:px-8">
//       <button
//         onClick={prev}
//         title="Add New"
//         className="group bg-[var(--primary-color)] p-2 text-white rounded-full cursor-pointer outline-none hover:rotate-180 duration-300"
//       >
//         <GrFormPrevious size={30} />
//       </button>
//       <div className="overflow-hidden w-full">
//         <div
//           className="flex gap-8 md:px-14 transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${(currentIndex / itemsToShow) * 100}%)`,
//           }}
//         >
//           {items.map((item, index) => (
//             <div
//               key={item.id}
//               className="w-[33.33%] flex-shrink-0 bg-[var(--secondary-color)] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] pt-20 pb-4 px-6 space-y-3 relative overflow-hidden"
//             >
//               <div className="w-24 h-24 bg-[var(--primary-color)] rounded-full absolute -right-5 -top-7">
//                 <p className="absolute bottom-6 left-7 text-white text-2xl">
//                   {String(index + 1).padStart(2, "0")}
//                 </p>
//               </div>
//               <img
//                 src={item.imgSrc}
//                 alt={`carousel-item-${item.id}`}
//                 className="font-bold text-[var(--primary-color)] md:w-[20%] w-[15%]"
//               />
//               <p className="leading-7 py-2">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <button
//         onClick={next}
//         className="group bg-[var(--primary-color)] ml-10 p-2 text-white rounded-full cursor-pointer outline-none hover:rotate-180 duration-300"
//       >
//         <MdNavigateNext size={30} />
//       </button>
//     </div>
//   );
// };

// export default Carousel;

import { useEffect, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { ImArrowUpRight2 } from "react-icons/im";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      imgSrc: "/student.svg",
      text: "In all areas of Law, get help from our panel of experts for exam preps & tutorials.",
      link: "login",
    },
    {
      id: 2,
      imgSrc: "/calender.png",
      text: "Get connected with other law school students & activities Nationwide.",
      link: "login",
    },
    {
      id: 3,
      imgSrc: "/law.svg",
      text: "Watch & learn how to moot from the best.",
      link: "login",
    },
    {
      id: 4,
      imgSrc: "/data.svg",
      text: "In all areas of Law, get help from our panel of experts for exam preps & tutorials.",
      link: "login",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - itemsToShow : prevIndex - itemsToShow
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= items.length ? 0 : prevIndex + itemsToShow
    );
  };

  const smallItemsToShow = 1;

  const prevSmall = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - smallItemsToShow
    );
  };

  const nextSmall = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + smallItemsToShow >= items.length ? 0 : prevIndex + itemsToShow
    );
  };

  return (
    <>
      <div className="hidden md:flex items-center lg:px-8">
        <button
          onClick={prev}
          title="Add New"
          className="group bg-[var(--primary-color)] p-2 text-white rounded-full cursor-pointer outline-none hover:rotate-180 duration-300"
        >
          <GrFormPrevious size={30} />
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-8 md:px-14 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / itemsToShow) * 100}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                // key={item.id}
                key={index}
                className="md:w-[33.333%] w-[50%]  flex-shrink-0 bg-[var(--secondary-color)] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] pt-20 pb-4 px-6 space-y-3 relative overflow-hidden"
              >
                <div className="w-24 h-24 bg-[var(--primary-color)] rounded-full absolute -right-5 -top-7">
                  <p
                    className="absolute bottom-6 left-7 text-white cursor-pointer text-2xl"
                    onClick={() => navigate(item.link)}
                  >
                    <ImArrowUpRight2 />
                  </p>
                </div>
                <img
                  src={item.imgSrc}
                  alt={`carousel-item-${item.id}`}
                  className="font-bold text-[var(--primary-color)] md:w-[20%] w-[15%]"
                />
                <p className="leading-7 py-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="group bg-[var(--primary-color)] ml-10 p-2 text-white rounded-full cursor-pointer outline-none hover:rotate-180 duration-300"
        >
          <MdNavigateNext size={30} />
        </button>
      </div>

      {/* <div className="hidden md:flex items-center lg:px-8">
        <button
          onClick={prevSmall}
          title="Add New"
          className="group bg-[var(--primary-color)] p-2 text-white rounded-full cursor-pointer outline-none hover:rotate-180 duration-300"
        >
          <GrFormPrevious size={30} />
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-8 md:px-14 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / itemsToShow) * 100}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                // key={item.id}
                key={index}
                className="w-[90%] flex-shrink-0 bg-[var(--secondary-color)] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] pt-20 pb-4 px-6 space-y-3 relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-[var(--primary-color)] rounded-full absolute -right-2 -top-3">
                  <p
                    className="absolute bottom-4 left-3 text-white cursor-pointer text-2xl"
                    onClick={() => navigate(item.link)}
                  >
                    <ImArrowUpRight2 />
                  </p>
                </div>
                <img
                  src={item.imgSrc}
                  alt={`carousel-item-${item.id}`}
                  className="font-bold text-[var(--primary-color)] w-[15%]"
                />
                <p className="leading-7 py-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSmall}
          className="group bg-[var(--primary-color)] ml-10 p-2 text-white rounded-full cursor-pointer outline-none hover:rotate-180 duration-300"
        >
          <MdNavigateNext size={30} />
        </button>
      </div> */}

      <div className="flex md:hidden items-center">
        <div className="overflow-hidden ml-8 mr-2 w-[65%]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${items.length * 100}%`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 bg-[var(--secondary-color)] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] pt-16 pb-4 px-6 space-y-3 relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-[var(--primary-color)] rounded-full absolute left-[20%] top-2">
                  <p
                    className="absolute bottom-5 left-5 text-white cursor-pointer text-xl"
                    onClick={() => navigate(item.link)}
                  >
                    <ImArrowUpRight2 />
                  </p>
                </div>
                <img
                  src={item.imgSrc}
                  alt={`carousel-item-${item.id}`}
                  className="font-bold text-[var(--primary-color)]"
                />
                <p className="leading-7 w-[22%] pt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSmall}
          className="group bg-[var(--primary-color)] p-2 text-white rounded-full cursor-pointer outline-none hover:rotate-180 duration-300"
        >
          <MdNavigateNext size={30} />
        </button>
      </div>
    </>
  );
};

export default Carousel;
