import React from 'react'

const MootCourt = () => {

    return (
        <div className='w-full h-full p-2 sm:px-4 lg:px-6 lg:py-2 flex flex-col gap-4 lg:gap-10'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-[1.6em] font-bold text-[#491217]'>Moot Court</h2>
                
                <div className='flex items-center justify-center gap-4'>
                    <button className='px-5 py-3 hover:underline text-[#491217] rounded-[5px] text-[1em]'>
                        Create Experts
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MootCourt