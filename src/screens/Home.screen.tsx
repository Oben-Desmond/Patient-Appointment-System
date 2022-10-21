import React, { useState } from 'react'
import ListPaginationController from '../components/ListPaginationController.component'
import PatientRecordList from '../components/PatientRecordList.component'
import SearchBox from '../components/SearchBox.component'
import SummaryCard from '../components/SummaryCard.component'
import { AppointmentData } from '../data/records'
import { IoMdAdd } from 'react-icons/io'

const Home = () => {
    const [list, setlist] = useState(AppointmentData)
    return (
        <div className='bg-light min-h-screen relative'>
            <div className="header bg-tertiary shadow-xl">
                <div className="w-1/3 p-3 text-white relative bg-secondary rounded-br-full font-bold" >
                    <span className='mr-2'>DrNG</span> <div className="w-[1px] -mb-1 h-6 bg-white inline-block"></div> <span className='ml-2'>PATIENTS</span>
                </div>
            </div>
            <div className="h-5"></div>
            <div className=" px-4 sm:px-10 lg:px-40">
                <div className="nav grid grid-cols-12 sm:px-4 lg:px-10">
                    <div className="text-danger col-span-12  sm:col-span-6 font-semibold">
                        <div className="inline-block">
                            <div>Appointments</div>
                            <div className="w-12 mx-auto h-[2px] bg-danger"></div>
                        </div>
                    </div>
                    <div className="text-danger col-span-12 mt-4 sm:mt-0 sm:col-span-6 items-end font-semibold">
                        <SearchBox />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 md:gap-10 pt-10 pb-6 sm:px-2 lg:px-10">
                    <SummaryCard color='danger' status='Missed' value='15' />
                    <SummaryCard color='warning' status='Pending' value='21' />
                    <SummaryCard color='success' status='Passed' value='05' />
                </div>
                <div className="py-3">
                    <PatientRecordList list={AppointmentData} />
                </div>
            </div>
            <div className="relative inline-block md:block md:fixed bottom-1 md:bottom-10 z-20 left-1/2 -translate-x-1/2">
                <ListPaginationController list={list} />
            </div>
            <div className="fixed hover:rotate-90 rotate-0 md:rotate-90 cursor-pointer transition-all bottom-10 z-20  right-10 sm:right-16 lg:right-40 ">
                <div className="p-2 px-2 scale-125 bg-danger text-white rounded-md shadow-lg">
                    <IoMdAdd />
                </div>
            </div>

        </div>
    )
}

export default Home