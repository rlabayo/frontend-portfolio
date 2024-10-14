import React from 'react'
import ReactDOM from 'react-dom'

function DisplayModal({showModal, handleCloseModal, data}){
    return ReactDOM.createPortal(
        <div>
            {
                showModal ? 
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-4xl">
                                <div className='w-full text-end'>
                                    <button className="py-1 text-[--red] font-bold px-3 hover:text-gray-300" id="close" onClick={handleCloseModal}>X</button>
                                </div>
                                <div className='pb-4 px-4 overflow-y-auto'>
                                    { data.body }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </div>,
        document.getElementById('modal-root')
    )
}

export default DisplayModal