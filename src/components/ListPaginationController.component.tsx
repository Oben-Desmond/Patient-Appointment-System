import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { PatientRecord } from '../types'

const ListPaginationController: React.FC<{ list: PatientRecord[], pageLen: number, onPageChange: (pagedRecords: PatientRecord[]) => void }> = ({ list, onPageChange, pageLen }) => {

    const [pages, setPages] = useState<PatientRecord[][]>([[], []])

    useEffect(() => {
        // const numPages = Math.ceil(list.length / pageLen)
        // let temp = []
        // let temp_pages = []
        // setPages([])
        // for (let i = 0; i < list.length; i++) {

        //     if ((i % pageLen == 0 && i > 0) || list.length >= (i + 1)) {
        //         temp_pages.push(temp);
        //         temp = []
        //         continue;
        //     }
        //     temp.push(list[i])
        // }
        // setPages(temp_pages)
        // console.log(temp_pages)
    }, [pageLen, list])



    return (
        <div className='bg-white rounded-lg inline-block p-2  mx-auto'>
            <button className="p-1 px-2">
                <FaChevronLeft className='inline-block text-[10px]' />
            </button>
            {
                pages.map((item, index) => {
                    return (
                        <button className="p-1 px-2 text-gray-500 text-sm" >
                            {index + 1}
                        </button>
                    )
                })
            }

            {/* <button className="p-1 px-2 relative text-black font-black text-sm" >
                <span className='bottom-1 absolute'>
                    ...
                </span>
            </button> */}

            <button className="p-1 px-2">
                <FaChevronRight className='inline-block text-[10px]' />
            </button>
        </div>
    )
}

export default ListPaginationController