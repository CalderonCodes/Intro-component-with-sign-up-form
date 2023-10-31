
import React, { useEffect, useState } from 'react';

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
    <div className='min-h-screen bg-Red' 
    style={{ backgroundImage: isMobile ?
    'url(/assets/bg-intro-mobile.png)' : 'url(/assets/bg-intro-desktop.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
        <h1> </h1>
    
    </div>
  )
}

export default Home