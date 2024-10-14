import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SkillsData from '../../data/skills.json'
import SkillsSlide from './components/SkillsSlide';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import SkillsCard from './components/SkillsCard';

function Skills() {
    const [mobileDisplay, setMobileDisplay] = useState(false)

    const frontend = process.env.PUBLIC_URL + 'assets/images/Frontend.png'
    const backend = process.env.PUBLIC_URL + 'assets/images/Backend.png'
    const others = process.env.PUBLIC_URL + 'assets/images/Others.png'

    const frontendSkills = SkillsData[0].frontend
    const backendSkills = SkillsData[0].backend
    const otherSkills = SkillsData[0].others

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

  return (
    <div className='my-10 lg:mx-[75px] md:mx-[40px] mx-0 md:pt-10 pt-4' data-aos='fade-up'>
        <div className='text-center px-6'>
            <h2 className="text-[--peach] md:text-[30px] text-[24px] font-semibold"><strong className='text-[--red]'>Skills</strong> Overview</h2>
            <p className="text-[--dark-grey] md:text-[18px] text-[15px] md:w-[95%] w-100 mx-auto md:leading-normal leading-5 mt-2">I have over 10 years of experience building websites and web-based applications for companies across various industries. Below is a quick overview of my main technical skills and the tools I use.</p>
        </div>
        <div className='flex md:flex-row flex-wrap my-4 w-full gap-4 justify-center mb-20 mt-20'>
            {
            mobileDisplay ? 
            <>
            <Swiper
                    slidesPerView={2}
                    spaceBetween={50}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000
                    }}
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
                    className="mySwiper rounded-lg w-full mx-auto"
                >
                    <SwiperSlide>
                        <SkillsSlide img={frontend} title="Frontend" skills={frontendSkills}  />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillsSlide img={backend} title="Frontend" skills={backendSkills}  />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillsSlide img={others} title="Frontend" skills={otherSkills}  />
                    </SwiperSlide>
                </Swiper>
            </>
            :
            <>
                <SkillsCard img={frontend} title="Frontend" skills={frontendSkills} />
                <SkillsCard img={backend} title="Backend" skills={backendSkills} />
                <SkillsCard img={others} title="Others" skills={otherSkills} />
            </>
            }
        </div>
    </div>
  )
}

export default Skills