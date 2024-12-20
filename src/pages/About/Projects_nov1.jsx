import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectData from '../../data/projects.json'
import { createMarkup } from "../../utilities/utils.js";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function Projects() {
    const [mobileDisplay, setMobileDisplay] = useState(false)
    const [projects, setProjects] = useState(ProjectData)

    useEffect(() => { 
        window.addEventListener("resize", handleResizeEvent);
    }, []);

    const handleResizeEvent = () => {
        let viewWidth = window.innerWidth
        let smWidth = 952
        
        if(viewWidth > smWidth) {
            setMobileDisplay(false)
        }else {
            setMobileDisplay(true)
        }
    }
    
    const handleClickFlip = (id) => {
        const newState = projects.map((obj) => {
            if(obj.id === id) {
                return {...obj, flip: !obj.flip}
            }
            return {...obj, flip: false}
        });

        setProjects(newState)
    }

    const handleClickFlipBack = (id) => { 
        const newState = projects.map((obj) => {
            if(obj.id === id){
                return {...obj, flip: false}
            }
            return {...obj, flip: false}
        })

        setProjects(newState);
    }

    const handleCloseDetails = (id) => {
        const newState = projects.map((obj) => {
            if(obj.id === id) {
                return {...obj, flip: false}
            }
            return {...obj, flip: false}
        });

        setProjects(newState)
    }

  return (
    <div className='shadow-md py-4 bg-gradient-to-b from-[#ffffff] to-[#FDF2F2]' data-aos='fade-up'>
        <div className='lg:mx-[75px] md:mx-[40px] mx-0 pt-10'>
            <div className='text-center px-6'>
                <h2 className="text-[--peach] md:text-[30px] text-[24px] font-semibold"><strong className='text-[--red]'>Website</strong> Projects</h2>
                <p className="text-[--dark-grey] md:text-[18px] text-[15px] md:w-[95%] w-100 mx-auto md:leading-normal leading-5 mt-2">Each project highlights my skills in frontend and backend development, showcasing my ability to create responsive, user-friendly web applications. Explore the details to see the technologies used and the projects I've developed and maintained.</p>
            </div>
        </div>
        <div className='w-full mt-10 pb-10 px-6'>
            <div className=' flex flex-wrap gap-2 justify-center'>
                {
                    mobileDisplay ? 
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={50}
                        loop={true}
                        breakpoints={{
                            250: {
                            slidesPerView: 1,
                            spaceBetween: 10
                            },
                            640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            },
                            768: {
                            slidesPerView: 2,
                            spaceBetween: 25,
                            },
                            1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            },
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper rounded-lg w-full"
                    >
                    {
                        projects.map((val, key) => {
                            return (
                                <SwiperSlide key={val.id}>
                                    {
                                        val.flip === false ?
                                        <div className="card lg:w-1/3 w-full max-w-md rounded-lg rounded-b-lg my-1 md:min-h-1/2 min-h-full bg-cover bg-center mx-auto" key={val.id} style={{height: 360,backgroundImage : `url(${val.img})`}} onClick={() => handleClickFlip(val.id)} ></div>
                                        :
                                        <div className="card lg:w-1/3 w-full max-w-md shadow-xl rounded-lg rounded-b-lg my-1 bg-white md:h-[360px] h-[360px] min-h-full mx-auto" key={val.id}>
                                            <div className='w-full my-auto'>
                                                <div className="w-full text-end">
                                                    <button className='ml-auto px-4 font-bold text-[--bright-red]' onClick={() => handleCloseDetails(val.id)}>x</button>
                                                </div>
                                                <div className='px-6 overflow-y-auto md:min-h-[330px] h-[280px] overflow-auto'>
                                                    <h1 className='text-[--dark-grey] md:text-[22px] text-[18px] font-bold'>{ val.title }</h1>
                                                    <div className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 text-start'>
                                                        { val.body.intro }
                                                        { 
                                                            val.body.features &&
                                                            <ul className='list-disc mx-6 py-2'>
                                                                {
                                                                    val.body.features.map((val, key) => {
                                                                        return (
                                                                            <li dangerouslySetInnerHTML={createMarkup(val)} key={key}></li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        }
                                                        { val.body.finale }
                                                    </div>
                                                    <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 text-start font-bold'>Role: </p>
                                                    <p className='text-[--light-red] md:text-[17px] text-[15px] mt-1 text-start'>{ val.role }</p>
                                                    <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 text-start font-bold'>Tools and technologies:</p>
                                                    <div className="skills min-h-fit flex flex-row flex-wrap w-full mx-auto gap-1 mt-3">
                                                        {
                                                            val.skills.map((val1, key1) => {
                                                                return (
                                                                <span className='px-3 py-1 text-[--light-red] text-[12px] border rounded-lg border-[--light-red] font-semibold hover:text-white hover:bg-[--light-red]' key={key1}>{ val1 }</span>         
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    }
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                    :
                    projects.map((val, key) => {
                        return (
                            val.flip === false ?
                            <div className="card lg:w-1/3 w-full max-w-md shadow-xl rounded-lg rounded-b-lg my-1 md:min-h-1/2 min-h-full bg-cover bg-center" key={val.id} style={{width: 450, height: 400,backgroundImage : `url(${val.img})`}} onMouseEnter={() => handleClickFlip(val.id)} > </div>
                            :
                            <div className="card w-full max-w-md shadow-xl rounded-lg rounded-b-lg my-2 py-4 px-2 bg-white min-h-1/2 hover:border-1 hover:shadow-[--peach]" key={val.id} onMouseLeave={() => handleClickFlipBack(val.id)} >
                                <div className='w-full my-auto'>
                                    <div className='px-4 overflow-y-auto md:min-h-[350px] h-[300px] overflow-auto'>
                                        <h1 className='text-[--dark-grey] md:text-[22px] text-[18px] font-bold text-center'>{ val.title }</h1>
                                        <div className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 text-start'>
                                            { val.body.intro }
                                            { 
                                                val.body.features &&
                                                <ul className='list-disc mx-6 py-2'>
                                                    {
                                                        val.body.features.map((val, key) => {
                                                            return (
                                                                <li dangerouslySetInnerHTML={createMarkup(val)} key={key}></li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            }
                                            { val.body.finale }
                                        </div>
                                        <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 text-start font-bold'>Role:</p>
                                        <p className='text-[--light-red] md:text-[17px] text-[15px] mt-1 text-start'>{ val.role }</p>
                                        <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 text-start font-bold'>Tools and technologies:</p>
                                        <div className="skills min-h-fit flex flex-row flex-wrap w-full mx-auto gap-1 mt-3">
                                            {
                                                val.skills.map((val1, key1) => {
                                                    return (
                                                    <span className='px-3 py-1 text-[--light-red] text-[12px] border rounded-lg border-[--light-red] font-semibold hover:text-white hover:bg-[--light-red]' key={key1}>{ val1 }</span>         
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Projects