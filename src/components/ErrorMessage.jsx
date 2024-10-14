import React from 'react'

function ErrorMessage(props:any) {
    const type = props.type
    const elementName = props.elementName
    const message = props.errorMessage
    const min = props?.min
    const max = props?.max
    const elementStyle = `w-full text-left block font-medium text-red-800 my-1 ${props?.elementStyle}`

  return (
    <>
        {
            type === 'required' && (
                <small className={elementStyle}>{elementName} field is required.</small>
            )
        }
        {
            type === 'minLength' && (
                <small className={elementStyle}>{elementName} field should have at least {min} characters.</small>
            )
        }
        {
            type === 'maxLength' && (
                <small className={elementStyle}>{elementName} field should have a maximum of {max} characters.</small>
            )
        }
        {
            type === 'matchPattern' && (
                <small className={elementStyle}>{elementName} field must contain only letters.</small>
            )
        }
        {
            type === 'pattern' && (
                <small className={elementStyle}>{message}</small>
            )
        }
    </>
  )
}

export default ErrorMessage