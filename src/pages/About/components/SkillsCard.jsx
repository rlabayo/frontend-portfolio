import React from 'react'

function SkillsCard(props) {
    const { img, title, skills } = props
  return (
    <>
        <div className="md:w-1/4 w-3/4 bg-white shadow-lg p-4 border border-gray-200 rounded-md my-4">
            <div className='md:mt-[-60px] mt-[-55px]'>
                <img src={img} alt={title} width={75} height={75} className='mx-auto'/>
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

export default SkillsCard