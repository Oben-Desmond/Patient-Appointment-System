import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { PatientRecord } from '../types'
import PatientRecordItem from './PatientRecordItem.component'
import { IoFilterSharp } from "react-icons/io5"
import FilterHeaderButton, { FilterProp } from './FilterHeaderButton.component'
import { PaginatedList } from 'react-paginated-list'

import './style/PatientRecordList.module.css'

const PatientRecordList: React.FC<{ list: PatientRecord[], updateList: (list: PatientRecord[]) => void }> = ({ list, updateList }) => {

    const filters: FilterProp[] = [{ id: 'name', value: 'name' }, { id: 'code', value: 'code' }, { id: 'age', value: 'age' }, { id: 'address', value: 'address' }, { id: 'phone', value: 'phone' }, { id: 'app_date', value: 'Appt. Date' }, { id: 'req_date', value: 'Record Date' }, { id: 'status', value: 'status' }]

    let users = [{ 'a': 123, 'b': 345 }, { 'c': 678, 'd': 891 }];


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
                    <PaginatedList
                        list={list}
                        itemsPerPage={1}
                        ControlItem={`button`}
                        activeControlClass={'active font-bold bg-red-200 rounded-md bg-opacity-20'}
                        paginatedListContainerClass={'div'}
                        controlClass={' bg-white rounded-md fixed bottom-2 md:bottom-10 z-20 left-1/2 -translate-x-1/2'}
                        controlItemClass={'p-1 px-2 text-gray-500 text-sm p-2 mx-1 my-2'}
                        nextClass='font-black scale-y-75 ml-3'
                        prevClass='font-black scale-y-75 mr-3'
                        renderList={(list) => (
                            <>
                                {list.map((record, id) => {
                                    return <PatientRecordItem key={id} record={record} />
                                })
                                }
                            </>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default PatientRecordList