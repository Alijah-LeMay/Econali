import React from 'react'

// This document is to serve as global constants for the site. When making edits, this should be kept in mind so that future ecommerce sites can be easily be cloned and reformatted within this file alone.

// Strings

//color selector: https://coolors.co/generate
let logoText = 'LevisBodyButter.com'

//Product Carrousel,
let primaryColor = '#B7B6C2'
//Navbar,
let secondaryColor = '#4A6FA5'

let primaryTextColor = 'white'

let defaultShippingCost = 0

// Components
const CopyRight = () => {
  const year = new Date().getFullYear()

  return (
    <p>
      &copy; {year} <a href='//www.thewebdev.net'>LemaTech LLC</a>
    </p>
  )
}

export {
  logoText,
  CopyRight,
  primaryColor,
  secondaryColor,
  primaryTextColor,
  defaultShippingCost,
}
