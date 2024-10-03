import { PiCoinsFill } from "react-icons/pi";
import { ImPlus } from "react-icons/im";
import { useState } from "react";

function Banks() {
  const [activate, setActivate] = useState(false);
  return (
    <div>
      {activate === false && (
        <div className="md:px-20 px-8 md:py-8 ">
          <div className="bg-[var(--primary-color)] md:p-12 p-8 my-8 md:my-0 w-fit rounded-lg">
            <div className="flex items-center gap-3">
              <PiCoinsFill
                className="text-[var(--secondary-color)]"
                size={35}
              />
              <h1 className="md:text-2xl text-lg text-[var(--secondary-color)]">
                Activate Account
              </h1>
            </div>

            <p
              onClick={() => setActivate(!activate)}
              className="text-white cursor-pointer pt-3 text-sm"
            >
              Click Here to Activate Your Account
            </p>
          </div>

          <div className="space-y-3 my-8">
            <h1 className="md:text-2xl text-lg font-semibold">Please Note:</h1>

            <p>Subscription is by a wallet system of Pay As You Use.</p>
            <ul className="px-6">
              <li className="">
                1. {""} Setup Fee: University Law Students ₦6,000 a one time
                activation fee to enable use of all features & facilities.
              </li>
              <li>
                2. {""} You will receive an email with a verification link to
                complete the registration process.
              </li>
              <li>
                3. {""} Please note that you may not be able to access your
                account if you have not verified your email address.
              </li>
            </ul>

            <p>
              Please be advised, after every payment to the bank, upload your
              remittance receipt to activate the service.
            </p>
          </div>
        </div>
      )}

      {activate && (
        <div className="md:px-20 px-10 py-8">
          <div className="md:flex space-y-3 md:space-y-0 gap-8 my-6">
            <div className="border shadow-md rounded-lg px-6 py-4 space-y-1">
              <h1 className="text-2xl font-semibold text-[var(--primary-color)]">
                Balance
              </h1>
              <h1 className="text-xl font-semibold text-black">
                25,000 Credits
              </h1>

              <p className="md:text-center text-gray-500">=N10,000</p>
            </div>
            <div className="border flex items-center gap-3 shadow-md rounded-lg p-8">
              <div className="flex justify-end">
                <div className="rounded-full bg-[var(--primary-color)] p-2 w-fit">
                  <ImPlus color="white" size={20} />
                </div>
              </div>

              <div>
                <h1 className="text-xl font-semibold text-[var(--primary-color)]">
                  Top-Up Wallet
                </h1>

                <p>Top-up wallet from bank, bank transfer, etc.</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-2xl py-6 font-semibold text-[var(--primary-color)]">
                  Transactions
                </h1>
                <p>View All</p>
              </div>

              <div>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Service Type
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Charges
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-t border-gray-200 px-4 py-3 text-sm text-gray-500">
                        12/01/2022
                      </td>
                      <td className="border-t border-gray-200 px-4 py-3 text-sm text-gray-500">
                        Activation Fee
                      </td>
                      <td className="border-t border-green-200 bg-green-50 px-4 py-3 text-sm text-green-500">
                        Success
                      </td>
                      <td className="border-t border-gray-200 px-4 py-3 text-sm text-gray-500">
                        6,000 Naira
                      </td>
                      <td className="border-t border-gray-200 px-4 py-3 text-sm text-gray-500">
                        13/05/2024
                      </td>
                      <td className="border-t border-gray-200 px-4 py-3 text-sm text-gray-500">
                        10:45AM
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banks;
