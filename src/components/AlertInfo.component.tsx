import React from 'react'
import { FaCheck } from 'react-icons/fa'

const AlertInfo: React.FC<{ show: boolean, onDidmiss: () => void, loading?: boolean, message: string, type: 'success' | 'failed' }> = ({ message, loading, show }) => {
  return (
    <div className={`fixed top-16 left-1/2 -translate-x-1/2 z-40 p-2 bg-opacity-95 px-5 text-green-500 shadow-xl bg-white transition-all ${!show ? "-translate-y-20 opacity-0" : 'translate-y-0 opacity-100'}`}>
      {loading && <span className="flex h-3 w-3 float-left mr-3 mt-1">
        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>}
      {message}
      <FaCheck className='inline-block ml-2' />
    </div>
  )
}

export default AlertInfo