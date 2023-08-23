import React from 'react'
import { Link } from 'react-router-dom'

const NavigationButton = ({navigateTo, buttonName}) => {
  return (
    <>
    <p><Link to={navigateTo}><button type='button'>{buttonName}</button></Link></p>
    </>
  )
}

export default NavigationButton