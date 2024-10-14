import React, { useState } from 'react'

function MyWebsite() {
    const business = process.env.PUBLIC_URL + 'assets/images/projects/Foodie-Recipe.png'

    const initialState = [
        {
            'id' : 1,
            'title' : 'Foodie Recipe',
            'subTitle' : '',
            'skills' : [
                'Figma', 'GoDaddy', 'Heidi SQL', 'HTML', 'Javascript', 'Laravel 10', 'MySQL', 'PHP', 'PHPUnit', 'Tailwind CSS', 'Visual Studio Code'
            ],
            'description' : <p>Develop a mobile responsive website that is used in posting food recipes. Users can create and update their recipe, add recipe to favorites, they can also follow other profile to easily see its posted recipe. The website still in the process of improvement that is why it is not yet in public use and needs some admin permission before the user can create a recipe. To check out the website, you can visit Foodie Recipe website by this <a href="https://foodierecipe.rhealabayo.com" alt="Foodie Recipe" className='underline'>link</a>.</p>,
            'role' : '',
            'img' : business
        }
    ] 

    const [projects, setProjects] = useState(initialState)

  return (
    <div className='px-6 md:mx-[75px] mx-0 my-10'>
        <div className='flex flex-col'>
            <div className='md:flex flex-col'> 
                <h1 className='text-[--grey] md:text-[25px] text-[15px]'>My</h1>
                <h2 className='text-[--red] md:text-[40px] text-[30px] font-semibold'>Website</h2>
                <p className='text-[--dark-grey] md:text-[20px] text-[15px] md:leading-7 leading-6 mt-4'></p>
            </div>
            <div className='mt-10 flex flex-wrap gap-2 justify-center'>
                {
                    projects.map((val, key) => {
                        const skills = val.skills
                        return (
                            <div className="flex md:flex-row flex-col" key={key}>
                                <div className='my-auto md:w-1/2 w-full shadow-md'>
                                    <img src={ val.img } alt={ val.title } className='border rounded-md' />
                                </div>
                                <div className='p-4 md:w-1/2 w-full'>
                                    <h1 className='text-[--dark-grey] md:text-[25px] text-[20px] font-bold'>{ val.title }</h1>
                                    <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] font-medium'>{ val.subTitle }</h2>
                                    
                                    <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-2'>{ val.description }</p>

                                    <p className='text-[--dark-grey] md:text-[17px] text-[15px] mt-4 font-semibold'>Tools and technologies used:</p>
                                    <div className="skills min-h-fit flex flex-row flex-wrap w-full mx-auto gap-1 mt-3">
                                        {
                                            skills.map((val1, key1) => {
                                                return (
                                                   <span className='px-3 py-1 text-[--light-red] text-[12px] border rounded-lg border-[--light-red] font-semibold hover:text-white hover:bg-[--light-red]' key={key1}>{ val1 }</span>         
                                                )
                                            })
                                        }
                                    </div>
                                    {/* <p className='text-[--light-red] md:text-[17px] text-[15px] mt-4'>Role:</p> */}
                                    {/* <p className='text-[--light-red] md:text-[17px] text-[15px] mt-1'>{ val.role }</p> */}
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

export default MyWebsite