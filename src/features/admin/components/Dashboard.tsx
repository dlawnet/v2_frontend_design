'use client'
import React from 'react'
import { Filter, Search } from 'lucide-react'
import { Input } from '@app/components/base/input'
import { BRound, FilterIcon, StudentYellow, TopUpYellow, ViewsYellow, YRound } from '@app/icons'
import { LineBar } from './Graphs'
import NewStudentsTable from './NewStudentsTable'

const Dashboard = () => {
  const dash = [
    {
      title: 'Students',
      value: "500K",
      icon: <StudentYellow/>
    },
    {
      title: 'Top Up',
      value: "25K",
      icon: <TopUpYellow/>
    },
    {
      title: 'Total Views',
      value: "425M",
      icon: <ViewsYellow/>
    },
    {
      title: 'Total Traffic',
      value: "1425",
      icon: <ViewsYellow/>
    },
  ]

  return (
    <div className='w-full h-full p-2 sm:px-4 lg:px-6 lg:py-2 flex flex-col gap-4 lg:gap-6'>
      <div className='w-full flex flex-col md:flex-row gap-2 justify-between md:items-center'>
        <h2 className='text-[1.6em] font-bold text-[#491217]'>Dashboard</h2>
        <div className='px-4 lg:px-6 py-2 flex items-center gap-2 border overflow-hidden rounded-full bg-[#FDDF5A]'>
          <Search className='w-7 h-7 text-[#491217]'/>
          <Input
            type='text'
            placeholder='Search here...'
            className='border-none min-w-[200px] px-2 py-2 outline-none shadow-none text-[#491217] text-sm'
          />
        </div>
      </div>

      <div className='w-full bg-[#FDDF5A] p-4 md:p-10 rounded-2xl grid grid-cols-2 gap-4 md:gap-2 md:grid-cols-4'>
        {dash.map((link, index) => (
          <div key={index} className='flex md:justify-center md:items-center gap-2 md:gap-4'>
            <div className='w-16 h-16 flex justify-center items-center rounded-full bg-[#491217]'>
              {link.icon}
            </div>
            <div className='flex flex-col leading-7'>
              <span className='text-[#491217] text-[.9em] font-medium'>{link.title}</span>
              <span className='text-[#491217] text-[2em] font-bold'>{link.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full flex flex-col gap-2 md:gap-4'>
          <div className="flex w-full items-center justify-between">
            <h2 className='text-[1.2em] font-bold text-[#491217]'>Top-up & Activation</h2>

            <div className='flex gap-4 items-center'>
              <div className='flex flex-col'>
                <div className='flex justify-center items-center gap-1'>
                  <YRound/>
                  <span className='text-[#491217] text-[.7em]'>This week</span>
                </div>
                <span className='text-[#491217] text-[1em] text-center font-bold'>1.245</span>
              </div>

              <div className='flex flex-col'>
                <div className='flex justify-center items-center gap-1'>
                  <BRound/>
                  <span className='text-[#491217] text-[.7em]'>Last week</span>
                </div>
                <span className='text-[#491217] text-[1em] text-center font-bold'>1.345</span>
              </div>
            </div>
          </div>

          <div className='w-full overflow-x-scroll pb-4 md:pb-0'>
            <div className='min-w-[500px]'>
              <LineBar/>
            </div>
          </div>
      </div>

      <div className='w-full flex flex-col gap-2 md:gap-4 mt-4'>
          <div className="flex w-full items-center justify-between">
            <h2 className='text-[1.2em] font-bold text-[#491217]'>New Students</h2>
            <div className='flex items-center justify-center gap-2'>
              <FilterIcon/>
              <span className='text-[1em] font-bold text-[#491217]'>Filter</span>
            </div>
          </div>

          <div className='w-full overflow-x-scroll pb-4 md:pb-0'>
            <div className='min-w-[550px]'>
              <NewStudentsTable/>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default Dashboard