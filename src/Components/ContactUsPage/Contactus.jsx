import React from 'react'
import HOC from '../HOC'
import '../../Assets/Css/Contact.css'
import ContactDetails from './ContactDetails'
import ContactMap from './ContactMap'
import ContactForm from './ContactForm'

function Contactus() {
  return (
    <>
      <ContactDetails />
      <ContactMap />
      <ContactForm />
    </>
  )
}

export default HOC(Contactus)