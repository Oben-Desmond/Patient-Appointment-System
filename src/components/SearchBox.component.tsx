import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBox = () => {
    return (
        <div className='inline-block rounded-md bg-white text-gray-500 p-2  float-right'>
            <input type="text" className='rounded-none text-sm  text-light outline-none' placeholder='search' />
            <FaSearch className='inline-block float-right mt-1 text-danger' />
        </div>
    )
}

export default SearchBox