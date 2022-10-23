import React, { useEffect, useState } from 'react'
import ListPaginationController from '../components/ListPaginationController.component'
import PatientRecordList from '../components/PatientRecordList.component'
import SearchBox from '../components/SearchBox.component'
import SummaryCard from '../components/SummaryCard.component'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { PatientRecord } from '../types'
import { useSelector } from 'react-redux'
import { RootState } from '../state/store'

const Home = () => {
    const records: PatientRecord[] = useSelector((state: RootState) => state.records.value);
    const [list, setlist] = useState<PatientRecord[]>(records)
    const [visibleList, setVisibleList] = useState<PatientRecord[]>(records)
    const [currentPage, setCurrentPage] = useState(1)
    const [queryText, setQueryText] = useState("")
    const missed = records.filter(record => record.status == "missed").length
    const passed = records.filter(record => record.status == "passed").length
    const rescheduled = records.filter(record => record.status == "rescheduled").length

    const navigation = useNavigate()

    useEffect(() => {

        setlist(records)
    }, [records])


    function searchPhrase(text: string) {
        setQueryText(text)
        text = text.toLowerCase()
        if (!text) {
            setVisibleList(list)
        }
        const result = list.filter((record) => {
            return (
                record.name.toLowerCase().match(text) || record.address.toLowerCase().match(text) || record.phone.toLowerCase().match(text)
            )
        })
        setVisibleList(result)

    }




    return (
        <div className='bg-light min-h-screen relative'>
            <div className="header bg-tertiary shadow-xl">
                <div className="w-1/3 p-3 text-white relative bg-secondary rounded-br-full font-bold" >
                    <span className='mr-2'>DrNG</span> <div className="w-[1px] -mb-1 h-6 bg-white inline-block"></div> <span className='ml-2'>PATIENTS</span>
                </div>
            </div>
            <div className="h-5"></div>
            <div className=" px-4 sm:px-10 lg:px-20 xl:px-40">
                <div className="nav grid grid-cols-12 sm:px-4 lg:px-10">
                    <div className="text-danger col-span-12  sm:col-span-6 font-semibold">
                        <div className="inline-block">
                            <div>Appointments</div>
                            <div className="w-12 mx-auto h-[2px] bg-danger"></div>
                        </div>
                    </div>
                    <div className="text-danger col-span-12 mt-4 sm:mt-0 sm:col-span-6 items-end font-semibold">
                        <SearchBox value={queryText} onChange={(text) => searchPhrase(text)} />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 md:gap-10 pt-10 pb-6 sm:px-2 lg:px-10">
                    <SummaryCard color='danger' status='Missed' value={missed + ""} />
                    <SummaryCard color='warning' status='Rescheduled' value={rescheduled + ""} />
                    <SummaryCard color='success' status='Passed' value={passed + ""} />
                </div>
                <div className="py-3">
                    <PatientRecordList list={visibleList} updateList={(visibleList) => { setVisibleList([...visibleList]) }} />
                </div>
            </div>
            <div className="relative inline-block md:block md:fixed bottom-1 md:bottom-10 z-20 left-1/2 -translate-x-1/2">
                <ListPaginationController list={records} pageLen={20} onPageChange={(pagedRecords) => { setlist([...pagedRecords]) }} />
            </div>
            <div className="fixed hover:rotate-90 rotate-0 md:rotate-90 cursor-pointer transition-all bottom-10 z-20  right-10 sm:right-16 lg:right-40 ">
                <div onClick={() => navigation("/new-record", {})} className="p-2 px-2 scale-125 bg-danger text-white rounded-md shadow-lg">
                    <IoMdAdd />
                </div>
            </div>

        </div>
    )
}

export default Home