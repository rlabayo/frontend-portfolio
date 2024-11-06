import React from 'react'

function Info() {
    const email = process.env.PUBLIC_URL + 'assets/images/email.png'
    const chat = process.env.PUBLIC_URL + 'assets/images/chat.png'
    const call = process.env.PUBLIC_URL + 'assets/images/call.png'
    const viber = process.env.PUBLIC_URL + 'assets/images/viber-qr.png'

  return (
    <>
        <div className="w-full md:w-3/4 px-10 mx-auto flex flex-wrap justify-center mb-10">
            <div className='text-center md:w-1/2 w-full mt-4 p-4'>
                <img src={email} alt="Email" className="md:w-[100px] w-[75px] mx-auto"/>
                <h1 className='text-[--red] lg:text-[40px] text-[30px] font-semibold'>EMAIL</h1>
                <p className='text-[--dark-grey] text-[18px] leading-normal mt-4 px-4'>Send me an email at rhea.labayo08@gmail.com.</p>
            </div>
            <div className='text-center md:w-1/2 w-full mt-4 p-4'>
                <img src={chat} alt="Chat" className="md:w-[100px] w-[75px] mx-auto"/>
                <h1 className='text-[--red] lg:text-[40px] text-[30px] font-semibold'>CHAT</h1>
                <p className='text-[--dark-grey] text-[18px] leading-normal mt-4 px-4'>
                    Message me at my Viber account.<br></br>
                    Monday-Friday 9:00 - 5:00pm
                </p>
            </div>
            <div className='text-center md:w-1/2 w-full mt-10'>
                <img src={viber} alt="Viber QR" className="md:w-[100px] w-[75px] mx-auto"/>
                <p className='text-[--dark-grey] text-[17px] leading-normal mt-4'>
                Scan QR code for viber account.
                </p>
            </div>
        </div>
    </>
  )
}

export default Info