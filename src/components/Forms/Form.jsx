import React, { useState } from 'react';
import Button from '../Buttons/Button'

function Form() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
  const handleButtonClick = () => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    setFirstNameError(!firstName);
    setLastNameError(!lastName);
    setEmailError(!email);
    setPasswordError(!password);
    if (!emailPattern.test(email)) {
      setEmailError(true);
      return;
    }

  };

  return (
    <div className=" w-11/12 h-full flex flex-col items-center rounded-lg line leading-7  bg-neutral-50 border-none  px-5 text normal-case font-Poppins font-normal
    shadow-[0px_10px_0px_0px_rgba(0,_0,_0,_0.2)] py-8 gap-8 lg:gap-3 ">
      <div className='w-full lg:w-11/12 flex flex-col items-end gap-1 '> 
      <input type="text" placeholder="First Name" className={`input input-bordered w-full h-16 font-semibold
         text-DarkBlue placeholder:text-DarkBlue placeholder:opacity-70 bg-neutral-50 lg:px-10 ${firstNameError ? 'border-Red placeholder:text-Red' : ''}`}
         value={firstName}
         onChange={(e) => {setFirstName(e.target.value); setFirstNameError(false); }}/>
         {firstNameError && <p className="text-Red text-xs font-Poppins">First Name cannot be empty</p>}
      </div>

      <div className='w-full lg:w-11/12 flex flex-col items-end gap-1 ' >
        <input type="text" placeholder="Last Name" className={`input input-bordered w-full h-16 font-semibold
         text-DarkBlue placeholder:text-DarkBlue placeholder:opacity-70 bg-neutral-50 lg:px-10 ${lastNameError ? 'border-Red placeholder:text-Red' : ''}`} value={lastName}
         onChange={(e) => {setLastName(e.target.value); setLastNameError(false); }}/>
          {lastNameError && <p className="text-Red text-xs font-Poppins">Last Name cannot be empty</p>}
      </div>
        
      <div className='w-full lg:w-11/12 flex flex-col items-end gap-1 ' >
        <input type="text" placeholder={`${emailError ? 'email@example/com' : 'Email'}`} className={`input input-bordered w-full  h-16 font-semibold
         text-DarkBlue placeholder:text-DarkBlue placeholder:opacity-70 bg-neutral-50 lg:px-10 ${emailError ? 'border-Red placeholder:text-Red' : ''}`} value={email} 
         onChange={(e) => {setEmail(e.target.value); setEmailError(false); }}/>
          {emailError && <p className="text-Red text-xs font-Poppins">Looks like this is not an email</p>}
      </div>
       <div className='w-full lg:w-11/12 flex flex-col items-end gap-1 ' >
       <input type="text" placeholder="Password" className={`input input-bordered w-full  h-16 font-semibold
         text-DarkBlue placeholder:text-DarkBlue placeholder:opacity-70 bg-neutral-50 lg:px-10 ${passwordError ? 'border-Red placeholder:text-Red' : ''} `} value={password}
         onChange={(e) => {setPassword(e.target.value); setPasswordError(false); }} />
          {passwordError && <p className="text-Red text-xs font-Poppins">Password cannot be empty</p>}
       </div>
        
       
        <Button onClick={handleButtonClick}/>
        <p className='px-5 text-center text-xs text-GrayishBlue font-medium' >
        By clicking the button, you are agreeing to our 
        <span className="text-Red font-bold"> Terms and Services</span>
        </p>
    </div>
  )
}

export default Form