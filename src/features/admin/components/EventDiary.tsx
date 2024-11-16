'use client'
import React from 'react'
import { EllipsisVertical, Search } from 'lucide-react'
import { Input } from '@app/components/base/input'
import { LocateIcon, MailIcon, PhoneIcon } from '@app/icons'

const EventDiary = () => {
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
    <div className='w-full h-full p-2 sm:px-4 lg:px-6 lg:py-2 flex flex-col gap-4 lg:gap-6'>
        <div className='w-full flex justify-between items-center'>
            <h2 className='text-[1.6em] font-bold text-[#491217]'>Event Diary</h2>
            <div className='px-4 lg:px-6 py-2 flex items-center gap-2 border overflow-hidden rounded-full bg-[#FDDF5A]'>
                <Search className='w-7 h-7 text-[#491217]'/>
                <Input
                type='text'
                placeholder='Search here...'
                className='border-none min-w-[200px] px-2 py-2 outline-none shadow-none text-[#491217] text-sm'
                />
            </div>
        </div>

        <div className='relative w-full bg-[#FDDF5A] p-4 md:p-14 rounded-t-2xl flex justify-between items-center'>
            <div className='absolute left-10 top-5'>
                <div className='bg-[#491217] border-8 border-white rounded-full w-40 h-40'></div>
            </div>
            <div className='absolute right-10 -bottom-10 cursor-pointer'>
                <EllipsisVertical className='text-[#491217] rotate-90 w-6 h-6'/>
            </div>
        </div>

        <div className='mt-14 flex flex-col gap-8 w-full'>
            <div className='flex flex-col gap-2'>
                <span className='text-[1.5em] text-[#491217] font-semibold'>Abuja Law School</span>
                <span className='text-[1em] text-[#491217]'>School</span>
            </div>

            <div className='w-full flex gap-4 md:gap-10 lg:gap-20 items-center'>
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
    </div>
  )
}

export default EventDiary