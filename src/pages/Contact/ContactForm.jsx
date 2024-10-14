import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import ErrorMessage from '../../components/ErrorMessage'
import SuccessModal from '../../components/SuccessModal'
import ErrorModal from '../../components/ErrorModal'


function ContactForm() {
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    
    const { register, handleSubmit, reset, formState: { errors }} = useForm({
        defaultValues : {
            name : '',
            email : '',
            subject : '',
            message : ''
        }
    })
    const header = {
        headers: {
            'Accept' : 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods' : 'POST',
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Credentials' : 'true',
            'Authorization' : 'Bearer ' + process.env.REACT_APP_API_AUTH
        },
        responseType:'json',
    }
    const onSubmit = (data) => {
        const param = { name : data.name, email: data.email, subject: data.subject, message: data.message }
        const url = process.env.REACT_APP_API_BACKEND_URL
        
        axios.post(url + '/api/message', param, header)
            .then((res) => {console.log(res.status)
                if(res.status === 201) {
                    setShowSuccessModal(true)
                }else {
                    setShowErrorModal(true)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleSuccessCloseModal = () => {
        setShowSuccessModal(false)
        window.location.reload()
    }

    const handleErrorCloseModal = () => {
        setShowErrorModal(false)
    }

  return (
    <>
        <div className="w-full mt-10 py-20 px-4 mx-auto bg-gradient-to-b from-[#EAA2A2]/10 to-white">
            <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2 mx-auto shadow-md px-6 pt-20 pb-10 bg-white rounded-xl'>
                <div className="space-y-6">
                    <div className="border-b border-gray-900/10 text-start dark:border-white/20">
                        <h2 className="text-4xl font-semibold leading-7 text-gray-900 text-center">Message Me</h2>
                        <p className="mt-4 text-[17px] leading-4 text-gray-600 text-center">This information will be sent privately and will read it as soon as possible.</p>
                        <div className="my-4">
                            <label className="block font-medium text-sm text-start text-gray-700 " htmlFor="name">Name</label>
                            <input type="text" className='py-2 px-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full ring-1 ring-gray-300 dark:text-black' placeholder='Name' 
                            {...register('name', { required:true, minLength:5, validate: {
                                matchPattern: (v) => /^[a-zA-Z ]+$/.test(v)
                            }})}
                            aria-invalid={errors.name ? 'true' : 'false'}
                            />
                            <ErrorMessage type={errors.name?.type} elementName='Name' min={5} />
                        </div>
                        <div className="my-4">
                            <label className="block font-medium text-sm text-start text-gray-700 " htmlFor="name">Email</label>
                            <input type="text" className='py-2 px-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 outline-none rounded-md shadow-sm block mt-1 w-full ring-1 ring-gray-300 dark:text-black' placeholder='Email' 
                            {...register('email', { required:true, minLength:5, pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format",
                              }, })}
                            aria-invalid={errors.email ? 'true' : 'false'}
                            />
                            <ErrorMessage type={errors.email?.type} errorMessage={errors.email?.message} elementName='Email' min={5} />
                        </div>
                        <div className="my-4">
                            <label className="block font-medium text-sm text-start text-gray-700 " htmlFor="subject">Subject</label>
                            <input type="text" className='py-2 px-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 outline-none rounded-md shadow-sm block mt-1 w-full ring-1 ring-gray-300 dark:text-black' placeholder='Subject' 
                            {...register('subject', { required:true, minLength:5 })}
                            aria-invalid={errors.subject ? 'true' : 'false'}
                            />
                            <ErrorMessage type={errors.subject?.type} elementName='Subject' min={5} />
                        </div>
                        <div className="my-4">
                            <label className="block font-medium text-sm text-start text-gray-700 " htmlFor="message">Message</label>
                            <textarea rows={4} className='py-2 px-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full ring-1 ring-gray-300 dark:text-black' placeholder='Message' 
                            {...register('message', { required:true, minLength:5 })}
                            aria-invalid={errors.message ? 'true' : 'false'}
                            ></textarea>
                            <ErrorMessage type={errors.message?.type} elementName='Message' min={5} />
                        </div>
                    </div>
                    <div className='space-x-2 md:text-start text-center'>
                        <button type="button" className="text-sm bg-white px-10 py-2 rounded-md text-[#8A0A0A] font-bold border border-[#8A0A0A] hover:border-[#8A0A0A] hover:border hover:bg-[#8A0A0A] hover:text-white dark:bg-transparent dark:hover:bg-[#8A0A0A]" onClick={() => { reset() }}>Cancel</button>
                        <button type="submit" className="text-sm bg-[#8A0A0A] px-10 py-2 rounded-md text-white font-bold hover:border-[#8A0A0A] hover:border hover:bg-white hover:text-[#8A0A0A] dark:hover:bg-transparent dark:hover:text-[#8A0A0A]">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <SuccessModal showModal={showSuccessModal} handleCloseModal={handleSuccessCloseModal}/>
        <ErrorModal showModal={showErrorModal} handleCloseModal={handleErrorCloseModal}/>
    </>
  )
}

export default ContactForm