import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { PatientRecord } from '../types'

const PatientRecordList: React.FC<{ list: PatientRecord[] }> = ({ list }) => {

    const filters = ['name', 'code', 'age', 'address', 'phone', 'status']


    return (
        <div  >
            <div className="filter-header">
                <div className="grid grid-cols-6 gap-8">
                    {filters.map((filter, index) => <div key={index} className="p-3 capitalize rounded-lg text-black bg-white inline-block text-sm">
                        {filter}
                        <div className="inline-block float-right">
                            <FaChevronUp className='text-[10px]' />
                            <FaChevronDown className='text-[10px]' />
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default PatientRecordList