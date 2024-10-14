import React from 'react'
import Nav from '../../components/Nav'

function Banner() {
    const banner = process.env.PUBLIC_URL + 'assets/images/contact-banner.png'
    const bannerBg = process.env.PUBLIC_URL + 'assets/images/BannerBg.png'
    const myStyle = {
        backgroundImage : "url('" + bannerBg + "')"
    }

  return (
    <>
        <div className='min-h-fit h-auto flex flex-col gap-1 bg-no-repeat bg-cover'>  
            <Nav />
            <div className='h-auto flex flex-col gap-1 bg-no-repeat bg-cover py-10 px-4 lg:bg-gradient-to-r bg-gradient-to-b from-[#D95B5B] via-[#D85656] to-[#F4D0D0] shadow-md'>    
                <div className='banner lg:flex flex-row w-full space-y-6 items-center justify-around py-6 '>
                    <div className='lg:w-1/2 w-full px-4 lg:text-start text-center md:order-last order-first '>
                        <h1 className='text-[--peach-white] md:text-[40px] text-[30px] font-semibold'>Get in touch</h1>
                        <p className='text-[--peach-white] md:text-[18px] text-[15px] mt-4'>If you have any questions, please feel free to send me a message. I promise that I'll get back to you as soon as I can.</p>
                    </div>
                    <div className='lg:w-1/2 w-full justify-center px-4'>
                        <img src={banner} alt="Developer" className='mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner