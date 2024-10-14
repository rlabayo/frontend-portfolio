import React from 'react'
import Nav from '../../components/Nav'

function Header() {
    const banner = process.env.PUBLIC_URL + 'assets/images/About-banner.png'
    const bannerBg = process.env.PUBLIC_URL + 'assets/images/BannerBg.png'
    const myStyle = {
        backgroundImage : "url('" + bannerBg + "')"
    }

  return (
    <>
        <div className='min-h-fit h-auto flex flex-col gap-1 bg-no-repeat bg-cover'>    
            <Nav />
            <div className='banner lg:flex flex-row w-full space-y-6 items-center justify-around md:py-6 py-10 lg:bg-gradient-to-r bg-gradient-to-b from-[#D95B5B] via-[#D85656] to-[#F4D0D0] shadow-md'>
                <div className='lg:w-1/2 w-full lg:text-start text-center px-6 lg:mx-[75px] md:mx-[40px] mx-0'>
                    <h1 className='text-[--peach-white] md:text-[40px] text-[30px] font-semibold'>Rhea Labayo</h1>
                    <h2 className='text-[--peach-white] md:text-[25px] text-[20px] md:leading-none leading-6'>Fullstack Developer</h2>
                    <p className='text-[--peach-white] md:text-[18px] text-[15px] mt-4'>Specialized in frontend and backend development for websites and web-based applications. Skilled in addressing client needs through effective coding in both areas.</p>
                </div>
                <div className='lg:w-1/2 w-full justify-center px-4'>
                    <img src={banner} alt="Developer" className='mx-auto' width={450} height={433} />
                </div>
            </div>
        </div>
    </>
  )
}

export default Header