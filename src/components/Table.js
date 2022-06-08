import React from 'react'

export default function TableMenu() {
  return (
    <div className='mt-5'>
        <div className='grid grid-cols-2 gap-4 pb-5'>
            <div className='flex flex-col gap-4'>
                <span className='font-bold text-l'>Subtotal</span>
                <span className='font-bold text-l'>Estimated Tax</span>
                <span className='font-bold text-l'>Promotional Code: <span className='text-[#808080]/50'>VdWtxU5r</span></span>
            </div>
            <div className='flex flex-col gap-4'>
                <span className='flex justify-end font-bold text-l'>&#8358;2500.00</span>
                <span className='flex justify-end font-bold text-l'>&#8358;112.04</span>
                <span className='flex justify-end font-bold text-l'>&#8358;-61</span>
            </div>
        </div>
        <hr/>
        <div className='grid grid-cols-2 gap-4 pt-5 pb-10'>
            <div>
                <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Complete Payment
                </button>
            </div>
            <div className='flex justify-end'>
                <span className='font-bold text-l'>Total: &#8358;2551.04</span>
            </div>
        </div>
    </div>
  )
}
