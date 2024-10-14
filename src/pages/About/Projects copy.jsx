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
    const business = process.env.PUBLIC_URL + 'assets/images/projects/Business.jpeg'
    const businessEcommerce = process.env.PUBLIC_URL + 'assets/images/projects/Business-eCommerce.jpeg'
    const bpi = process.env.PUBLIC_URL + 'assets/images/projects/Business-Profiles-Inc.jpeg'
    const pts = process.env.PUBLIC_URL + 'assets/images/projects/Project-Tracking-System.jpeg'
    const rdi = process.env.PUBLIC_URL + 'assets/images/projects/RDI.jpeg'

    const initialState = [
        {
            'id' : 1,
            'title' : 'Business Website',
            'subTitle' : 'Pointwest Innovations Corp',
            'skills' : [
                'CSS', 'CodeIgniter', 'Figma', 'FileZilla', 'GoDaddy', 'Google Maps API', 'Heidi SQL', 'HTML', 'Javascrip', 'MySQL', 'PHP', 'ReactJS', 'Tailwind CSS', 'Visual Studio Code', 'WinSCP'
            ],
            'description' : 'Develop a mobile responsive business website that is used to display static and dynamic pages; users can schedule a meeting; register to be a member; and search for services that they might be interested.',
            'role' : 'Front-end developer, Back-end developer',
            'img' : business,
            'flip' : false
        },
        {
            'id' : 2,
            'title' : 'Marketing and eCommerce Website',
            'subTitle' : 'Pointwest Innovations Corp',
            'skills' : [
                'AJAX', 'Bootstrap', 'CSS', 'CodeIgniter', 'Figma', 'Filezilla', 'Google Maps API', 'Heidi SQL', 'HTML', 'Javascript', 'jQuery', 'MySQL', 'Paypal', 'PHP', 'Postman', 'ReactJS', 'Tailwind CSS', 'Visual Studio Code', 'WinSCP'
            ],
            'description' : 'Maintained the client\'s previous eCommerce website. Developed and maintained a responsive marketing website that is used to display static and dynamic pages; users can use the website for branch locator; product registration and product renewal; viewing and submitting inquiries',
            'role' : 'Front-end developer, Back-end developer',
            'img' : businessEcommerce,
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
            'img' : rdi,
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
            'img' : pts,
            'flip' : false
        },
        {
            'id' : 5,
            'title' : 'Business and Location Intelligence Website',
            'subTitle' : 'Business Profiles Inc',
            'skills' : [
                'AJAX', 'Bluehost', 'CSS', 'Google Maps API', 'HTML', 'Javascript', 'jQuery', 'MySQL', 'PHP', 'Sublime'
            ],
            'description' : 'Worked with a team to develop websites that provide incident information or relevant topics for partners and readers. These websites use Google Maps for finding the news or incidents of the specific location.',
            'role' : 'Front-end developer, Back-end developer',
            'img' : bpi,
            'flip' : false
        }
    ] 

    const [projects, setProjects] = useState(initialState)

    const handleHoverFlip = (id) => {
        const newState = initialState.map((obj) => {
            if(obj.id === id) {
                return {...obj, flip: !obj.flip}
            }
            return {...obj, flip: false}
        });

        setProjects(newState)
    }

    const handleCloseDetails = (id) => {
        const newState = initialState.map((obj) => {
            if(obj.id === id) {
                return {...obj, flip: false}
            }
            return {...obj, flip: false}
        });

        setProjects(newState)
    }


  return (
    <div className='my-20 p-6 bg-[--peach]'>
        <div className='text-center'>
            <h2 className="text-[--peach] md:text-[30px] text-[24px] font-semibold"><strong className='text-[--red]'>Website</strong> Projects</h2>
            <p className="text-[--dark-grey] md:text-[18px] text-[15px] md:w-[95%] w-100 mx-auto md:leading-normal leading-5 mt-2">Update this part of the description.</p>
        </div>
        <div className='lg:mx-[75px] md:mx-[40px] mx-0'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
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
                className="mySwiper h-full my-4"
            >
                {
                    projects.map((val, key) => {
                        return (
                            <>
                                <SwiperSlide key={key}>
                                    <div className='h-1/2'>
                                        {
                                            val.flip === false ?
                                            <div className='w-full' onMouseEnter={() => handleHoverFlip(val.id)}>
                                                <img src={ val.img } alt={ val.title } className='border rounded-lg w-full' width={300} height={225}/>
                                            </div> 
                                            :
                                            <div className='w-full'>
                                                <button className='absolute right-0 px-4 font-bold text-[--bright-red]' onClick={() => handleCloseDetails(val.id)}>x</button>
                                                <div className='pb-4 px-4 overflow-y-auto h-[295px] overflow-auto py-4'>
                                                    <h1 className='text-[--dark-grey] md:text-[25px] text-[20px] font-bold'>{ val.title }</h1>
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
                                        }
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Projects