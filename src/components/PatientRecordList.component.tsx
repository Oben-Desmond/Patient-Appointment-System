import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { PatientRecord } from '../types'
import PatientRecordItem from './PatientRecordItem.component'
import { IoFilterSharp } from "react-icons/io5"

const PatientRecordList: React.FC<{ list: PatientRecord[], updateList: (list: PatientRecord[]) => void }> = ({ list }) => {

    const filters = ['name', 'code', 'age', 'address', 'phone', 'Appt. Date', 'Record Date', 'status']




    return (
        <div  >
            <div className="filter-header w-full overflow-scroll xl:overflow-auto py-4 md:py-0">
                <div className=''>
                    <div className="grid grid-cols-8 gap-8 w-[170vh] lg:w-full"  >
                        {filters.map((filter, index) => {


                            return <div key={index} className="p-3 col-span-1  font-bold capitalize rounded-lg text-black bg-white inline-block text-sm">
                                {filter}
                                <div className="inline-block float-right">
                                    <FaChevronUp className='text-[10px]' />
                                    <FaChevronDown className='text-[10px]' />
                                </div>
                                <div className="inline-block mt-1 float-right mr-2">
                                    {
                                        (filter == "age" || filter == "status") && <IoFilterSharp className='text-[16px]' />}
                                </div>


                            </div>
                        })}
                    </div>
                </div>
                <div className='py-4  w-[170vh] lg:w-full' >
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