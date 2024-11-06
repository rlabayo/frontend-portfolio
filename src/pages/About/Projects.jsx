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
    const foodierecipe = process.env.PUBLIC_URL + "assets/images/projects/Foodierecipe.png"

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
    
    const handleFlip = (id) => {
        const newState = projects.map((obj) => {
            if(obj.id === id) {
                return {...obj, flip: !obj.flip}
            }
            return {...obj, flip: false}
        });

        setProjects(newState)
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
    <div className='bg-gradient-to-t from-[#fff9f99e] to-[#FDF2F2]' data-aos='fade-up'>
        <div className='lg:mx-[75px] md:mx-[40px] mx-0 pt-10'>
            <div className='text-center px-6 mt-4'>
                <h2 className="text-[--peach] md:text-[30px] text-[24px] font-semibold"><strong className='text-[--red]'>Website</strong> Projects</h2>
                <p className="text-[--dark-grey] text-[18px] md:w-[95%] w-100 mx-auto leading-normal mt-2">Each project highlights my skills in frontend and backend development, showcasing my ability to create responsive, user-friendly web applications. Explore the details to see the technologies used and the projects I've developed and maintained.</p>
            </div>
        </div>
        <div className='w-full mt-10 pb-10 px-6'>
            <div className='flex flex-wrap gap-2 justify-center'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    loop={true}
                    breakpoints={{
                        250: {
                        slidesPerView: 1,
                        spaceBetween: 10
                        },
                        640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        },
                        768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        },
                        1024: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        },
                        1180: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                        }
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper rounded-lg w-full"
                >
                {
                    projects.map((val, key) => {
                        const imgDisplay = mobileDisplay ? val.mobileImg : val.img
                        return (
                            <SwiperSlide key={val.id}>
                                {
                                    val.flip === false ?
                                    <div className="card w-full rounded-lg rounded-b-lg my-1 md:h-[360px] h-[360px] min-h-full bg-cover bg-center mx-auto cursor-pointer" key={val.id} style={{height: 360,backgroundImage : `url(${imgDisplay})`}} onClick={() => handleFlip(val.id)} ></div>
                                    :
                                    <div className="card w-full shadow-2xl shadow-[--peach-white] border-2 border-[--peach-white] rounded-lg rounded-b-lg my-1 bg-white md:h-[360px] h-[360px] min-h-full mx-auto" key={val.id}>
                                        <div className='w-full my-auto'>
                                            <div className="w-full text-end">
                                                <button className='ml-auto px-2 font-bold text-[--bright-red] mr-1 mt-1' onClick={() => handleCloseDetails(val.id)}>x</button>
                                            </div>
                                            <div className='px-6 py-2 overflow-y-auto md:min-h-[320px] h-[320px] overflow-auto'>
                                                <h1 className='text-[--dark-grey] md:text-[22px] text-[18px] font-bold'>{ val.title }</h1>
                                                <div className='text-[--dark-grey] text-[17px] mt-4 text-start'>
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
            </div>
        </div>
        <div className='lg:mx-[75px] md:mx-[40px] mx-0 mt-4' data-aos='fade-up'>
            <div className='text-center px-6'>
                <h2 className="text-[--peach] md:text-[30px] text-[24px] font-semibold"><strong className='text-[--red]'>Personal</strong> Website Project</h2>
                <p className="text-[--dark-grey] text-[18px] md:w-[95%] w-100 mx-auto leading-normal mt-2">Foodie Recipe is a web application designed to help users organize and share their favorite recipes. It allows them to easily note the ingredients and instructions for dishes they've cooked, making it a convenient tool for food enthusiasts to track their culinary adventures.</p>
                <div className='mx-auto'>
                    <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 text-center font-bold'>Tools and technologies:</p>
                    <div className='flex flex-wrap justify-center space-x-2 items-center mt-2'>
                        <span className='px-3 py-1 mt-1 text-[--light-red] text-[12px] border rounded-lg border-[--light-red] font-semibold hover:text-white hover:bg-[--light-red]' >Laravel</span>
                        <span className='px-3 py-1 mt-1 text-[--light-red] text-[12px] border rounded-lg border-[--light-red] font-semibold hover:text-white hover:bg-[--light-red]' >Laravel Blade</span>
                        <span className='px-3 py-1 mt-1 text-[--light-red] text-[12px] border rounded-lg border-[--light-red] font-semibold hover:text-white hover:bg-[--light-red]' >JavaScript</span>
                        <span className='px-3 py-1 mt-1 text-[--light-red] text-[12px] border rounded-lg border-[--light-red] font-semibold hover:text-white hover:bg-[--light-red]' >JQuery</span>
                        <span className='px-3 py-1 mt-1 text-[--light-red] text-[12px] border rounded-lg border-[--light-red] font-semibold hover:text-white hover:bg-[--light-red]' >TailwindCSS</span>
                        <span className='px-3 py-1 mt-1 text-[--light-red] text-[12px] border rounded-lg border-[--light-red] font-semibold hover:text-white hover:bg-[--light-red]' >Hostinger Web Hosting</span>
                        <span className='px-3 py-1 mt-1 text-[--light-red] text-[12px] border rounded-lg border-[--light-red] font-semibold hover:text-white hover:bg-[--light-red]' >Github</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col w-full mt-10 pb-10 px-6 text-center'>
            <div className='flex flex-wrap gap-2 justify-center'></div>
            <img src={foodierecipe} alt="Foodie Recipe" width={800} height={700} className='mx-auto' loading='lazy'/>
            <i className='lg:w-1/2 md:w-2/3 w-full mx-auto text-[--dark-grey] text-sm mt-2 text-center'>Note: The creation of new accounts is restricted; only the website owner can manage user accounts, as this web application is intended for personal use at this time. <br></br>To log in, use this test account for testing purposes only. Username: testuser@yahoo.com, Password: password12345</i>
   
            <a href="https://foodierecipe.rhealabayo.site" target="_blank" rel="noopener noreferrer" className='text-sm text-center font-bold text-white ring-1 ring-[--dark-red] md:p-3 p-2 rounded-md block mt-10 mb-2 mx-auto bg-[--bright-red] hover:text-[--bright-red] hover:bg-white dark:hover:bg-transparent'>Visit Website</a>
        </div>
    </div>
  )
}

export default Projects