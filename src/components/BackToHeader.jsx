import React, { useState, useEffect } from 'react'

function BackToHeader() {
  const arrowUp = process.env.PUBLIC_URL + 'assets/images/arrow-up.png'
  const [showArrowUp, setShowArrowUp] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
  });

  const handleScrollEvent = () => {
    let viewHeight = window.innerHeight
    let scrollHeight = window.scrollY

    if(viewHeight < scrollHeight){
        setShowArrowUp(true)
    }else{
        setShowArrowUp(false)
    }
  }
  return (
    <>
        {
            showArrowUp &&
            <div className="fixed bottom-0 right-0 z-20 mr-4">
                <a href="#" alt="Arrow Up">
                    <img src={arrowUp} alt="Arrow Up" />
                </a>
            </div>
        }
    </>
  )
}

export default BackToHeader