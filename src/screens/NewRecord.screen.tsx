import { Alert, Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useState } from 'react'
import { FaEbay } from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AlertInfo from '../components/AlertInfo.component'
import { updateRecord } from '../state/records.state'
import { RootState } from '../state/store'
import { PatientRecord } from '../types'
import { getDaterFormat } from '../utilities/date.utility'
import { getNextSN } from '../utilities/records.utility'
import './NewRecord.css'

const NewRecord = () => {

  // const [code, setCode] = useState("")

  const allRecords: PatientRecord[] = useSelector((state: RootState) => state.records.value)
  const dispatch = useDispatch()


  const code = getDaterFormat(allRecords)
  const sn = getNextSN(allRecords)
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

  const [showAlert, setShowAlert] = useState(false)

  const navigate = useNavigate()

  function submitRecord(ev: React.FormEvent<HTMLFormElement>) {
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

    dispatch(updateRecord([...allRecords, record]))
    initializeForm()
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 3000);

  }

  function initializeForm() {
    setName("")
    setAge("")
    setSex("male")
    setPhone("")
    setEmail("")
    setDate("")
    setFirstTime(false)
    setRequestDate("")
    setStatus("pending")
    setAppTime("")
    setAddress("")
    setCity("")
    setBeforeNotes("")
    setAfterNotes("")



  }



  return (
    <div className='bg-light min-h-screen relative'>
      <AlertInfo message='Record saved...' show={showAlert} onDidmiss={() => setShowAlert(false)} type={'success'} />
      <form onSubmit={submitRecord}>
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
            <span className='text-md font-bold ml-5'>New Record </span>
          </div>
          <div className='px-2 md:px-[40px]'>
            <div className="mt-10">
              <div className="font-bold">General Information</div>
              <div className="grid grid-cols-10 gap-y-2 gap-x-5 py-2">
                <div className='col-span-10 sm:col-span-3 lg:col-span-1 '>
                  <div className='text-sm my-2 text-gray-700'>Unique Code</div>
                  <Input required value={code}
                    //  onChange={(e) => setCode(e.target.value)} 
                    type="text" className='w-full rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                </div>
                <div className='col-span-10 sm:col-span-3 lg:col-span-1 '>
                  <div className='text-sm my-2 text-gray-700'>Age</div>
                  <Input required value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number" className='w-full rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                </div>
                <div className=' col-span-10 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm my-2 text-gray-700'>Name</div>
                  <Input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='' className='w-full border  border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                </div>
                <div className=' col-span-10 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm my-2 text-gray-700'>Sex</div>
                  <select required value={sex} onChange={(e) => setSex(e.target.value as ('male' | 'female'))} className='w-full border border-gray-300 pr-6 rounded text-sm p-2 text-gray-800 outline-none inline-block'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className=' col-span-10 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm my-2 text-gray-700'>Phone</div>
                  <Input required value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder='6790845454' className='w-full border border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                </div>
                <div className=' col-span-10 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm my-2 text-gray-700'>Email</div>
                  <Input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='w-full border border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                </div>

              </div>
            </div>


          </div>

        </div>

        <div className='className="pl-5 md:pl-[80px] h-[2px] bg-gray-400"'>
          <div className="h-[1px] bg-gray-400">
          </div>
        </div>

        <div className="px-5 md:px-[40px] py-10">
          <div className='px-2 md:px-[40px]'>
            <div className="mt-4 pb-6">
              <div className="font-bold">Appointment Information</div>
              <div className="grid grid-cols-10 gap-y-2 gap-x-5 lg:gap-x-14 py-2">
                <div className='col-span-9 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm text-gray-700 my-4'>Appointment date</div>
                  <Input required value={date} onChange={(e) => setDate(e.target.value)} type="date" className='Input-field w-full border border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                </div>
                <div className=' col-span-9 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm text-gray-700 my-4'>First time</div>
                  <select required value={firstTime ? 'yes' : 'no'} onChange={(e) => setFirstTime(e.target.value == "yes" ? true : false)} className='w-full border border-gray-300 pr-6 rounded text-sm p-2 text-gray-800 outline-none inline-block'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className=' col-span-9 sm:col-span-3 lg:col-span-2 relative'>
                  <div className='text-sm text-gray-700 my-4'>Request date</div>
                  <Input required value={requestDate} onChange={(e) => setRequestDate(e.target.value)} type={'date'} className='Input-field w-full border border-gray-300 pr-6 rounded text-sm p-2 text-gray-800 outline-none inline-block' />

                </div>
                <div className=' col-span-9 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm text-gray-700 my-4'>Appointment Statuhomehhs</div>
                  <select required disabled value={status} onChange={(e) => setStatus(e.target.value as "pending")} className='w-full border border-gray-300 pr-6 rounded text-sm p-2 text-gray-800 outline-none inline-block'>
                    <option value="pending">Pending</option>
                    <option value="missed">Missed</option>
                    <option value="rescheduled">Rescheduled</option>
                    <option value="passed">Passed</option>
                  </select>
                </div>
                <div className='col-span-9 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm text-gray-700 my-4'>Appointment Time</div>
                  <Input required value={appTime} onChange={(e) => setAppTime(e.target.value)} type="time" className='w-full rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                </div>

              </div>
            </div>


            <div className="mt-4 pb-6">
              <div className="font-bold">Address Information</div>
              <div className="grid grid-cols-10 gap-y-2 gap-x-5 lg:gap-x-14 py-2">
                <div className='col-span-9 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm text-gray-700 my-3'>Address 1</div>
                  <Input required value={address} onChange={(e) => setAddress(e.target.value)} type="text" className='w-full border border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                </div>
                <div className=' col-span-9 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm text-gray-700 my-3'>City</div>
                  <Input required value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder='' className='w-full border  border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                </div>

              </div>
            </div>



            <div className="mt-4 pb-12">
              <div className="font-bold">Notes</div>
              <div className="grid grid-cols-10 gap-y-2 gap-x-5 lg:gap-x-14 py-2">
                <div className='col-span-9 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm text-gray-700 my-3'>Before Appointment</div>
                  <TextArea required value={beforeNotes} onChange={(e) => setBeforeNotes(e.target.value)} className='w-full border border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                </div>
                <div className='col-span-9 sm:col-span-3 lg:col-span-2 '>
                  <div className='text-sm text-gray-700 my-3'>After Appointment</div>
                  <TextArea disabled={status == 'pending'} value={afterNotes} onChange={(e) => setAfterNotes(e.target.value)} placeholder='' className='w-full border  border-gray-300 rounded text-sm p-2 text-gray-800 outline-none inline-block' />
                </div>

              </div>
            </div>
            <div className="py-2 ">
              <Button className="p-2 px-4 float-none md:float-right rounded shadow bg-red-theme text-sm text-white">
                Save
              </Button>
            </div>

            <div className="h-20"></div>


          </div>
        </div>
      </form>

    </div>
  )
}

export default NewRecord


