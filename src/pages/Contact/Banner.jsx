import React from 'react'
import Nav from '../../components/Nav'

function Banner() {
    const banner = process.env.PUBLIC_URL + 'assets/images/contact-banner.png'
    const bg = process.env.PUBLIC_URL + 'assets/images/contact-header.png'
    const myStyle = {
        backgroundImage : "url('" + bg + "')"
    }

  return (
    <>
        <div className='lg:min-h-[90vh] h-auto flex flex-col gap-1 bg-no-repeat bg-cover ' style={myStyle}>    
            <div className='px-6 lg:mx-[75px] md:mx-[40px] mx-0 lg:mt-10 mt-2'>
                <Nav />
                <div className='banner lg:flex flex-row w-full mx-2 items-center justify-around py-6 mt-10'>
                    <div className='lg:w-1/2 w-full px-4 lg:text-start text-center md:order-last order-first'>
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