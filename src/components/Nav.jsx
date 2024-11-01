import React, { useState, useEffect } from 'react'
import BackToHeader from './BackToHeader'

function Nav() {
    const logo = process.env.PUBLIC_URL + 'assets/images/logo-rl-black.png'

    const [mobileNavbar, setMobileNavbar] = useState(false)

    let mobileClass
    if(mobileNavbar){
        mobileClass = 'show rounded'
    }else{
        mobileClass = 'hidden'
    }

    const navbarClickedHandle = () => {
        setMobileNavbar(!mobileNavbar)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResizeEvent);
    });

    const handleResizeEvent = () => {
        let viewWidth = window.innerWidth
        let lgWidth = 1024
        
        if(viewWidth > lgWidth) {
            setMobileNavbar(false)
        }
    }
  return (
    <>
        <nav className='flex items-center justify-between flex-wrap '>
            <div className="w-full h-auto flex items-center justify-between flex-wrap px-6 lg:mx-[75px] md:mx-[40px] mx-0">
                <div className="flex">
                    <div className="shrink-0 flex items-center">
                        <a href="/" alt="Home">
                            <img src={logo} alt="Logo" width={75} height={58} className='w-100'/>
                        </a>
                        <p className='text-[--dark-grey] text-[20px] font-bold'>Rhea Labayo</p>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-[--bright-red] border-[--bright-red]" onClick={() => navbarClickedHandle()}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className={`w-full block flex-grow lg:flex lg:items-center lg:text-end lg:w-auto text-left ${mobileClass}`}>
                    <div className="text-md lg:flex-grow py-2">
                        <a href="/" className="block my-1 mx-2 font-bold lg:inline-block lg:mt-0 text-center text-[--dark-grey] hover:text-lg dark:hover:text-[--bright-red]">
                            About Me
                        </a>
                        <a href="/contact" className="block my-1 mx-2 font-bold lg:inline-block lg:mt-0 text-center text-[--dark-grey] hover:text-lg dark:hover:text-[--bright-red]">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        <BackToHeader />
    </>
  )
}

export default Nav