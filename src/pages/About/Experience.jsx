import React, {useState} from 'react'
import ExperienceData from '../../data/experiences.json'
import { createMarkup } from "../../utilities/utils.js";

function Experience() {
    const arrowUp = process.env.PUBLIC_URL + 'assets/images/ArrowUp.png'
    const arrowDown = process.env.PUBLIC_URL + 'assets/images/ArrowDown.png'
    const resume = process.env.PUBLIC_URL + 'assets/images/files/resume.pdf'

    const [experiences, setExperiences] = useState(ExperienceData)

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
    <div className='bg-white my-10 lg:mx-[75px] md:mx-[40px] mx-0 md:py-10 py-4' data-aos='fade-up'>
        <div className='text-center px-6'>
            <h2 className="text-[--peach] md:text-[30px] text-[24px] font-semibold"><strong className='text-[--red]'>Work</strong> Experiences</h2>
            <p className="text-[--dark-grey] md:text-[18px] text-[15px] md:w-[95%] w-100 mx-auto md:leading-normal leading-5 mt-2">The companies below have shaped my growth and allowed me to explore various web technologies.</p>
        </div>
        <div className='my-6 space-y-2 mt-10'>
            {
                experiences.map((val, key) => {
                    return (
                        <div className='bg-white rounded-lg shadow-xl w-5/6 mx-auto' key={key} >
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
                                <div className="accordion-body px-4 py-2">
                                    <div className='md:px-4 px-1 py-2'>
                                        <div className='flex flex-col px-2 pb-4 text-left'>
                                            <img src={val.body.companyLogo} alt='Asiatype Incorporated' width={400} height={150} className='mx-auto'/>
                                            <h1 className='text-[--dark-grey] md:text-[20px] text-[18px] leading-normal font-bold'>{val.title}</h1>
                                            <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal font-semibold mt-2'>{val.subTitle}</h2>
                                            <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal font-semibold'>{val.body.position}</h2>
                                            <h3 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal font-semibold'>{val.body.year}</h3>
                                            <div className='mt-2'>
                                                <ul className='list-disc md:mx-4 mx-2'>
                                                    {
                                                        val.body.responsibilities &&
                                                        val.body.responsibilities.map((val, key)=>{
                                                            return (
                                                                <li dangerouslySetInnerHTML={createMarkup(val)} key={key}></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
        <div className='md:w-1/4 px-6 w-full mx-auto'>
            {/* <a href={resume} target="_blank" rel='noopener noreferrer' alt="View Resume" className='text-center font-bold text-white ring-1 ring-[--dark-red] py-3 rounded-md block my-10 mx-auto bg-[--bright-red] hover:text-[--bright-red] hover:bg-white dark:hover:bg-transparent' download>View full resume</a> */}
            <a href={resume} target="_blank" rel='noopener noreferrer' alt="View Resume" className='text-sm text-center font-bold text-white ring-1 ring-[--dark-red] md:p-3 p-2 rounded-md block mt-10 mb-2 mx-auto bg-[--bright-red] hover:text-[--bright-red] hover:bg-white dark:hover:bg-transparent'>
                View full Resume
            </a>
        </div>
    </div>
  )
}

export default Experience