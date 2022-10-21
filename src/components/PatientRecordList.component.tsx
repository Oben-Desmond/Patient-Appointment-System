import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { PatientRecord } from '../types'
import PatientRecordItem from './PatientRecordItem.component'
import { IoFilterSharp } from "react-icons/io5"

const PatientRecordList: React.FC<{ list: PatientRecord[] }> = ({ list }) => {

    const filters = ['name', 'code', 'age', 'address', 'phone', 'status']


    return (
        <div  >
            <div className="filter-header">
                <div className='w-full overflow-scroll md:overflow-auto py-4 md:py-0'>
                    <div className="grid grid-cols-6 gap-8 " style={{ width: '130vh' }}>
                        {filters.map((filter, index) => <div key={index} className="p-3 col-span-1  font-bold capitalize rounded-lg text-black bg-white inline-block text-sm">
                            {filter}
                            <div className="inline-block float-right">
                                <FaChevronUp className='text-[10px]' />
                                <FaChevronDown className='text-[10px]' />
                            </div>
                            <div className="inline-block mt-1 float-right mr-2">
                                {
                                    (filter == "age" || filter == "status") && <IoFilterSharp className='text-[16px]' />}
                            </div>


                        </div>)}
                    </div>
                </div>
                <div className='py-4'>
                    {
                        list.map((record, index) => {
                            return (
                                <PatientRecordItem record={record} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PatientRecordList