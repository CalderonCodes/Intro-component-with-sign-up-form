
import React, { useEffect, useState } from 'react';
import TrialCard from '../../components/Cards/TrialCard';

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
    <div className='min-h-screen bg-Red flex flex-col items-center' 
    style={{ backgroundImage: isMobile ?
    'url(/assets/bg-intro-mobile.png)' : 'url(/assets/bg-intro-desktop.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        <h1 className='text-neutral-50 text-3xl font-semibold font-Poppins p-24 pb-10 text-center'> Learn to code by watching others</h1>
        <p className='text-neutral-50 text-xl font-normal font-Poppins px-10 text-center'>
        See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
        but understanding how developers think is invaluable. 
        </p>
        <div className='w-full flex  flex-col items-center py-20'>
            <TrialCard/>
            
        </div>
    </div>
  )
}

export default Home