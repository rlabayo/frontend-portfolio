import React from 'react'

function Footer() {
  const linkedin = process.env.PUBLIC_URL + 'assets/images/linkedin.png'
  const github = process.env.PUBLIC_URL + 'assets/images/github-mark-white.png'

  return (
    <div className="relative bottom-0 bg-gradient-to-t from-[--dark-red] to-[--peach] bg-blend-darken flex flex-col py-10 justify-center ">
          <div className="mt-4 mb-4 flex-col mx-4 items-center space-y-4">
              <div className="w-full flex justify-center space-x-4">
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
          <hr className="h-px my-1 bg-white border-0 text-center mx-auto w-5/6" />
          <p className="text-center text-white text-sm">Copyright &copy; 2024</p>
      </div>
  )
}

export default Footer