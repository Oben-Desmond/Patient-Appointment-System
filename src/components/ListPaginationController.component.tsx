import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { PatientRecord } from '../types'

const ListPaginationController: React.FC<{ list: PatientRecord[] }> = ({ list }) => {
    return (
        <div className='bg-white rounded-lg inline-block p-2  mx-auto'>
            <button className="p-1 px-2">
                <FaChevronLeft className='inline-block text-[10px]' />
            </button>
            <button className="p-1 px-2 text-gray-500 text-sm" >
                1
            </button>
            <button className="p-1 px-2 text-gray-500 text-sm" >
                2
            </button>
            <button className="p-1 px-2 text-gray-500 text-sm" >
                3
            </button>
            <button className="p-1 px-2 relative text-black font-black text-sm" >
                <span className='bottom-1 absolute'>
                    ...
                </span>
            </button>
            <button className="p-1 ml-2 px-2 text-gray-500 text-sm" >
                8
            </button>
            <button className="p-1 px-2 text-gray-500 text-sm" >
                9
            </button>
            <button className="p-1 px-2 text-gray-500 text-sm" >
                10
            </button>
            <button className="p-1 px-2">
                <FaChevronRight className='inline-block text-[10px]' />
            </button>
        </div>
    )
}

export default ListPaginationController