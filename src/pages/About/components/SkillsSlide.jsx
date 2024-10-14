import React from 'react'

function SkillsSlide(props) {
    const { img, title, skills } = props
  return (
    <>
        <div className="w-[90%] bg-white shadow-lg p-4 border border-gray-200 rounded-md my-4 mx-auto md:min-h-1/2 min-h-full max-h-full">
            <div className='md:mt-[-30px] mt-[-25px] w-[25%] mx-auto'>
                <img src={img} alt={title} width={25} height={25} className='mx-auto'/>
            </div>
            <div className='mt-2'>
                <h2 className='text-[--dark-grey] md:text-[17px] text-[15px] font-bold text-center'>{title}</h2>
                <div className='w-full text-start'>
                    <ul>
                        {
                            skills &&
                            skills.map((val, key) => {
                                return (
                                    <li key={key}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base font-medium">{val.name}</span>
                                            <span className="text-sm font-medium">{val.percent}%</span>
                                        </div>
                                        <div className="w-full bg-[--peach-white] rounded-full h-2.5">
                                            <div className="bg-[--peach] h-2.5 rounded-full" style={{width: `${val.percent}%`}}></div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default SkillsSlide