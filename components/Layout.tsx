import React from 'react'

import { LINKS } from '../constants/links'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Navbar links={LINKS} />
      {children}
      <Footer />
    </>
  )
}
