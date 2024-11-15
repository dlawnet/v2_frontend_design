'use client'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@app/components/base/dropdown-menu"

interface UserData {
  status: string
  username: string
  firstName: string
  lastName: string
  email: string
  phone: string
  createdAt: string
}

const data: UserData[] = [
  { status: "Verified", username: "MTH1", firstName: "Peter", lastName: "Johnson", email: "PeterJohn@gmail.com", phone: "+2348124412241", createdAt: "12:30 PM" },
  // Add more data here
]

const PAGE_SIZE = 10;

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  // Filter data based on the search term
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    setFilteredData(
      data.filter(user =>
        user.firstName.toLowerCase().includes(term) ||
        user.lastName.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
      )
    )
    setCurrentPage(1) // Reset to the first page after filtering
  }

  const paginatedData = filteredData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  const totalPages = Math.ceil(filteredData.length / PAGE_SIZE)

  return (
    <div className='w-full h-full p-2 sm:px-4 lg:px-6 lg:py-3 flex flex-col gap-4 lg:gap-6'>
        <div className='w-full flex justify-between items-center'>
            <h2 className='text-[1.6em] font-bold text-[#491217]'>Students</h2>
            
            <div className='flex items-center justify-center gap-4'>
              <button className='px-5 py-3 hover:underline text-[#491217] rounded-[5px] text-[.9em]'>
                Export CSV
              </button>

              <button className='px-5 py-3 border border-[#491217] bg-[#491217] text-white rounded-[5px] text-[.9em]'>
                Add Student
              </button>
            </div>
        </div>

        <div className="w-full p-4">
          <div className="flex items-center justify-between mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by Name or Email"
              className="px-3 py-2 border border-gray-300 rounded-md w-1/2"
            />
            <button
              onClick={() => {
                setSearchTerm("")
                setFilteredData(data)
              }}
              className="ml-2 px-4 py-2 bg-yellow-300 text-[#491217] font-semibold rounded-md"
            >
              Reset Filter
            </button>
          </div>

          <div className='w-[950px] overflow-x-scroll lg:w-full mx-auto'>
          
            <div className="bg-yellow-300 text-[.8em] text-[#491217] font-semibold py-2 grid grid-cols-9 gap-2">
              <div>Status</div>
              <div>Username</div>
              <div>First Name</div>
              <div>Last Name</div>
              <div className='col-span-2'>Email address</div>
              <div>Phone No</div>
              <div>Created At</div>
              <div>Actions</div>
            </div>

            {paginatedData.map((user, index) => (
              <div key={index} className="grid grid-cols-9 gap-2 py-2 border-b text-[.8em]">
                <div className="text-[#491217] font-medium">{user.status}</div>
                <div>{user.username}</div>
                <div>{user.firstName}</div>
                <div>{user.lastName}</div>
                <div className='col-span-2'>{user.email}</div>
                <div>{user.phone}</div>
                <div className="flex items-center justify-between">
                  <span>{user.createdAt}</span>
                </div>
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

export default Users