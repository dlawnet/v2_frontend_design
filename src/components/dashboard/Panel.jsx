import { useEffect, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Panel() {
  const [confirmPayment, setConfirmPayment] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="md:px-16 py-4 overflow-hidden">
      <div className="border rounded-lg md:p-6 p-3 ">
        <div>
          <h1 className="text-2xl">Panel Of Experts</h1>
          <p className="text-[var(--primary-color)] sm:text-sm sm:py-2">
            Select a Service Type from our panel of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-[75%_25%]">
          <div>
            <div className="text-sm mt-6 space-x-3 relative">
              <input
                type="text"
                name="serviceType"
                placeholder="Service Type"
                required
                className="border border-[var(--primary-color)] w-[40%] rounded-lg bg-transparent text-white p-4 "
              />
              <BiSolidDownArrow
                className="absolute text-white top-5 left-32"
                size={12}
              />
              <input
                type="text"
                name="Subject"
                placeholder="Subject"
                required
                className="border border-[var(--primary-color)] w-[40%] rounded-lg bg-transparent text-white p-4 "
              />
            </div>
            <div className="mt-4">
              <textarea
                placeholder="Question?"
                className="w-[82%] h-[10rem] p-4 rounded-lg border border-[var(--primary-color)]"
              />
            </div>

            <div className="mt-4">
              <div className="border-dashed py-6 border-black border gap-4 w-[80%] lg:w-fit flex">
                <div className="pl-6">
                  <FaCloudUploadAlt size={30} />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  // className="mb-4 text-white"
                  placeholder="upload profile"
                />
              </div>
            </div>

            <div className="w-fit md:mx-auto">
              <button
                type="submit"
                onClick={() => setConfirmPayment(!confirmPayment)}
                className="outline-none px-10 py-3 bg-[var(--primary-color)] text-[var(--text-color)] my-6 rounded-md hover:bg-primary-600"
              >
                Submit
              </button>
            </div>
          </div>

          <div>
            {/* <div>
              <h1 className="font-semibold text-lg py-3">Please Note</h1>
              <div className="space-y-4 text-justify md:w-full w-[85%]">
                <p>
                  Kindly Ensure the question you are about to ask is relevant to
                  law and avoid repetition of questions
                </p>
                <p>Done tasks will be deleted in 10-20 days after review.</p>
                <p>
                  If you post more than one question or multiple questions, it
                  will be regarded as full preparation request and it will be
                  charged accordingly.
                </p>
              </div>
            </div> */}
            <div>
              {/* Loading Condition for Skeleton Loader */}
              {isLoading ? (
                <div className="animate-pulse space-y-4">
                  {/* Skeleton Loader for Title */}
                  <div className="h-4 bg-gray-300 rounded-md w-[30%]"></div>

                  {/* Skeleton Loader for Paragraphs */}
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-300 rounded-md w-[90%]"></div>
                    <div className="h-3 bg-gray-300 rounded-md w-[80%]"></div>
                    <div className="h-3 bg-gray-300 rounded-md w-[85%]"></div>
                  </div>
                </div>
              ) : (
                <div>
                  <h1 className="font-semibold text-lg py-3">Please Note</h1>
                  <div className="space-y-4 text-justify text-[12px] md:text-base md:w-full w-[85%]">
                    <p>
                      Kindly ensure the question you are about to ask is
                      relevant to law and avoid repetition of questions.
                    </p>
                    <p>
                      Done tasks will be deleted in 10-20 days after review.
                    </p>
                    <p>
                      If you post more than one question or multiple questions,
                      it will be regarded as a full preparation request and
                      charged accordingly.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 md:px-4 overflow-scroll">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="md:px-4 px-1 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                ID
              </th>
              <th className="md:px-4 px-1 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Subject
              </th>
              <th className="md:px-4 px-1 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Question
              </th>
              <th className="md:px-4 px-1 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Charges
              </th>
              <th className="md:px-4 px-1 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="md:px-4 px-1 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="md:px-4 px-1 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-100">
            <tr>
              <td className="border-t border-gray-200 md:px-4 px-2 py-3 text-sm text-gray-500">
                #1
              </td>
              <td className="border-t border-gray-200 md:px-4 px-2 py-3 text-sm text-gray-500">
                Test Project
              </td>
              <td className="border-t border-gray-200 md:px-4 px-2 py-3 text-sm text-gray-500">
                Some dummy text
              </td>
              <td className="border-t border-gray-200 md:px-4 px-2 py-3 text-sm text-gray-500">
                20,000 credits
              </td>
              <td className="border-t border-gray-200 md:px-4 px-2 py-3 text-sm text-gray-500">
                13/05/2022
              </td>
              <td className="border-t border-green-200 bg-green-50 md:px-4 px-2 py-3 text-sm text-green-500">
                Delivered
              </td>
              <td className="border-t border-gray-200 bg-gray-50 md:px-4 px-2 py-3 text-sm text-purple-700">
                <FaEdit />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {confirmPayment && (
        <div>
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[1000] transform duration-700 ease-in-out`}
          >
            <div className=" mx-auto lg:w-[35%] md:w-[40%] w-[70%] shadow-black shadow-md rounded-lg my-[50%] md:my-[15rem] p-4 bg-white justify-center flex-col">
              <div
                onClick={() => setConfirmPayment(false)}
                className="flex justify-end p-1"
              >
                <button className="text-black outline-none">
                  <IoClose size={30} />
                </button>
              </div>

              <p className="text-center">
                You are about to be charged [amount] for this question Would you
                like to proceed?
              </p>

              <div className="flex gap-6 py-6 justify-center items-center">
                <button
                  onClick={() => setConfirmPayment(false)}
                  className="px-4 py-2 border border-[var(--primary-color)] rounded-md bg-transparent text-[var(--primary-color)]"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 border border-[var(--primary-color)] rounded-md bg-[var(--primary-color)] text-[var(--text-color)]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Panel;
