import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { PatientRecord } from '../types'
import PatientRecordItem from './PatientRecordItem.component'
import { IoFilterSharp } from "react-icons/io5"
import FilterHeaderButton, { FilterProp } from './FilterHeaderButton.component'

const PatientRecordList: React.FC<{ list: PatientRecord[], updateList: (list: PatientRecord[]) => void }> = ({ list, updateList }) => {

    const filters: FilterProp[] = [{ id: 'name', value: 'name' }, { id: 'code', value: 'code' }, { id: 'age', value: 'age' }, { id: 'address', value: 'address' }, { id: 'phone', value: 'phone' }, { id: 'app_date', value: 'Appt. Date' }, { id: 'req_date', value: 'Record Date' }, { id: 'status', value: 'status' }]


    return (
        <div  >
            <div className="filter-header w-full overflow-scroll xl:overflow-auto py-4 md:py-0">
                <div className=''>
                    <div className="grid grid-cols-8 gap-8 w-[170vh] lg:w-full"  >
                        {filters.map((filter, index) => {
                            return <FilterHeaderButton list={list} key={index} filter={filter} updateList={(list) => { updateList(list); console.log(list) }} />
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