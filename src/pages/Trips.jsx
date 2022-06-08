import React from 'react'
import { Link } from 'react-router-dom'
import {ArrowLeftOutlined} from '@ant-design/icons';

export const Trips = () => {
  return (
    <div>
       <Link to="/">
            <div className='flex items-center justify-between'>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            >
            <ArrowLeftOutlined className="flex"/>
            </button>
            </div>
        </Link>
        <div className='flex justify-center mt-20'>
        <span className='font-bold text-l'>Still in progress...</span>
        </div>
    </div>
  )
}
