import React, { useState } from 'react'

function Projects() {
    const business = process.env.PUBLIC_URL + 'assets/images/projects/Business.jpeg'
    const businessEcommerce = process.env.PUBLIC_URL + 'assets/images/projects/Business-eCommerce.jpeg'
    const bpi = process.env.PUBLIC_URL + 'assets/images/projects/Business-Profiles-Inc.jpeg'
    const pts = process.env.PUBLIC_URL + 'assets/images/projects/Project-Tracking-System.jpeg'
    const rdi = process.env.PUBLIC_URL + 'assets/images/projects/RDI.jpeg'
    const resume = process.env.PUBLIC_URL + 'assets/images/files/resume.pdf'

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
            'img' : business
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
            'img' : businessEcommerce
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
            'img' : rdi
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
            'img' : pts
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
            'img' : bpi
        }
    ] 

    const [projects, setProjects] = useState(initialState)

  return (
    <div className='px-6 md:mx-[75px] mx-0 my-10'>
        <div className='flex flex-col'>
            <div className='md:flex flex-col'> 
                <h1 className='text-[--grey] md:text-[25px] text-[15px]'>My</h1>
                <h2 className='text-[--red] md:text-[40px] text-[30px] font-semibold'>Projects</h2>
                <p className='text-[--dark-grey] md:text-[20px] text-[15px] md:leading-7 leading-6 mt-4'></p>
            </div>
            <div className='mt-10 flex flex-wrap gap-2 justify-center'>
                {
                    projects.map((val, key) => {
                        const skills = val.skills
                        return (
                            <div className="card lg:max-w-sm max-w-md border-b shadow-xl rounded-b-lg my-2" key={key}>
                                <div className='flex justify-center '>
                                    <img src={ val.img } alt={ val.title } className='border rounded-t-lg w-full' width={300} height={225}/>
                                </div>
                                <div className='p-4'>
                                    <h1 className='text-[--dark-grey] md:text-[25px] text-[20px] font-bold'>Business Website</h1>
                                    <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] font-medium'>Pointwest Innovations Corp</h2>
                                    <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-2'>Tools and technologies:</p>
                                    <div className="skills min-h-fit flex flex-row flex-wrap w-full mx-auto gap-1 mt-3">
                                        {
                                            skills.map((val1, key1) => {
                                                return (
                                                   <span className='px-3 py-1 text-[--light-red] text-[12px] border rounded-lg border-[--light-red] font-semibold hover:text-white hover:bg-[--light-red]' key={key1}>{ val1 }</span>         
                                                )
                                            })
                                        }
                                    </div>
                                    <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-2'>{ val.description }</p>
                                    <p className='text-[--light-red] md:text-[17px] text-[15px] mt-4'>Role:</p>
                                    <p className='text-[--light-red] md:text-[17px] text-[15px] mt-1'>{ val.role }</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='md:w-1/3 w-full mx-auto'>
            <a href={resume} rel='noopener noreferrer' target="_blank" alt="Download Resume" className='text-center font-bold text-white ring-1 ring-[--dark-red] py-3 rounded-md block my-10 mx-auto bg-[--bright-red] hover:text-[--bright-red] hover:bg-white dark:hover:bg-transparent' download>Download Resume</a>
        </div>
    </div>
  )
}

export default Projects