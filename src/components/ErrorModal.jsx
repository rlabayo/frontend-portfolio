import React from 'react'
import ReactDOM from 'react-dom'

function ErrorModal({showModal, handleCloseModal}) {
    return ReactDOM.createPortal(
        <div>
            {
            showModal ?
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg dark:bg-gray-900">
                            <div className="flex-row md:w-full w-full h-full mx-auto">
                                <div className="flex flex-col gap-4 w-full h-3/4 items-center justify-center py-10">
                                    <p className="rounded-full border-1 ring-2 ring-red-500 bg-red-500 py-3 px-5">
                                        <span className="text-white text-4xl">&times;</span>
                                    </p>
                                    <p className="text-black dark:text-white">Failed submitting a message.</p>
                                </div>
                                <div>
                                    <button className="flex flex-row w-full h-1/4 bg-[#8A0A0A] py-4 justify-center items-center text-white font-bold px-2 hover:text-gray-300" id="close" onClick={handleCloseModal}>Please try again</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>:
            <></>
        }</div>,
    document.getElementById('modal-root')
    )
}

export default ErrorModal