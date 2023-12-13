import React from 'react'

function Info() {
    const email = process.env.PUBLIC_URL + 'assets/images/email.png'
    const chat = process.env.PUBLIC_URL + 'assets/images/chat.png'
    const call = process.env.PUBLIC_URL + 'assets/images/call.png'
    const viber = process.env.PUBLIC_URL + 'assets/images/viber-qr.png'
    const linkedin = process.env.PUBLIC_URL + 'assets/images/linkedin-black.png'
    const github = process.env.PUBLIC_URL + 'assets/images/github-mark.png'
  return (
    <>
        <div className="px-10 mx-auto flex flex-wrap justify-center">
            <div className='text-center md:w-1/3 w-full mt-4'>
                <img src={email} alt="Email" className="md:w-[100px] w-[75px] mx-auto"/>
                <h1 className='text-[--red] lg:text-[40px] text-[30px] font-semibold'>EMAIL</h1>
                <p className='text-[--dark-grey] lg:text-[20px] text-[15px] md:leading-7 leading-6 mt-4'>Send me an email at rhea.labayo08@gmail.com.</p>
            </div>
            <div className='text-center md:w-1/3 w-full mt-4'>
                <img src={call} alt="Call" className="md:w-[100px] w-[75px] mx-auto"/>
                <h1 className='text-[--red] lg:text-[40px] text-[30px] font-semibold'>CALL</h1>
                <p className='text-[--dark-grey] lg:text-[20px] text-[15px] md:leading-7 leading-6 mt-4'>
                    Call me at my Viber account.<br></br>
                    Monday-Saturday 9:00 - 5:00pm
                </p>
            </div>
            <div className='text-center md:w-1/3 w-full mt-4'>
                <img src={chat} alt="Chat" className="md:w-[100px] w-[75px] mx-auto"/>
                <h1 className='text-[--red] lg:text-[40px] text-[30px] font-semibold'>CHAT</h1>
                <p className='text-[--dark-grey] lg:text-[20px] text-[15px] md:leading-7 leading-6 mt-4'>
                    Chat me at my Viber account.<br></br>
                    Monday-Saturday 9:00 - 5:00pm
                </p>
            </div>
            <div className='text-center md:w-1/3 w-full mt-10'>
                <img src={viber} alt="Viber QR" className="md:w-[100px] w-[75px] mx-auto"/>
                <p className='text-[--dark-grey] lg:text-[20px] text-[15px] md:leading-7 leading-6 mt-4'>
                Scan QR code for viber account.
                </p>
            </div>
        </div>
        <div className='px-10 flex flex-col justify-end mt-20 mb-10'>
            <h2 className='text-[--red] md:text-[20px] text-[15px] font-semibold ml-auto'>Connect:</h2>
            <div className="mt-4 mb-4 flex-col ml-auto">
              <div className="w-full flex justify-end space-x-4">
                  <a href="https://www.linkedin.com/in/rhealabayo/" alt="LinkedIn">
                      <img src={ linkedin } alt="LinkedIn" className="h-7 w-7 " />
                  </a>
                  <a href="https://github.com/rlabayo" alt="Github">
                      <img src={ github } alt="Github" className="h-7 w-7" />
                  </a>
              </div>
              <div className="w-full text-center">
                  <p className="text-white text-sm">For inquiries, you can contact me at rhea.labayo08@gmail.com</p>
              </div>
          </div>
        </div>
    </>
  )
}

export default Info