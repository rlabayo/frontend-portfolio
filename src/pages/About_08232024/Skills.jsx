import React, { useState } from 'react'

function Skills() {
    const frontend_skills = [
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/AJAX.svg',
            title : 'AJAX'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/bootstrap.svg',
            title : 'Bootstrap'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/CSS.svg',
            title : 'CSS'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/GoogleMapsAPI.svg',
            title : 'Google Maps API'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/html.svg',
            title : 'HTML'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/javascript.svg',
            title : 'Javascript'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/jQuery.svg',
            title: 'jQuery'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/react.svg',
            title: 'React'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/tailwindcss.svg',
            title: 'Tailwind CSS'
        }
    ]

    const backend_skills = [
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/codeigniter.svg',
            title: 'Codeigniter'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/Laravel.svg',
            title: 'Laravel'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/mysql.svg',
            title: 'MySQL'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/PHP.svg',
            title: 'PHP'
        },
    ]

    const tools = [
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/heidisql.svg',
            title: 'Heidi SQL'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/figma.svg',
            title : 'Figma'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/visualStudioCode.svg',
            title: 'Visual Studio Code'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/Postman.svg',
            title: 'Postman'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/winscp.svg',
            title: 'WinScp'
        }
    ]

    const knowledge_skills_list = [
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/GitHub.svg',
            title: 'Github'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/PHPUnit.svg',
            title: 'PHPUnit'
        }
    ]

    const hosting = [
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/GoDaddy.svg',
            title: 'GoDaddy'
        },
        {
            thumbnail : process.env.PUBLIC_URL + 'assets/images/skills/svg/bluehost.svg',
            title: 'Bluehost'
        },
    ]

    const all = [...backend_skills, ...frontend_skills, ...hosting, ...knowledge_skills_list, ...tools]

    const [data, setData] = useState(all)

    const handleChangeEvent = () => {
        const item = document.getElementById('items').value
        switch(item){
            case 'all':
                setData(all) 
                break;
            case 'frontend':
                setData(frontend_skills) 
                break;
            case 'backend':
                setData(backend_skills)
                break;
            case 'hosting':
                setData(hosting)
                break;
            case 'practicalknowledge':
                setData(knowledge_skills_list)
                break;
            case 'tools':
                setData(tools)
                break;
            default: setData(frontend_skills)
        }
    }
  return (
    <div className='mx-0 bg-gradient-to-t from-[#FDF2F2]/75 to-[#FFFFFF]' >
        <div className='px-6 md:mx-[75px]'>
            <div className='flex flex-col'>
                <div className='md:flex flex-col mt-10'> 
                    <h1 className='text-[--grey] md:text-[25px] text-[15px]'>My</h1>
                    <h2 className='text-[--red] md:text-[40px] text-[30px] font-semibold'>Skills</h2>
                    <p className='text-[--dark-grey] md:text-[20px] text-[15px] md:leading-7 leading-6 mt-4'> </p>
                </div>
                <div className='flex flex-col my-4 w-full space-y-2 mb-20'>
                    <div className='self-end'>
                        <label htmlFor="Skills" className='text-[--dark-grey] md:text-[18px] text-[15px] md:leading-7 leading-6 mt-4 font-semibold'>Skills for: </label>
                        <select name='items' id='items' className='md:w-auto w-full px-7 py-3 text-[--dark-grey] md:text-[18px] text-[15px] font-semibold shadow-md rounded-md' onChange={() => handleChangeEvent()}>
                            <option value="all">All</option>
                            <option value="backend">Back end </option>
                            <option value="frontend">Front end</option>
                            <option value="hosting">Web Hosting</option>
                            <option value="practicalknowledge">Practical Knowledge</option>
                            <option value="tools">Tools</option>
                        </select>
                    </div>
                    
                    <div className='bg-white rounded-lg shadow-md p-6 flex flex-row flex-wrap justify-center items-center'>
                        {
                            data.map((val, key) => {
                                return (
                                    <div className='flex flex-col md:w-1/6 w-1/3 items-center p-5 text-center justify-center' key={key} >
                                        <img src={val.thumbnail} alt={val.title} className="mx-auto" width={200} height={200}/>
                                        <span className='text-[--dark-grey] md:text-[15px] text-[14px] font-semibold'>{val.title}</span>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills