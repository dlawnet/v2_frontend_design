import { useState } from "react";

function MootCourts() {
  const [video, setVideo] = useState(false);
  return (
    <div className="md:px-10">
      <div className="flex justify-center mx-auto w-fit">
        <input
          type="search"
          placeholder="search"
          className="py-3 px-4 outline-none md:w-[27rem] w-[20rem] rounded-full border border-[var(--primary-color)]"
        />
      </div>

      {video === false && (
        <div className="md:my-12 my-6 md:px-16">
          {/* <div className="flex md:gap-8 gap-2">
            <p className="rounded-full bg-[var(--secondary-color)] text-[var(--primary-color)] p-1 px-4">
              All
            </p>
            <p className="rounded-full bg-[var(--primary-color)] text-white p-1 px-4">
              Moot Court
            </p>
            <p className="rounded-full bg-[var(--primary-color)] text-white p-1 px-4">
              Tutorials
            </p>
            <p className="rounded-full bg-[var(--primary-color)] text-white p-1 px-4">
              Tournaments
            </p>
          </div> */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-8 pb-8">
            <p className="rounded-full bg-[var(--secondary-color)] text-[var(--primary-color)] p-1 px-4 text-xs md:text-sm lg:text-base">
              All
            </p>
            <p className="rounded-full bg-[var(--primary-color)] text-white p-1 px-4 text-xs md:text-sm lg:text-base">
              Moot Court
            </p>
            <p className="rounded-full bg-[var(--primary-color)] text-white p-1 px-4 text-xs md:text-sm lg:text-base">
              Tutorials
            </p>
            <p className="rounded-full bg-[var(--primary-color)] text-white p-1 px-4 text-xs md:text-sm lg:text-base">
              Tournaments
            </p>
          </div>

          <div className="md:flex lg:justify-between md:gap-10">
            <img
              onClick={() => setVideo((video) => !video)}
              src="/vidd.png"
              alt="videos"
              className="md:w-1/5 w-3/5"
            />
            <img src="/vidd.png" alt="videos" className="md:w-1/5 w-3/5" />
            <img src="/vidd.png" alt="videos" className="md:w-1/5 w-3/5" />
          </div>
          <div className="hidden md:flex lg:justify-between md:gap-10">
            <img src="/vidd.png" alt="videos" className="md:w-1/5 w-3/5" />
            <img src="/vidd.png" alt="videos" className="md:w-1/5 w-3/5" />
            <img src="/vidd.png" alt="videos" className="md:w-1/5 w-3/5" />
          </div>
        </div>
      )}

      {video && (
        <div className="grid grid-cols-[80%_20%]">
          <div>
            <div className="px-14">
              <img src="/vid.png" alt="videos" className="w-[100%] mb-6" />
              <div className="my-4">
                <p>10 Things about Law School</p>
                <p>2 Months ago</p>
              </div>

              <div className="flex gap-2 my-8">
                <img
                  src="/dlaw.png"
                  alt="videos"
                  className="w-[3rem] h-[3rem]"
                />
                <div>
                  <p>Dlawnet</p>
                  <p>14.1M Subscribers</p>
                </div>
              </div>

              <div className="flex gap-2">
                <p>604 Comments</p>
                <p>SORT BY</p>
              </div>
            </div>

            <div className="flex px-14 gap-2 my-8">
              <img src="/girl.png" alt="videos" className="w-[3rem] h-[3rem]" />
              <div>
                <div className="items-center flex gap-1">
                  <p>Jenny Wilson</p>
                  <p>3 days ago (edited)</p>
                </div>
                <p className="text-sm">
                  Wow This is so nice!. i didn’t know these things thank you
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <img src="/vidd.png" alt="videos" className="w-4/5" />
            <img src="/vidd.png" alt="videos" className="w-4/5" />
            <img src="/vidd.png" alt="videos" className="w-4/5" />
            <img src="/vidd.png" alt="videos" className="w-4/5" />
            <img src="/vidd.png" alt="videos" className="w-4/5" />
            <img src="/vidd.png" alt="videos" className="w-4/5" />
            <img src="/vidd.png" alt="videos" className="w-4/5" />
          </div>
        </div>
      )}
    </div>
  );
}

export default MootCourts;
