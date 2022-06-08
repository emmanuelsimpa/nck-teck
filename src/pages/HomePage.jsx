import React from 'react'
import FormMenu from '../components/Form'
import TableMenu from '../components/Table'

export default function HomePage() {
  return (
    <div className='mx-6 mt-10'>
        <hr/>
        <div className="grid grid-cols-2 gap-4 pt-5">
        <div>
            <div className='flex flex-col'>
                <span className='font-extrabold text-xl'>Payment Information</span>
                <span className='font-thin text-gray-800'>Choose your method of payment</span>
            </div>
        </div>
        <div>
            <div className='flex justify-end pt-2'>
                <img className="inline-block h-5 w-5" src="images/visa.png" alt="Visa Avater"/>
                <img className="inline-block h-5 w-5" src="images/master.png" alt="Visa Avater"/>
                <span className='pl-3'>
                <input type="checkbox" class="indeterminate:bg-gray-500 w-5" />
                <img className="inline-block h-5 w-10" src="images/download.png" alt="Paypal Avater"/>
                </span>
            </div>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-5">
            <div>
                {/* <img className="inline-block " src="images/atm.png" alt="Paypal Avater"/> */}
                <img className="inline-block h-auto w-auto" src="images/atm_one.jpg" alt="Paypal Avater"/>
            </div>
            <div>
                <FormMenu/>
            </div>
        </div>
        <hr className='mt-7'/>
        <TableMenu/>
    </div>
  )
}
