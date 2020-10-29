import React from 'react'

import { links } from '../constants/Links'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Navbar {...{ links }} />
      {children}
      <Footer />
    </>
  )
}
