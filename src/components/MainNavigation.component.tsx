import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import EditRecord from '../screens/EditRecord.screen'
import Home from '../screens/Home.screen'
import NewRecord from '../screens/NewRecord.screen'
import { updateRecord } from '../state/records.state'


const MainNavigation: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {

    const records = localStorage.getItem('records')
    console.log(records)
    records && dispatch(updateRecord(JSON.parse(records)))

    return () => {

    }
  }, [])

  return <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-record" element={<NewRecord />} />
      <Route path="/edit-record" element={<EditRecord />} />
    </Routes>
  </div>
}

export default MainNavigation