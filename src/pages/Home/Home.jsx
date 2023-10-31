
import React, { useEffect, useState } from 'react';
import TrialCard from '../../components/Cards/TrialCard';
import Form from '../../components/Forms/Form';

function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1440); 
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div className='min-h-screen lg:max-h-screen bg-Red flex flex-col lg:flex-row items-center lg:justify-center ' 
    style={{ backgroundImage: isMobile ?
    'url(/assets/bg-intro-mobile.png)' : 'url(/assets/bg-intro-desktop.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='flex flex-col items-center  lg:gap-8 lg:w-2/5 '>
        <h1 className='text-neutral-50 text-3xl lg:text-5xl font-semibold font-Poppins  lg:p-0 lg:pl-10 pt-24 px-10 pb-10 lg:text-left text-center'> Learn to code by watching others</h1>
        <p className='text-neutral-50 text-base font-normal font-Poppins px-10   lg:text-left text-center'>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
        but understanding how developers think is invaluable. 
        </p>
        </div>
       
        <div className='w-full h-full lg:w-2/5  flex  flex-col items-center lg:items-start gap-8  lg:py-0 py-20'>
            <TrialCard/>
            <Form/>
        </div>

        <div className="flex flex-col montserrat-500 text-center text-sm text-neutral-50 pb-5 lg:pl-5 lg:absolute lg:left-0 lg:bottom-0">
        <div>
        Challenge by <a className="underline text-super-dark-cyan" href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        </div>
        <div>Coded by <a className="underline italic" href="https://github.com/CalderonCodes">Christopher Calderon</a>.</div>
        </div>
        
    </div>
    
  )
}

export default Home