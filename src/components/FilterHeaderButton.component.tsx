import React, { useRef, useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { IoFilterSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { RootState } from '../state/store'
import { PatientRecord } from '../types'


export interface FilterProp {
    id: 'name' | 'code' | 'age' | 'address' | 'phone' | 'status' | 'req_date' | 'app_date',
    value: string
}
const FilterHeaderButton: React.FC<{ filter: FilterProp, list: PatientRecord[], updateList: (list: PatientRecord[]) => void }> = ({ filter, list, updateList }) => {

    const originalRecord: PatientRecord[] = useSelector((state: RootState) => state.records.value)

    const [sortAsc, setSortAsc] = useState(true)
    const [showAgeFilter, setshowAgeFilter] = useState(false)
    const [showStatusFilter, setshowStatusFilter] = useState(false)
    const [currentStatusRange, setcurrentStatusRange] = useState("")

    const ageRange = ['0-5', '6-10', '11-16', '17-25', '26-30', '30-40', '50-above', "all"]
    const [currentAgeRange, setcurrentAgeRange] = useState("")
    const status = ['pending', 'missed', 'rescheduled', 'passed', 'all']


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

    function filterByAge(age: string) {
        const range = age.split('-')
        let temp = list;
        if (range.length <= 1) {
            setshowAgeFilter(false)
            setcurrentAgeRange("")
            updateList(originalRecord)
            return;

        }
        else if (isNaN(+range[1])) {
            temp = originalRecord.filter((record) => record.age >= (+range[0]))

        } else {
            temp = originalRecord.filter((record) => (record.age >= (+range[0]) && record.age <= (+range[1])))
        }
        updateList(temp)
        setshowAgeFilter(false)
        setcurrentAgeRange(age)

    }

    function filterByStatus(status: string) {

        if (status == 'all') {
            let temp = originalRecord;
            updateList(temp)
            setshowStatusFilter(false)
            setcurrentStatusRange("")
            return;
        }


        let temp = originalRecord.filter((record) => record.status == status)
        updateList(temp)
        setshowStatusFilter(false)
        setcurrentStatusRange(status)

    }

    return (
        <div className="p-3 col-span-1 relative font-bold capitalize rounded-lg text-black bg-white inline-block text-sm">
            <div >
                {filter.value} <span className='text-sm text-gray-300 ml-2 capitalize'>{currentAgeRange}</span> <span className='text-sm text-gray-300 ml-2 capitalize'>{currentStatusRange}</span>
                <div className="inline-block float-right" >
                    <FaChevronUp className={`text-[10px] cursor-pointer ${!sortAsc ? 'text-black' : 'text-gray-500'}`} onClick={() => sortList(true)} />
                    <FaChevronDown className={`text-[10px] cursor-pointer ${sortAsc ? 'text-black' : 'text-gray-500'}`} onClick={() => sortList(false)} />
                </div>
                <div className="inline-block mt-1 float-right mr-2">
                    {(filter.id == "age") && <IoFilterSharp onClick={() => setshowAgeFilter(true)} className='text-[16px]' />}
                    {
                        filter.id == "status" && <IoFilterSharp onClick={() => setshowStatusFilter(true)} className='text-[16px]' />
                    }
                </div>



            </div>
            {filter.id == "age" && showAgeFilter && <div className='absolute w-[100px] bg-white pt-2 bg-opacity-75 shadow-sm ' >
                {
                    ageRange.map((age, index) => {
                        return (<div onClick={() => { filterByAge(age) }} className='px-[10px] text-sm py-[4px] hover:bg-gray-200 cursor-pointer' >{age}</div>)
                    })
                }
            </div>}
            {filter.id == "status" && showStatusFilter && <div className='absolute w-[100px] bg-white pt-2 bg-opacity-75 shadow-sm ' >
                {
                    status.map((status, index) => {
                        return (<div onClick={() => { filterByStatus(status) }} className='px-[10px] text-sm py-[4px] hover:bg-gray-200 cursor-pointer' >{status}</div>)
                    })
                }
            </div>}
        </div>
    )
}

export default FilterHeaderButton