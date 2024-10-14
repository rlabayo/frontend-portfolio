import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

function Projects() {
    const [mobileDisplay, setMobileDisplay] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", handleResizeEvent);
    });

    const handleResizeEvent = () => {
        let viewWidth = window.innerWidth
        let smWidth = 952
        
        if(viewWidth > smWidth) {
            setMobileDisplay(false)
        }else {
            setMobileDisplay(true)
        }
    }

    const BusinessProfilesInc = process.env.PUBLIC_URL + 'assets/images/projects/BusinessProfilesInc700x455.png'
    const AsiatypeFutureITServices = process.env.PUBLIC_URL + 'assets/images/projects/AsiatypeFutureITServices700x455.png'
    const RDI = process.env.PUBLIC_URL + 'assets/images/projects/RDI700x455.png'
    const PointwestEON = process.env.PUBLIC_URL + 'assets/images/projects/Pointwest1700x455.png'
    const PointwestICD = process.env.PUBLIC_URL + 'assets/images/projects/Pointwest2700x455.png'
    const BusinessProfilesIncUpdated = process.env.PUBLIC_URL + 'assets/images/projects/BusinessProfilesInc_400x350.png'

    const initialState = [
        {
            'id' : 1,
            'title' : 'Institutional Website',
            'subTitle' : 'Pointwest Innovations Corp',
            'skills' : [
                'CSS', 'CodeIgniter', 'Figma', 'FileZilla', 'GoDaddy', 'Google Maps API', 'Heidi SQL', 'HTML', 'Javascrip', 'MySQL', 'PHP', 'ReactJS', 'Tailwind CSS', 'Visual Studio Code', 'WinSCP'
            ],
            'description' : 'Developed a mobile responsive institutional website that is used to display static and dynamic pages; users can schedule a meeting; register to be a member; and search for services that they might be interested.',
            'role' : 'Front-end developer, Back-end developer',
            'img' : PointwestICD,
            'flip' : false
        },
        {
            'id' : 2,
            'title' : 'Digital banking Website',
            'subTitle' : 'Pointwest Innovations Corp',
            'skills' : [
                'AJAX', 'Bootstrap', 'CSS', 'CodeIgniter', 'Figma', 'Filezilla', 'Google Maps API', 'Heidi SQL', 'HTML', 'Javascript', 'jQuery', 'MySQL', 'Paypal', 'PHP', 'Postman', 'ReactJS', 'Tailwind CSS', 'Visual Studio Code', 'WinSCP'
            ],
            'description' : 'Developed and maintained a responsive digital banking website that is used to display static and dynamic pages; users can use the website for branch locator; product registration and product renewal; viewing and submitting inquiries',
            'role' : 'Front-end developer, Back-end developer',
            'img' : PointwestEON,
            'flip' : false
        },
        {
            'id' : 3,
            'title' : 'Digital Medical Forms',
            'subTitle' : 'Renditions Digital Inc',
            'skills' : [
                'Javascript', 'Vitro API', 'Visual Studio Code'
            ],
            'description' : 'Developed form applications to be used in medical institutions with a goal to become paperless.',
            'role' : 'Front-end developer',
            'img' : RDI,
            'flip' : false
        },
        {
            'id' : 4,
            'title' : 'Project Tracking System',
            'subTitle' : 'Asiatype Incorporated & Future IT Services',
            'skills' : [
                'AJAX', 'Bootstrap', 'CSS', 'CodeIgniter', 'Heidi SQL', 'HTML', 'Javascript', 'jQuery', 'MySQL', 'PHP', 'Visual Studio Code'
            ],
            'description' : 'Worked with a team that developed the Project Tracking System used by the company’s employees. The system is usable to record the project information, task, task assignment, employees, user profile, time recording tally and generating of reports.',
            'role' : 'Front-end developer, Back-end developer',
            'img' : AsiatypeFutureITServices,
            'flip' : false
        },
        {
            'id' : 5,
            'title' : 'Location News Intelligence Website',
            'subTitle' : 'Business Profiles Inc',
            'skills' : [
                'AJAX', 'Bluehost', 'CSS', 'Google Maps API', 'HTML', 'Javascript', 'jQuery', 'MySQL', 'PHP', 'Sublime'
            ],
            'description' : 'Worked with a team to develop websites that provide incident information or relevant topics for partners and readers. These websites use Google Maps for finding the news or incidents of the specific location.',
            'role' : 'Front-end developer, Back-end developer',
            'img' : BusinessProfilesInc,
            'flip' : false
        }
    ] 

    const [projects, setProjects] = useState(initialState)

    const handleClickFlip = (id) => {console.log(id)
        const newState = initialState.map((obj) => {
            if(obj.id === id) {
                return {...obj, flip: !obj.flip}
            }
            return {...obj, flip: false}
        });

        setProjects(newState)
    }

    const handleClickFlipBack = (id) => { console.log('handleClickFlipBack')
        const newState = initialState.map((obj) => {
            if(obj.id === id){
                return {...obj, flip: false}
            }
            return {...obj, flip: false}
        })

        setProjects(newState);
    }

    const handleCloseDetails = (id) => {
        console.log('handleCloseDetails')
        const newState = initialState.map((obj) => {
            if(obj.id === id) {
                return {...obj, flip: false}
            }
            return {...obj, flip: false}
        });

        setProjects(newState)
    }


  return (
    <div className='my-20 p-6 bg-gray-100'>
        <div className='text-center'>
            <h2 className="text-[--peach] md:text-[30px] text-[24px] font-semibold"><strong className='text-[--red]'>Website</strong> Projects</h2>
            <p className="text-[--dark-grey] md:text-[18px] text-[15px] md:w-[95%] w-100 mx-auto md:leading-normal leading-5 mt-2">Update this part of the description.</p>
        </div>
        <div className='mt-10 flex flex-wrap gap-2 justify-center'>
            {
                mobileDisplay ? 
                <Swiper
                slidesPerView={2}
                spaceBetween={50}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                // autoplay={{
                //     delay: 5000
                // }}
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
                                    <div className="card lg:w-1/3 w-full max-w-md shadow-xl rounded-lg rounded-b-lg my-1 md:min-h-1/2 min-h-full bg-cover bg-center mx-auto" key={val.id} style={{width: 350, height: 350,backgroundImage : `url(${val.img})`}} onClick={() => handleClickFlip(val.id)} ></div>
                                    :
                                    <div className="card lg:w-1/3 w-full max-w-md rounded-lg my-1 py-4 bg-white md:min-h-1/2 min-h-full mx-auto" key={val.id}>
                                        <div className='w-full my-auto'>
                                            <div className="w-full text-end">
                                                <button className='ml-auto px-4 font-bold text-[--bright-red]' onClick={() => handleCloseDetails(val.id)}>x</button>
                                            </div>
                                            <div className='px-4 overflow-y-auto md:min-h-[350px] h-[300px] overflow-auto'>
                                                <h1 className='text-[--dark-grey] md:text-[22px] text-[18px] font-bold'>{ val.title }</h1>
                                                <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] font-medium'>{ val.subTitle }</h2>
                                                <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 text-start'>{ val.description }</p>
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
                                                <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 text-start font-bold'>Role:</p>
                                                <p className='text-[--light-red] md:text-[17px] text-[15px] mt-1 text-start'>{ val.role }</p>
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
                        <div className="card w-full max-w-md shadow-xl rounded-lg rounded-b-lg my-1 py-4 bg-white min-h-1/2" key={val.id} onMouseLeave={() => handleClickFlipBack(val.id)} >
                            <div className='w-full my-auto'>
                                {/* <div className="w-full text-end">
                                    <button className='ml-auto px-4 font-bold text-[--bright-red]' onClick={() => handleCloseDetails(val.id)}>x</button>
                                </div> */}
                                <div className='px-4 overflow-y-auto md:min-h-[350px] h-[300px] overflow-auto'>
                                    <h1 className='text-[--dark-grey] md:text-[22px] text-[18px] font-bold'>{ val.title }</h1>
                                    <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] font-medium'>{ val.subTitle }</h2>
                                    <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 text-start'>{ val.description }</p>
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
                                    <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 text-start font-bold'>Role:</p>
                                    <p className='text-[--light-red] md:text-[17px] text-[15px] mt-1 text-start'>{ val.role }</p>
                                </div>
                            </div> 
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Projects