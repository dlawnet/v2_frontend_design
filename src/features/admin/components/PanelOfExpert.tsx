'use client'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@app/components/base/dropdown-menu"
import { Search } from 'lucide-react'

interface ExpertData {
  id: number
  subject: string
  studentName: string
  ReqMsg: string
  attachment: string
  assignedTo: string
  price: string
  status: string
  duration: string
}

const data: ExpertData[] = [
  { 
    id: 1, 
    subject: "Test Project", 
    studentName: "Peter Johnson", 
    ReqMsg: "The 25 Legislative rule of law with its conditions.", 
    attachment: "Doc1.pdf, Ass.docx", 
    assignedTo: "Barr Leye Akintunde", 
    price: "12,00 credits", 
    status: "Pending",
    duration: "<5days" 
  },
]

const PAGE_SIZE = 10;

const PanelOfExpert = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredData, setFilteredData] = useState(data)

  const paginatedData = filteredData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE)

  return (
    <div className='w-full h-full p-2 sm:px-4 lg:px-6 lg:py-3 flex flex-col gap-4 lg:gap-6'>
        <div className='w-full flex justify-between items-center'>
            <h2 className='text-[1.2em] md:text-[1.6em] font-bold text-[#491217]'>Panel Of Experts</h2>
            
            <div className='flex items-center justify-center gap-4'>
              <button className='px-3 md:px-5 py-1 md:py-3 hover:underline text-[#491217] rounded-[5px] text-[.7em] md:text-[1em]'>
                Create Experts
              </button>
            </div>
        </div>

        <div className="w-full md:p-4 overflow-x-scroll">
          <div className='min-w-[550px] w-[950px] overflow-x-scroll lg:overflow-hidden lg:w-full mx-auto'>
          
            <div className="bg-yellow-300 px-2 text-[.7em] text-[#491217] font-medium items-center py-2 grid grid-cols-10 gap-2">
              <div>ID</div>
              <div>Subject</div>
              <div>Student Name</div>
              <div>Request Message</div>
              <div>Attachment</div>
              <div>Assigned to</div>
              <div>Price</div>
              <div>Status</div>
              <div>Duration</div>
              <div>Actions</div>
            </div>

            {paginatedData.map((user, index) => (
              <div key={index} className="grid grid-cols-10 gap-2 px-2 py-2 border-b text-[.8em]">
                <div className="text-[#491217] font-medium">#{user.id}</div>
                <div>{user.subject}</div>
                <div>{user.studentName}</div>
                <div>{user.ReqMsg}</div>
                <div>{user.attachment}</div>
                <div>{user.assignedTo}</div>
                <div>{user.price}</div>
                <div>{user.status}</div>
                <div>{user.duration}</div>
                <div className=''>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer px-2">
                      <span>•••</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='bg-white'>
                      <DropdownMenuCheckboxItem>View Profile</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Edit</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Suspend</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}

          </div>   
        </div>

        <div className="flex justify-center items-center space-x-2">
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
  )
}

export default PanelOfExpert