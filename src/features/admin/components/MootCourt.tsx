'use client'
import React, { useState } from 'react';
import { Search, Trash2 } from 'lucide-react'
import { DownIcon, EditIcon, UpIcon } from '@app/icons';

interface UserData {
    postIcon: string
    title: string
    description: string
    datePosted: string
    category: string
    dateOfEvent: string
    reminder: string
}

const data: UserData[] = [
    { 
        postIcon: "https://images.unsplash.com/photo-1611162618828-bc409f073cbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGljb258ZW58MHx8MHx8fDA%3D", 
        title: "100 things about Abuja law",
        description: "Lorem ipsum dolor sit amet",
        datePosted: "June 12, 2024",
        category: "Moot Court",
        dateOfEvent: "June 12, 2024",
        reminder: "Set reminder",
    },
]


const MootCourt = () => {
    const PAGE_SIZE = 10;
    const [currentPage, setCurrentPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredData, setFilteredData] = useState(data)
  
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const term = e.target.value.toLowerCase()
      setSearchTerm(term)
      setFilteredData(
        data.filter(user =>
          user.title.toLowerCase().includes(term) ||
          user.category.toLowerCase().includes(term) ||
          user.datePosted.toLowerCase().includes(term)
        )
      )
      setCurrentPage(1) 
    }
  
    const paginatedData = filteredData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
    const totalPages = Math.ceil(filteredData.length / PAGE_SIZE)

    return (
        <div className='w-full h-full p-2 sm:px-4 lg:px-6 lg:py-2 flex flex-col gap-4 lg:gap-10'>
            <div className='w-full flex flex-row justify-between md:items-center'>
                <h2 className='text-[1.3em] md:text-[1.6em] font-bold text-[#491217]'>Moot Court</h2>
                
                <div className='flex items-center md:justify-center gap-4'>
                    <button className='px-3 md:px-5 py-2 md:py-3 hover:underline text-[#491217] font-medium text-[.9em]'>
                        Export
                    </button>

                    <button className='px-3 md:px-5 py-2 md:py-3 border border-[#491217] bg-[#491217] text-white rounded-[5px] text-[.9em]'>
                        Add New Event
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col gap-6">
                <div className="flex items-center justify-center mb-4">
                    <button
                    onClick={() => {
                        setSearchTerm("")
                        setFilteredData(data)
                    }}
                    className="ml-2 w-[150px] px-4 py-3 text-yellow-300 bg-[#491217] text-[.9em] font-semibold rounded-l-[8px]"
                    >
                        Add Filter
                    </button>

                    <div className='px-2 py-1 w-full md:w-1/2 flex items-center gap-2 overflow-hidden rounded-r-[8px] bg-yellow-300'>
                        <Search className='text-[#491217] w-6 h-6'/>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearch}
                            placeholder="Search for a video"
                            className="w-full px-3 py-2 border-none outline-none bg-transparent text-[#491217] placeholder:text-[#491217] rounded-md text-[.9em]"
                        />
                    </div>  
                </div>

                <div className='w-full overflow-x-scroll'>
                    <div className='min-w-[550px] w-[950px] overflow-x-scroll lg:overflow-hidden lg:w-full mx-auto'>
                    
                        <div className="bg-yellow-300 px-2 text-[.7em] text-[#491217] font-semibold py-2 grid grid-cols-8 gap-2">
                            <div>Post Icon</div>
                            <div>Title</div>
                            <div>Description</div>
                            <div>Date Posted</div>
                            <div>Category</div>
                            <div>Date of Event</div>
                            <div>Reminder</div>
                            <div>Actions</div>
                        </div>

                        {paginatedData.map((user, index) => (
                            <div key={index} className="grid grid-cols-8 gap-2 px-2 py-2 border-b text-[.8em]">
                                <div className="text-[#491217] font-medium w-8 h-8 overflow-hidden">
                                    <img src={user.postIcon} alt='icon' className='w-full h-full object-cover'/>
                                </div>
                                <div>{user.title}</div>
                                <div>{user.description}</div>
                                <div>{user.datePosted}</div>
                                <div>{user.category}</div>
                                <div>{user.dateOfEvent}</div>
                                <div>{user.reminder}</div>
                                <div className='flex justify-center gap-2'>
                                    <button className="text-[#491217]">
                                        <EditIcon size='mid'/>
                                    </button>
                                    <button className="text-[#491217]">
                                        <DownIcon/>
                                    </button>
                                    <button className="text-[#491217]">
                                        <UpIcon size='mid'/>
                                    </button>
                                    <button className="text-[#491217]">
                                        <Trash2 className='w-5 h-5'/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>   
                </div>    
                
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
    )
}

export default MootCourt