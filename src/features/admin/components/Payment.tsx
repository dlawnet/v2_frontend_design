'use client'
import React, { useState } from 'react';
import { CancelIcon, CheckIcon } from '@app/icons';

interface PaymentData {
    username: string
    email: string
    amount: number
    currency: string
    paymentType: string
    paymentReceipt: string
    status: string
}

const data: PaymentData[] = [
  { 
    username: "PeterJohn",
    email: "pj@mail.com",
    amount: 6000,
    currency: "NGN",
    paymentType: "Bank Transfer",
    paymentReceipt: "Payment.pdf",
    status: "Successful"
  },
  { 
    username: "PeterJohn",
    email: "pj@mail.com",
    amount: 6000,
    currency: "NGN",
    paymentType: "Bank Transfer",
    paymentReceipt: "Payment.pdf",
    status: "Successful"
  },
  { 
    username: "PeterJohn",
    email: "pj@mail.com",
    amount: 6000,
    currency: "NGN",
    paymentType: "Bank Transfer",
    paymentReceipt: "Payment.pdf",
    status: "Successful"
  },
  { 
    username: "PeterJohn",
    email: "pj@mail.com",
    amount: 6000,
    currency: "NGN",
    paymentType: "Bank Transfer",
    paymentReceipt: "Payment.pdf",
    status: "Successful"
  },
  { 
    username: "PeterJohn",
    email: "pj@mail.com",
    amount: 6000,
    currency: "NGN",
    paymentType: "Bank Transfer",
    paymentReceipt: "Payment.pdf",
    status: "Successful"
  },
  { 
    username: "PeterJohn",
    email: "pj@mail.com",
    amount: 6000,
    currency: "NGN",
    paymentType: "Bank Transfer",
    paymentReceipt: "Payment.pdf",
    status: "Successful"
  },
  { 
    username: "PeterJohn",
    email: "pj@mail.com",
    amount: 6000,
    currency: "NGN",
    paymentType: "Bank Transfer",
    paymentReceipt: "Payment.pdf",
    status: "Successful"
  },
  { 
    username: "PeterJohn",
    email: "pj@mail.com",
    amount: 6000,
    currency: "NGN",
    paymentType: "Bank Transfer",
    paymentReceipt: "Payment.pdf",
    status: "Successful"
  },
  { 
    username: "PeterJohn",
    email: "pj@mail.com",
    amount: 6000,
    currency: "NGN",
    paymentType: "Bank Transfer",
    paymentReceipt: "Payment.pdf",
    status: "Successful"
  },
  { 
    username: "PeterJohn",
    email: "pj@mail.com",
    amount: 6000,
    currency: "NGN",
    paymentType: "Bank Transfer",
    paymentReceipt: "Payment.pdf",
    status: "Successful"
  },
  { 
    username: "PeterJohn",
    email: "pj@mail.com",
    amount: 6000,
    currency: "NGN",
    paymentType: "Bank Transfer",
    paymentReceipt: "Payment.pdf",
    status: "Successful"
  },
]


const Payment = () => {
    const PAGE_SIZE = 10;
    const [currentPage, setCurrentPage] = useState(1)
    const [filteredData, setFilteredData] = useState(data)
  
    const paginatedData = filteredData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
    const totalPages = Math.ceil(filteredData.length / PAGE_SIZE)

    return (
        <div className='w-full h-full p-2 sm:px-4 lg:px-6 lg:py-2 flex flex-col gap-4 lg:gap-10'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-[1.6em] font-bold text-[#491217]'>Payment Verification</h2>        
            </div>

            <div className="w-full flex">

                <div className='w-[950px] overflow-x-scroll lg:overflow-hidden lg:w-full mx-auto'>
                
                    <div className="bg-yellow-300 px-2 text-[.7em] text-[#491217] font-semibold py-2 grid grid-cols-8 gap-2">
                        <div>Username</div>
                        <div>Email</div>
                        <div>Amount</div>
                        <div>Currency</div>
                        <div>Payment Type</div>
                        <div>Payment Receipt</div>
                        <div>Status</div>
                        <div className='flex justify-center'>Actions</div>
                    </div>

                    {paginatedData.map((user, index) => (
                        <div key={index} className="grid grid-cols-8 gap-2 px-2 py-4 border-b text-[.8em]">
                            <div>{user.username}</div>
                            <div>{user.email}</div>
                            <div>{user.amount} Credit</div>
                            <div>{user.currency}</div>
                            <div>{user.paymentType}</div>
                            <div>{user.paymentReceipt}</div>
                            <div>{user.status}</div>
                            <div className='flex justify-center gap-2'>
                                <button className="text-[#491217]">
                                    <CheckIcon size='mid'/>
                                </button>
                                <button className="text-[#491217]">
                                    <CancelIcon size='mid'/>
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-center items-center mt-4 space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="text-[#491217] text-[.8em]"
                        >
                            Previous
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-2 py-1 rounded-[6px] text-[.8em] ${currentPage === i + 1 ? 'bg-[#491217] text-white' : 'bg-yellow-300 text-[#491217]'}`}
                            >
                            {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="text-[#491217] text-[.8em]"
                        >
                            Next
                        </button>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Payment