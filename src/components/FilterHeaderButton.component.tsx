import React, { useRef, useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { IoFilterSharp } from 'react-icons/io5'
import { PatientRecord } from '../types'


export interface FilterProp {
    id: 'name' | 'code' | 'age' | 'address' | 'phone' | 'status' | 'req_date' | 'app_date',
    value: string
}
const FilterHeaderButton: React.FC<{ filter: FilterProp, list: PatientRecord[], updateList: (list: PatientRecord[]) => void }> = ({ filter, list, updateList }) => {


    const [sortAsc, setSortAsc] = useState(true)

    const ageRange = ['0-5', '6-10', '11-16', '17-25', '26-30', '30-40', '50-above']
    const status = ['pending', 'missed', 'rescheduled', 'passed']


    const selectAgeRef = useRef<HTMLSelectElement>(null)
    const statusRef = useRef<HTMLSelectElement>(null)

    function sortList(directionAsc: boolean) {
        const sortedList = list;
        directionAsc && sortedList.sort((recordA, recordB) => {
            return (recordA[filter.id] >= recordB[filter.id] ? 1 : -1)
        })

        !directionAsc && sortedList.sort((recordA, recordB) => {

            return (recordA[filter.id] <= recordB[filter.id] ? 1 : -1)
        });


        setSortAsc(directionAsc)
        updateList(sortedList)
    }

    return (
        <div className="p-3 col-span-1  font-bold capitalize rounded-lg text-black bg-white inline-block text-sm">
            <div >
                {filter.value}
                <div className="inline-block float-right" >
                    <FaChevronUp className={`text-[10px] cursor-pointer ${!sortAsc ? 'text-black' : 'text-gray-500'}`} onClick={() => sortList(true)} />
                    <FaChevronDown className={`text-[10px] cursor-pointer ${sortAsc ? 'text-black' : 'text-gray-500'}`} onClick={() => sortList(false)} />
                </div>
                <div className="inline-block mt-1 float-right mr-2">
                    {(filter.id == "age") && <IoFilterSharp onClick={() => selectAgeRef.current?.click()} className='text-[16px]' />}
                    {
                        filter.id == "status" && <IoFilterSharp onClick={() => statusRef.current?.click()} className='text-[16px]' />
                    }
                </div>



            </div>
            {/* {filter == "age" && <select ref={selectAgeRef} className='' >
                {
                    ageRange.map((age, index) => {
                        return (<option value={age} >{age}</option>)
                    })
                }
            </select>}

            {filter == "status" && <select ref={statusRef} className=''>
                {
                    status.map((stat, index) => {
                        return (<option value={stat} >{stat}</option>)
                    })
                }
            </select>} */}
        </div>
    )
}

export default FilterHeaderButton