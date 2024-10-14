import React, { useState } from 'react'
import DisplayModal from '../../components/DisplayModal'
import ExperienceData from '../../data/experiences.json'
import { createMarkup } from "../../utilities/utils.js";

function Experience() {
    const [showModal, setShowModal] = useState(false)
    const [modalDataDisplay, setModalDataDisplay] = useState({})

    const resume = process.env.PUBLIC_URL + 'assets/images/files/resume.pdf'

    const handleClickedModal = (id) => {
        ExperienceData.map((obj) => {
            if(obj.id === id){
                Object.assign(obj.body, <>
                    <div className='flex flex-col p-2 text-left'>
                        <img src={obj.body.companyLogo} alt='Asiatype Incorporated' width={400} height={150} className='mx-auto'/>
                        <h1 className='text-[--dark-grey] md:text-[20px] text-[18px] leading-normal font-bold'>{obj.title}</h1>
                        <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal font-semibold mt-2'>{obj.subTitle}</h2>
                        <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal font-semibold'>{obj.body.position}</h2>
                        <h3 className='text-[--dark-grey] md:text-[17px] text-[15px] leading-normal font-semibold'>{obj.body.year}</h3>
                        <div className='mt-2'>
                            <ul className='list-disc mx-4'>
                                {
                                    obj.body.responsibilities &&
                                    obj.body.responsibilities.map((val, key)=>{
                                        return (
                                            <li dangerouslySetInnerHTML={createMarkup(val)} key={key}></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </>)
                setModalDataDisplay(obj)
            }
        });
        setShowModal(!showModal)
    }

    const handleCloseModal = () => {
        setShowModal(!showModal)
    }

  return (
    <div className='bg-white my-10 lg:mx-[75px] md:mx-[40px] mx-0 md:py-10 py-4' data-aos='fade-up'>
        <div className='text-center px-6'>
            <h2 className="text-[--peach] md:text-[30px] text-[24px] font-semibold"><strong className='text-[--red]'>Work</strong> Experiences</h2>
            <p className="text-[--dark-grey] md:text-[18px] text-[15px] md:w-[95%] w-100 mx-auto md:leading-normal leading-5 mt-2">The companies below have shaped my growth and allowed me to explore various web technologies. Want to learn more about my experience? Check out and download my resume below.</p>
        </div>
        <DisplayModal showModal={showModal} handleCloseModal={handleCloseModal} data={modalDataDisplay} />
        <div className='flex flex-row flex-wrap lg:mx-[75px] md:mx-[40px] mx-0 md:space-x-2 space-x-0 justify-center pt-4'>
            {
                ExperienceData.map((obj) => {
                    return (
                        <div key={obj.id} className='flip-card bg-white md:w-1/4 w-1/2 flex flex-col justify-center hover:shadow-[--dark-grey] hover:cursor-pointer' onClick={() => handleClickedModal(obj.id)}>
                            <div className="flip-card-img flex flex-wrap w-full" >
                                {
                                    obj.img &&  <img src={obj.img} alt={obj.title} width={400} height={150}/>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='md:w-1/4 px-6 w-full mx-auto'>
            <a href={resume} rel='noopener noreferrer' target="_blank" alt="Download Resume" className='text-center font-bold text-white ring-1 ring-[--dark-red] py-3 rounded-md block my-10 mx-auto bg-[--bright-red] hover:text-[--bright-red] hover:bg-white dark:hover:bg-transparent' download>Download Resume</a>
        </div>
    </div>
  )
}

export default Experience