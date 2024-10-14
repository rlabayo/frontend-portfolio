import React, { useState } from 'react'

function Experience() {
    const arrowUp = process.env.PUBLIC_URL + 'assets/images/ArrowUp.png'
    const arrowDown = process.env.PUBLIC_URL + 'assets/images/ArrowDown.png'
    const pointwest = process.env.PUBLIC_URL + 'assets/images/company/Pointwest.png'
    const rdi = process.env.PUBLIC_URL + 'assets/images/company/RDI.png'
    const asiatype = process.env.PUBLIC_URL + 'assets/images/company/Asiatype.png'
    const bpi = process.env.PUBLIC_URL + 'assets/images/company/BusinessProfilesInc.png'

    const initialState = [
        {
            'id' : 1,
            'title' : 'Pointwest Innovations Corporation',
            'body' : <>
                <div className='flex flex-col p-4 text-center items-center'>
                    <img src={pointwest} alt="Pointwest" width={400} height={150}/>
                    <h1 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal mt-4 font-semibold'>Software Engineer 3</h1>
                    <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal font-semibold'>August 2019 - present</h2>
                    <p className='md:w-2/3 w-full text-[--dark-grey] md:text-[17px] text-[15px] md:leading-6 leading-6 mt-4'>Pointwest Innovations Corporation is an IT-BPO company. Since joining the company, I have been working with clients in developing and maintaining front end and back end of their websites. Supporting them up to the deployment of the websites.</p>
                </div>
            </>,
            'expand' : false
        },
        {
            'id' : 2,
            'title' : 'Renditions Digital Inc',
            'body' : <>
                <div className='flex flex-col p-4 text-center items-center'>
                    <img src={rdi} alt="Renditions Digital Inc"  width={400} height={150}/>
                    <h1 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal mt-4 font-semibold'>Applications Engineer</h1>
                    <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal font-semibold'>May 2017 - March 2019</h2>
                    <p className='md:w-2/3 w-full text-[--dark-grey] md:text-[17px] text-[15px] md:leading-6 leading-6 mt-4'>Renditions Digital Inc is an IT-BPO company. I have worked with the company communicating with the clients and developing form applications based on the application workflow. Created technical documentation and proposed technical solutions for the applications encountered issues.</p>
                </div>
            </>,
            'expand' : false
        },
        {
            'id' : 3,
            'title' : 'Future IT Services',
            'body' : <>
                <div className='flex flex-col p-4 text-center items-center'>
                    <h1 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal mt-4 font-semibold'>Web Developer</h1>
                    <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal font-semibold'>May 2015 - February 2017</h2>
                    <p className='md:w-2/3 w-full text-[--dark-grey] md:text-[17px] text-[15px] md:leading-6 leading-6 mt-4'>Future IT Services is an IT Services company. I have worked with the company developing front end and back end of the client web application (Project Tracking System). Ensured the operation of the web application and supported the needs of the clients or the users of the web application.</p>
                </div>
            </>,
            'expand' : false
        },
        {
            'id' : 4,
            'title' : 'Asiatype Incorporated',
            'body' : <>
                <div className='flex flex-col p-4 text-center items-center'>
                    <img src={asiatype} alt="Asiatype Incorporated"  width={400} height={150}/>
                    <h1 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal mt-4 font-semibold'>Web Developer</h1>
                    <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal font-semibold'>July 2014 - May 2015</h2>
                    <p className='md:w-2/3 w-full text-[--dark-grey] md:text-[17px] text-[15px] md:leading-6 leading-6 mt-4'>Asiatype Incorporated is a Publishing company. I have worked with the company developing the front end and back end of the web application (Project Tracking System). Supported the needs of the users of the web application.</p>
                </div>
            </>,
            'expand' : false
        },
        {
            'id' : 5,
            'title' : 'Business Profiles Inc',
            'body' : <>
                <div className='flex flex-col p-4 text-center items-center'>
                    <img src={bpi} alt="Business Profiles Inc"  width={400} height={150}/>
                    <h1 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal mt-4 font-semibold'>Web Developer</h1>
                    <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal font-semibold'>August 2012 - July 2014</h2>
                    <p className='md:w-2/3 w-full text-[--dark-grey] md:text-[17px] text-[15px] md:leading-6 leading-6 mt-4'>Business Profiles Inc is a Security Consultancy company. I have worked with the company developing front end and back end of their websites. Ensured the operation of the websites and supported the need of the company researchers regarding the use of the back end website.</p>
                </div>
            </>,
            'expand' : false
        }
        
    ]
    const [experiences, setExperiences] = useState(initialState)

    const handleArrowEvent = (id) => {
        const newState = experiences.map(obj => {
            if (obj.id === id) {
              return {...obj, expand: !obj.expand};
            }
            return {...obj, expand: false};
          });
      
          setExperiences(newState);
    }

  return (
    <div className='px-6 md:mx-[75px] mx-0'>
        <div className='flex flex-col'>
            <div className='md:flex flex-col'> 
                <h1 className='text-[--grey] md:text-[25px] text-[15px]'>My</h1>
                <h2 className='text-[--red] md:text-[40px] text-[30px] font-semibold'>Experiences</h2>
                <p className='text-[--dark-grey] md:text-[20px] text-[15px] md:w-[95%] w-100 mx-auto md:leading-normal leading-5 mt-2'>I’ve been working as a web developer since 2012 and worked with different industries. The companies below are the companies that mold me; help me to grow and experience different web technologies.  </p>
            </div>
            <div className='my-6 space-y-2 mt-10'>
                {
                    experiences.map((val, key) => {
                        return (
                            <div className='bg-white rounded-lg shadow-xl' key={key} >
                                <div className="accordion-header flex flex-row justify-between items-center cursor-pointer rounded-lg p-6 hover:bg-[--peach] text-[--grey] hover:text-white" onClick={() => handleArrowEvent(val.id)}>
                                    <h1 className=' md:text-[25px] text-[17px] font-bold leading-normal'>{ val.title }</h1>
                                    {
                                        val.expand === true ? 
                                        <img src={arrowDown} alt="Arrow down" className="w-5" width={25} height={14} />
                                        :
                                        <img src={arrowUp} alt="Arrow down" className="w-5" width={25} height={14}/>
                                    }
                                </div>
                                {
                                    val.expand === true && 
                                    <div className="accordion-body p-4 border-t">
                                        { val.body }
                                    </div>
                                }
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Experience