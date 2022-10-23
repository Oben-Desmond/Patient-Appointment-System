import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../screens/Home.screen'
import NewRecord from '../screens/NewRecord.screen'


const MainNavigation: React.FC = () => {
  return <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="new-record" element={<NewRecord />} />
    </Routes>
  </div>
}

export default MainNavigation