'use client'
import React from 'react'
import { DataTable } from '@app/components/DataTable'
import { ColumnDef } from "@tanstack/react-table"

interface Order {
  image: string
  name: string
  progress: number
  status: string
  gender: string
  school: string
}

const columns: ColumnDef<Order>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => {
        return (
            <div className='flex gap-1 items-center'>
                <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                    <img 
                        src={row.original.image} 
                        alt="image" 
                        width={100}
                        height={100}
                        className='object-cover w-full h-full'
                    />
                </div>
                <div>
                    <span className='font-Poppins text-[1em] font-semibold text-gray-700'>
                        {row.getValue("name")}
                    </span>
                </div>
            </div>
        )
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <div className={`font-medium px-3 py-1 rounded-md text-xs w-fit ${
            status == "Verified" ? "bg-yellow-300 p-1" :
            status == "Pending" ? " bg-transparent p-1" :
            "text-gray-500"
          }`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        )
      },
    },
    {
        accessorKey: "progress",
        header: "Progress",
        cell: ({ row }) => {
          const progress = row.getValue("progress") as number;
          return (
            <div className='w-[100px] flex gap-2 items-center'>
                <div className="w-full flex-grow bg-yellow-300 rounded-full h-[5px]">
                    <div
                        className="w-full h-full rounded-full"
                        style={{
                        width: `${progress}%`,
                        backgroundColor: '#491217',
                        }}
                    />
                </div>
                <span className='text-[#491217] text-[1em]'>{row.getValue("progress")}%</span>
            </div>
          );
        },
    },
    {
        accessorKey: "gender",
        header: "Gender",
    },
    {
      accessorKey: "school",
      header: "Law School/University",
    },
]
  

const NewStudentsTable = () => {

//   const [data, setData] = React.useState<Order[]>([])

//   React.useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/api/orders')
//       const orders = await response.json()
//       setData(orders)
//     }

//     fetchData()
//   }, [])

// the code up top will be for the api...i dont want to scatter this part again.

const data: Order[] = [
    { progress: 75, gender: 'Male', name: "John Doe", status: "Verified", school: "Law School",  image: 'https://randomuser.me/api/portraits/men/6.jpg',   },
    { progress: 50, gender: 'Female', name: "Henry Taylor", status: "Pending", school: "Law School",  image: 'https://randomuser.me/api/portraits/men/9.jpg',   },
    { progress: 30, gender: 'Male', name: "Iris Clark", status: "Verified", school: "Law School",  image: 'https://randomuser.me/api/portraits/women/7.jpg',   },
    { progress: 90, gender: 'Male', name: "John Doe", status: "Verified", school: "Law School",  image: 'https://randomuser.me/api/portraits/men/6.jpg',   },
    { progress: 60, gender: 'Female', name: "Henry Taylor", status: "Pending", school: "Law School",  image: 'https://randomuser.me/api/portraits/men/9.jpg',   },
    { progress: 40, gender: 'Male', name: "Iris Clark", status: "Verified", school: "Law School",  image: 'https://randomuser.me/api/portraits/women/7.jpg',   },
    { progress: 80, gender: 'Male', name: "John Doe", status: "Verified", school: "Law School",  image: 'https://randomuser.me/api/portraits/men/6.jpg',   },
    { progress: 25, gender: 'Female', name: "Henry Taylor", status: "Pending", school: "Law School", image: 'https://randomuser.me/api/portraits/men/9.jpg',   },
    { progress: 95, gender: 'Male', name: "Iris Clark", status: "Verified", school: "Law School", image: 'https://randomuser.me/api/portraits/women/7.jpg',   },
]

  return (
    <div>
      <DataTable columns={columns} data={data} searchKey="name"/>
    </div>
  )
}

export default NewStudentsTable;