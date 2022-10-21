import React from 'react'
import { PatientRecord } from '../types'

const PatientRecordItem: React.FC<{ record: PatientRecord }> = ({ record }) => {
    let color: string | null = null

    switch (record.status) {
        case 'missed': color = 'danger';
            break;
        case 'passed': color = 'success';
            break;
        case 'rescheduled': color = 'warning';
            break;

        default: color = null;
            break;
    }


    return (
        <div className="grid hover:bg-gray-50 active:opacity-80 cursor-pointer gap-0 md:gap-9 grid-cols-6 mb-3 text-gray-500 font-semibold p-3 px-3 bg-white text-sm rounded-lg">
            <div className='text-gray-900  col-span-2 md:col-span-1'>{record.name}</div>
            <div>{record.code}</div>
            <div>{record.age}</div>
            <div>{record.address}</div>
            <div className='overflow-hidden'>{record.phone}</div>
            <div className=' overflow-visible md:overflow-hidden mt-3 md:mt-0'>
                {color && <span className={`ml-2 p-1 px-2 font-semibold rounded-lg max-w-full text-sm text-${color}-dark bg-${color}-tint`}>
                    {record.status}
                </span>}
                {
                    !color && <span className={`ml-2 p-2 font-semibold max-w-full text-sm  rounded-lg text-sky-800 bg-sky-100`}>
                        {record.status}
                    </span>
                }
            </div>
        </div>
    )
}

export default PatientRecordItem