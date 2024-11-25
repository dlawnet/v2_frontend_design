'use client'
import React, { useState } from 'react'
import { EllipsisVertical, Search, Trash2 } from 'lucide-react'
import { Input } from '@app/components/base/input'
import { LocateIcon, MailIcon, PhoneIcon } from '@app/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@app/components/base/dropdown-menu"

interface PostData {
    postIcon: string
    title: string
    description: string
    datePosted: string
    relevantEvent: string
    dateOfEvent: string
}

interface MemberData {
    position: string
    name: string
    description: string
    tenureStart: string
    tenureEnd: string
    tenureSession: string
}

const mdata: MemberData[] = [
    { position: "President", name: "Ayodeji Awodele", description: "President of Law society", tenureStart: "June 12, 2024", tenureEnd: "June 12, 2025", tenureSession: "24/25" },
    { position: "Vice-President", name: "Bakare Deborah", description: "Vice-president of Law Society", tenureStart: "June 12, 2024", tenureEnd: "June 12, 2025", tenureSession: "24/25" },
    { position: "President", name: "Ayodeji Awodele", description: "President of Law society", tenureStart: "June 12, 2024", tenureEnd: "June 12, 2025", tenureSession: "24/25" },
    { position: "Vice-President", name: "Bakare Deborah", description: "Vice-president of Law Society", tenureStart: "June 12, 2024", tenureEnd: "June 12, 2025", tenureSession: "24/25" },
]
  
const data: PostData[] = [
    { 
        postIcon: "https://images.unsplash.com/photo-1611162618828-bc409f073cbf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGljb258ZW58MHx8MHx8fDA%3D", 
        title: "Title of the post",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        datePosted: "June 12, 2024",
        relevantEvent: "Event 1",
        dateOfEvent: "June 12, 2024"
    },
]

const EventDiary = () => {
    const ITEMS_PER_PAGE = 3;
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

    const handleSeeMore = () => {
        setVisibleCount(prevCount => prevCount + ITEMS_PER_PAGE)
    }

    const PAGE_SIZE = 10;
    const [currentPage, setCurrentPage] = useState(1)
    const [filteredData, setFilteredData] = useState(data)

    const paginatedData = filteredData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
    const totalPages = Math.ceil(filteredData.length / PAGE_SIZE)

    const details =[
        {
            title: "Address",
            icon: <LocateIcon/>,
            info: "Abuja, Nigeria.",
        },
        {
            title: "Phone",
            icon: <PhoneIcon/>,
            info: "+012 345 6789 0",
        },
        {
            title: "Email",
            icon: <MailIcon/>,
            info: "hope@mail.com",
        },
    ]
    
  return (
    <div className='w-full h-full p-2 sm:px-4 lg:px-6 lg:py-2 flex flex-col gap-4 lg:gap-10'>
        <div className='w-full flex flex-col md:flex-row gap-2 justify-between md:items-center'>
            <h2 className='text-[1.4em] md:text-[1.6em] font-bold text-[#491217]'>Event Diary</h2>
            <div className='px-4 lg:px-6 py-2 flex items-center gap-2 border overflow-hidden rounded-full bg-[#FDDF5A]'>
                <Search className='w-7 h-7 text-[#491217]'/>
                <Input
                type='text'
                placeholder='Search here...'
                className='border-none min-w-[200px] px-2 py-1 md:py-2 outline-none shadow-none text-[#491217] text-sm'
                />
            </div>
        </div>

        <div className='relative w-full bg-[#FDDF5A] p-14 rounded-t-2xl flex justify-between items-center'>
            <div className='absolute left-5 md:left-10 top-5'>
                <div className='bg-[#491217] border-8 border-white rounded-full w-40 h-40'></div>
            </div>
            <div className='absolute right-10 -bottom-10 cursor-pointer'>
                <EllipsisVertical className='text-[#491217] rotate-90 w-6 h-6'/>
            </div>
        </div>

        <div className='mt-14 px-2 md:px-4 flex flex-col gap-8 w-full'>
            <div className='flex flex-col gap-1 md:gap-2'>
                <span className='text-[1.5em] text-[#491217] font-semibold'>Abuja Law School</span>
                <span className='text-[1em] text-[#491217]'>School</span>
            </div>

            <div className='w-full flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-20 md:items-center'>
                {details.map((detail, index) => (
                    <div
                    key={index}
                    className='flex flex-col gap-1'
                    >
                        <span className='text-[1em] text-[#491217] font-semibold'>{detail.title}:</span>
                        <div className='flex items-center gap-2'>
                            <div className='bg-yellow-300 w-8 h-8 rounded-full flex justify-center items-center'>{detail.icon}</div>
                            <span className='text-[1em] text-[#491217] font-semibold'>{detail.info}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <div className='w-full flex flex-col gap-2 md:gap-4'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-[1.3em] font-bold text-[#491217]'>Executives</h2>
                
                <div className='flex items-center justify-center gap-4'>
                    <button className='px-5 py-3 hover:underline text-[#491217] font-semibold rounded-[5px] text-[1em]'>
                        Assign Executives
                    </button>
                </div>
            </div>
            
            <div className='w-full overflow-x-scroll'>
                <div className="min-w-[550px] w-[950px] overflow-x-scroll lg:overflow-hidden lg:w-full mx-auto">
                    <div className="bg-yellow-300 px-2 text-[.7em] text-[#491217] font-semibold items-center py-2 grid grid-cols-8 gap-2">
                        <div className="col-span-1">Position</div>
                        <div className="col-span-1">Name</div>
                        <div className="col-span-2">Description</div>
                        <div className="col-span-1">Tenure Start</div>
                        <div className="col-span-1">Tenure End</div>
                        <div className="col-span-1">Tenure Session</div>
                        <div className="col-span-1">Actions</div>
                    </div>

                    {mdata.slice(0, visibleCount).map((member, index) => (
                        <div key={index} className="grid grid-cols-8 gap-2 px-2 py-2 border-b text-[.8em]">
                            <div className="col-span-1 font-bold">{member?.position}</div>
                            <div className="col-span-1">{member?.name}</div>
                            <div className="col-span-2">{member?.description}</div>
                            <div className="col-span-1">{member?.tenureStart}</div>
                            <div className="col-span-1">{member?.tenureEnd}</div>
                            <div className="col-span-1">{member?.tenureSession}</div>
                            <div className="col-span-1 flex">
                                <button className="text-[#491217]">
                                    <Trash2/>
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {visibleCount < mdata.length && (
                <div className="flex justify-center mt-4">
                    <button
                    onClick={handleSeeMore}
                    className="px-4 py-2 text-[#491217] font-semibold rounded-md"
                    >
                        See More
                    </button>
                </div>
            )}
        </div>

        <div className="w-full flex flex-col gap-2 md:gap-4">
            <div className='w-full flex justify-between items-center'>
                <h2 className=' text-[1em] md:text-[1.3em] font-bold text-[#491217]'>Posts & Events Created</h2>
                
                <div className='flex items-center justify-center gap-4'>
                    <button className='px-3 md:px-5 py-1 md:py-3 hover:underline text-[#491217] font-semibold rounded-[5px] text-[1em]'>
                        Create Post
                    </button>
                </div>
            </div>
            
            <div className='w-full overflow-x-scroll'>
                <div className="min-w-[550px] w-[950px] overflow-x-scroll lg:overflow-hidden lg:w-full mx-auto">
                    <div className="bg-yellow-300 px-2 text-[.7em] text-[#491217] font-semibold items-center py-2 grid grid-cols-7 gap-2">
                        <div className="col-span-1">Post Icon</div>
                        <div className="col-span-1">Title</div>
                        <div className="col-span-1">Description</div>
                        <div className="col-span-1">Date Posted</div>
                        <div className="col-span-1">Relevant Event</div>
                        <div className="col-span-1">Date of Event</div>
                        <div className="col-span-1">Actions</div>
                    </div>

                    {paginatedData.map((user, index) => (
                        <div key={index} className="grid grid-cols-7 gap-2 px-2 py-2 border-b text-[.8em]">
                            <div className="text-[#491217] font-medium w-8 h-8 overflow-hidden">
                                <img src={user.postIcon} alt='icon' className='w-full h-full object-cover'/>
                            </div>
                            <div>{user?.title}</div>
                            <div>{user?.description}</div>
                            <div>{user?.datePosted}</div>
                            <div>{user?.relevantEvent}</div>
                            <div>{user?.dateOfEvent}</div>
                            <div className=''>
                                <button className="text-[#491217]">
                                    <Trash2/>
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

export default EventDiary