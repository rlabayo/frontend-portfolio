import React from 'react'

function Home() {
    const developer = process.env.PUBLIC_URL + 'assets/images/developer.svg'

  return (
    <div className='Home'>
        <div className='min-h-screen flex flex-col items-center justify-center gap-1'>
            <div>
                <h1 className='text-[--peach-white] md:text-[25px] text-[15px]' style={{ marginBlockStart: 0, marginBlockEnd: 0}}>Hi, my name is</h1>
            </div>
            <div>
                <h2 className='text-[--bright-red] md:text-[60px] text-[50px] font-semibold '>Rhea Labayo</h2>
            </div>
            <div>
                <img src={developer} alt="Developer" />
            </div>
            <div>
                <h3 className='text-[--dark-grey] md:text-[40px] text-[30px] font-semibold'>I develop things for web</h3>
            </div>
            <div>
                <p className='text-[--dark-grey] md:text-[25px] text-[15px] text-center'>I’m a software engineer based in the Philippines, specializing in building of websites.</p>
            </div>
            <div className='mt-10'>
                <a href='/about' className='text-[--peach-white] bg-[--dark-red] font-bold rounded-[15px] py-[12px] px-[51px] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)] hover:bg-[--peach] hover:text-[--dark-grey]'>Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default Home