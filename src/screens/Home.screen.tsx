import React from 'react'
import PatientRecordList from '../components/PatientRecordList.component'
import SearchBox from '../components/SearchBox.component'
import SummaryCard from '../components/SummaryCard.component'
import { AppointmentData } from '../data/records'

const Home = () => {
    return (
        <div className='bg-light min-h-screen'>
            <div className="header bg-tertiary shadow-xl">
                <div className="w-1/3 p-3 text-white relative bg-secondary rounded-br-full font-bold" >
                    <span className='mr-2'>DrNG</span> <div className="w-[1px] -mb-1 h-6 bg-white inline-block"></div> <span className='ml-2'>PATIENTS</span>
                </div>
            </div>
            <div className="h-5"></div>
            <div className="px-40">
                <div className="nav grid grid-cols-12 px-10">
                    <div className="text-danger col-span-6 font-semibold">
                        <div className="inline-block">
                            <div>Appointments</div>
                            <div className="w-12 mx-auto h-[2px] bg-danger"></div>
                        </div>
                    </div>
                    <div className="text-danger col-span-6 items-end font-semibold">
                        <SearchBox />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-10 pt-10 pb-6 px-10">
                    <SummaryCard color='danger' status='Missed' value='15' />
                    <SummaryCard color='warning' status='Pending' value='21' />
                    <SummaryCard color='success' status='Passed' value='05' />
                </div>
                <div className="py-3">
                    <PatientRecordList list={AppointmentData} />
                </div>
            </div>

        </div>
    )
}

export default Home