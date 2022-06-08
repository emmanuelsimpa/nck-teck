import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import CreditCardInput from 'react-credit-card-input';
 import { useFormik } from "formik";


const validationSchema = Yup.object().shape({
    postalCode: Yup.string()
    .typeError('Postal code is invalid. Example: 100001')
    .max(7, 'Not a valid Postal code. Example: 100001')
    .matches( 
       /^[0-9]{5}(?:-[0-9]{4})?$/,
      'Not a valid Postal code. Example: 100001'
    ),
});

export default function FormMenu() {
    const [isSubmitDisabled, set_isSubmitDisabled] = useState(true)

    useEffect(()=>{
        // set_isSubmitDisabled(false)
    }, [ ])

    const formik = useFormik({
        initialValues: {
          creditCard: "",
          expirationDate: "",
          securityCode: "",
          postalCode: ""
        },
        validationSchema,
        onSubmit: () => {
            if (creditCard.length > 8 && expirationDate.length > 2 && securityCode.length > 2){
                set_isSubmitDisabled(false)
            }
            else {
                set_isSubmitDisabled(true)
            }
        }
    });
        
    const creditCard = formik.getFieldMeta("creditCard");
    const expirationDate = formik.getFieldMeta("expirationDate");
    const securityCode = formik.getFieldMeta("securityCode");
    const postalCode = formik.getFieldMeta("postalCode");
    
  return (
    <div>
       <form >
        <div className='grid grid-cols-2 gap-4'>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font mb-2"
            htmlFor="creditCard"
          >
            Credit Card
          </label>
          <CreditCardInput
            cardNumberInputProps={ formik.getFieldProps("creditCard")}
            cardExpiryInputProps={ formik.getFieldProps("expirationDate")}
            cardCVCInputProps={ formik.getFieldProps("securityCode")}
            fieldClassName="input"
            containerClassName="border"
           />
           
          {/* <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="creditCard"
            type="text"
            placeholder="credit card number"
            {...formik.getFieldProps("creditCard")}
          /> */}
          {/* {creditCard.error && (
            <p className="text-red-500 text-xs italic">{creditCard.error}</p>
          )} */}
          <div />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font mb-2"
            htmlFor="creditCard"
          >
            Expiration date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="creditCard"
            type="text"
            placeholder="Expiration Code"
            {...formik.getFieldProps("expirationDate")}
            disabled
          />
          {expirationDate.error && (
            <p className="text-red-500 text-xs italic">{expirationDate.error}</p>
          )}
          <div />
        </div>
        </div>
        <div className='grid grid-cols-2 gap-4 pt-5'>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font mb-2"
            htmlFor="creditCard"
          >
            Security Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="creditCard"
            type="text"
            placeholder="Security Code"
            {...formik.getFieldProps("securityCode")}
            disabled
          />
          {expirationDate.error && (
            <p className="text-red-500 text-xs italic">{securityCode.error}</p>
          )}
          <div />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font mb-2"
            htmlFor="creditCard"
          >
            Postal Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="creditCard"
            type="text"
            placeholder="Postal code"
            {...formik.getFieldProps("postalCode")}
          />
          {expirationDate.error && (
            <p className="text-red-500 text-xs italic">{postalCode.error}</p>
          )}
          <div />
        </div>
        </div>

        <div className="flex items-center justify-between pt-5">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
