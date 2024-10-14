import React from 'react'

function Home() {
    const developer = process.env.PUBLIC_URL + 'assets/images/developer.svg'

  return (
    <div className='Home'>
        <div className='min-h-screen flex flex-col items-center justify-center gap-1'>
            <div>
                <h1 className='text-[--peach-white] text-2xl' style={{ marginBlockStart: 0, marginBlockEnd: 0}}>Hi, my name is</h1>
            </div>
            <div>
                <h2 className='text-white text-5xl font-semibold '>Rhea Labayo</h2>
            </div>
            <div>
                <img src={developer} alt="Developer" />
            </div>
            <div className='md:w-1/2 w-full'>
                <h3 className='text-[--dark-grey] text-2xl font-semibold px-4 text-center'>I am a fullstack developer specializing in frontend and backend web development.</h3>
            </div>
            {/* <div>
                <p className='text-[--dark-grey] text-lg px-4 text-center'>I’m a Web Developer based in the Philippines, I enjoy creating websites.</p>
            </div> */}
            <div className='mt-10'>
                <a href='/about' className='text-[--peach-white] bg-[--dark-red] font-bold rounded-[15px] py-[12px] px-[51px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)] hover:bg-transparent hover:text-[--bright-red] hover:ring-1 hover:ring-[--bright-red]'>Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default Home