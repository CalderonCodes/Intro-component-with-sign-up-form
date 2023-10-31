import React from 'react'
import Button from '../Buttons/Button'

function Form() {
  return (
    <div className=" w-11/12 h-full flex flex-col items-center rounded-lg line leading-7  bg-neutral-50 border-none  px-5 text normal-case font-Poppins font-normal
    shadow-[0px_10px_0px_0px_rgba(0,_0,_0,_0.2)] py-8 gap-8 ">
        <input type="text" placeholder="First Name" className="input input-bordered w-full h-16 font-semibold text-DarkBlue placeholder:text-DarkBlue placeholder:opacity-70 bg-neutral-50" />
        <input type="text" placeholder="Last Name" className="input input-bordered w-full h-16 font-semibold text-DarkBlue placeholder:text-DarkBlue placeholder:opacity-70 bg-neutral-50" />
        <input type="text" placeholder="Email Address" className="input input-bordered w-full  h-16 font-semibold text-DarkBlue placeholder:text-DarkBlue placeholder:opacity-70 bg-neutral-50" />
        <input type="text" placeholder="Password" className="input input-bordered w-full h-16 font-semibold text-DarkBlue placeholder:text-DarkBlue placeholder:opacity-70 bg-neutral-50" />
        <Button/>
        <p className='px-10 text-center text-GrayishBlue font-medium'>
        By clicking the button, you are agreeing to our 
        <span className="text-Red font-bold"> Terms and Services</span>
        </p>
    </div>
  )
}

export default Form