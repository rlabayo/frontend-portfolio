import React from 'react'
import Banner from './Banner'
import Info from './Info'
import ContactForm from './ContactForm'
import Footer from '../../components/Footer'

function Index() {
  const linkedin = process.env.PUBLIC_URL + 'assets/images/linkedin-black.png'
  const github = process.env.PUBLIC_URL + 'assets/images/github-mark.png'

  return (
    <div className='contact'>
        <Banner />
        <Info />
        {/* <ContactForm /> */}
        <Footer />
        {/* <div className='px-10 flex flex-col justify-end mt-20 mb-10'>
            <h2 className='text-[--red] md:text-[20px] text-[15px] font-semibold ml-auto'>Connect:</h2>
            <div className="mt-4 mb-4 flex-col ml-auto">
              <div className="w-full flex justify-end space-x-4">
                  <a href="https://www.linkedin.com/in/rhealabayo/" alt="LinkedIn">
                      <img src={ linkedin } alt="LinkedIn" className="h-7 w-7 " />
                  </a>
                  <a href="https://github.com/rlabayo" alt="Github">
                      <img src={ github } alt="Github" className="h-7 w-7" />
                  </a>
              </div>
              <div className="w-full text-center">
                  <p className="text-white text-sm">For inquiries, you can contact me at rhea.labayo08@gmail.com</p>
              </div>
          </div>
        </div> */}
    </div>
  )
}

export default Index