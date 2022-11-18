import { DownloadOutlined, SaveOutlined } from '@ant-design/icons'
import { Alert, Button, DatePicker, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useEffect, useState } from 'react'
import { IoArrowBack, IoArrowUndoOutline, IoPencilOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import AlertInfo from '../components/AlertInfo.component'
import { editRecordData, updateRecord } from '../state/records.state'
import { RootState } from '../state/store'
import { PatientRecord } from '../types'
import { getDaterFormat } from '../utilities/date.utility'
import { getNextSN } from '../utilities/records.utility'
import './NewRecord.css'

const EditRecord: React.FC = () => {

    // const [code, setCode] = useState("")

    const allRecords: PatientRecord[] = useSelector((state: RootState) => state.records.value)
    const dispatch = useDispatch()




    const [code, setCode] = useState('')
    const [sn, setSn] = useState(0)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [sex, setSex] = useState<'male' | 'female'>("male")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [firstTime, setFirstTime] = useState(false)
    const [requestDate, setRequestDate] = useState("")
    const [status, setStatus] = useState<'pending' | 'rescheduled' | 'missed' | 'passed'>("pending")
    const [appTime, setAppTime] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [beforeNotes, setBeforeNotes] = useState("")
    const [afterNotes, setAfterNotes] = useState("")

    const [editing, setEditing] = useState(false)
    const location = useLocation()

    const [showAlert, setShowAlert] = useState(false)





    useEffect(() => {

        if (location.state) {
            initializeForm(location.state as PatientRecord)
        }

    }, [])




    const navigate = useNavigate()

    function editRecord(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault()


        const record: PatientRecord = {
            address,
            age: +(age || "0"),
            ap_comment: beforeNotes,
            post_ap_comment: afterNotes,
            city,
            code,
            email,
            first_time: firstTime,
            name,
            phone,
            sex,
            sn,
            status,
            timestamp: Date.now(),
            app_date: date,
            req_date: requestDate,
            time: appTime
        }

        dispatch(editRecordData(record))
        setShowAlert(true)
        setEditing(false)
        setTimeout(() => {
            setShowAlert(false)

        }, 3000);

    }

    function initializeForm(patientRecord: PatientRecord) {
        setName(patientRecord.name)
        setAge(patientRecord.age + "")
        setSex(patientRecord.sex)
        setPhone(patientRecord.phone)
        setEmail(patientRecord.email)
        setDate(patientRecord.app_date)
        setFirstTime(patientRecord.first_time)
        setRequestDate(patientRecord.req_date)
        setStatus(patientRecord.status)
        setAppTime(patientRecord.time)
        setAddress(patientRecord.address)
        setCity(patientRecord.city)
        setBeforeNotes(patientRecord.ap_comment)
        setAfterNotes(patientRecord.post_ap_comment)
        setSn(patientRecord.sn)
        setCode(patientRecord.code)



    }

    function cancelEditing() {

        location.state && initializeForm(location.state as PatientRecord)
        setEditing(false)

    }



    return (
        <div className='bg-light min-h-screen relative'>
            <AlertInfo type='success' message='Editing Successfully' onDidmiss={() => setShowAlert(false)} show={showAlert} />
            <form onSubmit={editRecord}>
                <div className="header bg-tertiary shadow-xl">
                    <div className="w-3/4 p-3 text-white relative bg-secondary rounded-br-full font-bold" >
                        <span className='mr-2'>DrNG</span> <div className="w-[1px] -mb-1 h-6 bg-white inline-block"></div> <span className='ml-2'>PATIENTS</span>
                    </div>
                </div>
                <div className="content px-5 md:px-[40px] py-8">
                    <div className="nav uppercase">
                        <Button onClick={() => navigate(-1)} className='inline-block  float-left mt-[2px] text-[20px]'>
                            <IoArrowBack />
                        </Button>
                        <span className='text-md font-bold ml-5'>View Record </span>
                        {!editing && <Button onClick={() => setEditing(true)} className='text-md rounded p-2 border border-red-400  float-right text-red-400'>
                            <IoPencilOutline className='inline-block mr-[5px]' />
                            Edit Record
                        </Button>}
                        {editing && <Button onClick={() => cancelEditing()} className='text-md cursor-pointer rounded p-2 border border-gray-400  float-right text-gray-400'>
                            <IoArrowUndoOutline className='inline-block mr-[5px]' />
                            Cancel Changes
                        </Button>}
                    </div>
                    <div className='px-2 md:px-[40px]'>
                        <div className="mt-10">
                            <div className="font-bold">General Information</div>
                            <div className="grid grid-cols-10 gap-y-2 gap-x-5 py-2">
                                <div className='col-span-10 sm:col-span-3 lg:col-span-1 '>
                                    <div className='text-sm my-2 text-gray-700'>Unique Code</div>
                                    <Input disabled={!editing} required value={code}
                                        //  onChange={(e) => setCode(e.target.value)} 
                                        type="text" className='w-full rounded text-sm p-2 border  border-gray-300 text-gray-800 outline-none inline-block' />
                                </div>
                                <div className='col-span-10 sm:col-span-3 lg:col-span-1 '>
                                    <div className='text-sm my-2 text-gray-700'>Age</div>
                                    <Input disabled={!editing} required value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        type="number" className='w-full rounded border  border-gray-300 text-sm p-2 text-gray-800 outline-none inline-block' />
                                </div>
                                <div className=' col-span-10 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm my-2 text-gray-700'>Name</div>
                                    <Input disabled={!editing} required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='' className='w-full border  border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                                </div>
                                <div className=' col-span-10 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm my-2 text-gray-700'>Sex</div>
                                    <select disabled={!editing} required value={sex} onChange={(e) => setSex(e.target.value as ('male' | 'female'))} className='w-full border border-gray-300 pr-6 rounded text-sm p-2 text-gray-800 outline-none inline-block'>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className=' col-span-10 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm my-2 text-gray-700'>Phone</div>
                                    <Input disabled={!editing} required value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder='6790845454' className='w-full border border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                                </div>
                                <div className=' col-span-10 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm my-2 text-gray-700'>Email</div>
                                    <Input disabled={!editing} required value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='w-full border border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

                <div className='className="pl-5 md:pl-[80px] h-[2px] bg-gray-400"'>
                    <div className="h-[1px] bg-gray-400">
                    </div>
                </div>

                <div className="px-5 md:px-[40px] py-10 relative">
                    <div className='px-2 md:px-[40px]'>
                        <div className="mt-4 pb-6">
                            <div className="font-bold">Appointment Information</div>
                            <div className="grid grid-cols-10 gap-y-2 gap-x-5 lg:gap-x-14 py-2">
                                <div className='col-span-9 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm text-gray-700 my-4'>Appointment date</div>
                                    <Input disabled={!editing} required value={date} onChange={(e) => setDate(e.target.value)} type="date" className='Input-field w-full border border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                                </div>
                                <div className=' col-span-9 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm text-gray-700 my-4'>First time</div>
                                    <select disabled={!editing} required value={firstTime ? 'yes' : 'no'} onChange={(e) => setFirstTime(e.target.value == "yes" ? true : false)} className='w-full border border-gray-300 pr-6 rounded text-sm p-2 text-gray-800 outline-none inline-block'>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                <div className=' col-span-9 sm:col-span-3 lg:col-span-2 relative'>
                                    <div className='text-sm text-gray-700 my-4'>Request date</div>
                                    <Input disabled={!editing} required value={requestDate} onChange={(e) => setRequestDate(e.target.value)} type={'date'} className='Input-field w-full border border-gray-300 pr-6 rounded text-sm p-2 text-gray-800 outline-none inline-block' />

                                </div>
                                <div className=' col-span-9 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm text-gray-700 my-4'>Appointment Status</div>
                                    <select disabled={!editing} required value={status} onChange={(e) => setStatus(e.target.value as "pending")} className='w-full border border-gray-300 pr-6 rounded text-sm p-2 text-gray-800 outline-none inline-block'>
                                        <option value="pending">Pending</option>
                                        <option value="missed">Missed</option>
                                        <option value="rescheduled">Rescheduled</option>
                                        <option value="passed">Passed</option>
                                    </select>
                                </div>
                                <div className='col-span-9 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm text-gray-700 my-4'>Appointment Time</div>
                                    <Input disabled={!editing} required value={appTime} onChange={(e) => setAppTime(e.target.value)} type="time" className='w-full border border-gray-300  rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                                </div>

                            </div>
                        </div>


                        <div className="mt-4 pb-6">
                            <div className="font-bold">Address Information</div>
                            <div className="grid grid-cols-10 gap-y-2 gap-x-5 lg:gap-x-14 py-2">
                                <div className='col-span-9 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm text-gray-700 my-3'>Address 1</div>
                                    <Input disabled={!editing} required value={address} onChange={(e) => setAddress(e.target.value)} type="text" className='w-full border border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                                </div>
                                <div className=' col-span-9 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm text-gray-700 my-3'>City</div>
                                    <Input disabled={!editing} required value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder='' className='w-full border  border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                                </div>

                            </div>
                        </div>



                        <div className="mt-4 pb-12">
                            <div className="font-bold">Notes</div>
                            <div className="grid grid-cols-10 gap-y-2 gap-x-5 lg:gap-x-14 py-2">
                                <div className='col-span-9 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm text-gray-700 my-3'>Before Appointment</div>
                                    <TextArea disabled={!editing} required value={beforeNotes} onChange={(e) => setBeforeNotes(e.target.value)} className='w-full border border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                                </div>
                                <div className='col-span-9 sm:col-span-3 lg:col-span-2 '>
                                    <div className='text-sm text-gray-700 my-3'>After Appointment</div>
                                    <TextArea disabled={status == 'pending' || !editing} value={afterNotes} onChange={(e) => setAfterNotes(e.target.value)} placeholder='' className='w-full border  border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                                </div>

                            </div>
                        </div>
                        <div className={`py-2 fixed bottom-5 right-20 transition-all ${editing ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <button type="submit" className="p-2 px-4 float-none md:float-right rounded shadow bg-red-theme text-sm text-white" >Save</button>
                        </div>

                        <div className="h-20"></div>


                    </div>
                </div>
            </form>

        </div>
    )
}



export default EditRecord;