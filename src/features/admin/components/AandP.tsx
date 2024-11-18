'use client'
import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { FilterIcon } from '@app/icons';

interface APData {
    type: string
    title: string
    amount: number
}

const data: APData[] = [
    { 
        title: "For activation",
        type: "Activation",
        amount: 6000,
    },
]


const AandP = () => {
    const PAGE_SIZE = 10;
    const [currentPage, setCurrentPage] = useState(1)
    const [filteredData, setFilteredData] = useState(data)
  
    const paginatedData = filteredData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
    const totalPages = Math.ceil(filteredData.length / PAGE_SIZE)

    return (
        <div className='w-full h-full p-2 sm:px-4 lg:px-6 lg:py-2 flex flex-col gap-4 lg:gap-10'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-[1.6em] font-bold text-[#491217]'>Activation and Top-Up</h2>      
                <div className='flex items-center justify-center gap-4'>
                    <button className='px-10 py-3 border border-[#491217] bg-[#491217] text-white rounded-[5px] text-[.9em]'>
                        Add
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col gap-3">
                <button className="w-full flex items-center justify-end gap-2 mb-1">
                    <FilterIcon/>
                    <span className='font-bold'>Filter</span>                   
                </button>

                <div className='w-[950px] overflow-x-scroll lg:overflow-hidden lg:w-full mx-auto'>
                
                    <div className="bg-yellow-300 px-2 text-[.7em] text-[#491217] font-semibold py-2 grid grid-cols-4 gap-2">
                        <div className='flex w-full justify-center'>Title</div>
                        <div className='flex flex-col w-full items-center justify-center'>
                            <span>Type</span>
                            <span>(Activation/Top-up)</span>
                        </div>
                        <div className='flex w-full justify-center'>Description</div>
                        <div className='flex w-full justify-center'>Actions</div>
                    </div>

                    {paginatedData.map((user, index) => (
                        <div key={index} className="grid grid-cols-4 gap-2 px-2 py-2 border-b text-[.8em]">
                            <div className='flex w-full justify-center'>{user.title}</div>
                            <div className='flex w-full justify-center'>{user.type}</div>
                            <div className='flex w-full justify-center'>{user.amount} Credit</div>
                            <div className='flex justify-center gap-2'>
                                <button className="text-[#491217]">
                                    <Eye/>
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

export default AandP