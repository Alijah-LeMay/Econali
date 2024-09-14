import React from 'react'

// This document is to serve as global constants for the site. When making edits, this should be kept in mind so that future ecommerce sites can be easily be cloned and reformatted within this file alone.

// Strings
let logoText = 'LevisBodyButter.com'

// Components
const CopyRight = () => {
  const year = new Date().getFullYear()

  return (
    <p>
      &copy; {year} <a href='//www.thewebdev.net'>LemaTech LLC</a>
    </p>
  )
}

export { logoText, CopyRight }
