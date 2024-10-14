import React from 'react'
import Nav from '../../components/Nav'

function Header() {
    const banner = process.env.PUBLIC_URL + 'assets/images/About-banner.png'
    const bg = process.env.PUBLIC_URL + 'assets/images/about-header.png'
    const myStyle = {
        backgroundImage : "url('" + bg + "')"
    }

  return (
    <>
        <div className='lg:min-h-screen min-h-fit h-auto flex flex-col gap-1 bg-no-repeat bg-cover' style={myStyle}>    
            <div className='px-6 lg:mx-[75px] md:mx-[40px] mx-0 lg:mt-10 mt-2'>
                <Nav />
                <div className='banner lg:flex flex-row w-full mx-2 space-y-6 items-center justify-around py-6'>
                    <div className='lg:w-1/2 w-full px-4 lg:text-start text-center'>
                        <h1 className='text-[--peach-white] md:text-[40px] text-[30px] font-semibold'>Software Engineer</h1>
                        <h2 className='text-[--peach-white] md:text-[25px] text-[20px] md:leading-none leading-6'>Front end and back end web developer</h2>
                        <p className='text-[--peach-white] md:text-[18px] text-[15px] mt-4'>Developer with more than ten years of experience in web development projects in different industries. Eager to support and develop the needs of the client with good coding skills in developing back-end and front-end websites. Improving and learning new web technologies to offer the best services.</p>
                    </div>
                    <div className='lg:w-1/2 w-full justify-center px-4'>
                        <img src={banner} alt="Developer" className='mx-auto' width={450} height={433} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header