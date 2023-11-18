import React from 'react'
import { Link } from 'react-router-dom'


export default function Watsap({phoneNumber, message}) {
    const whatsappLink = 'https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}'
  return (

    <Link to={whatsappLink} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
        connect me
    </Link>
  )
}
