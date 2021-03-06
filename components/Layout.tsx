import React from 'react'

import { LINKS } from '../constants/links'
import { Banner } from './Banner'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { useRouter } from 'next/router'

export const Layout: React.FC<{}> = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <Navbar />
      {router.pathname !== '/' ? (
        <Banner
          imageNumber={LINKS.map(link => link.toLowerCase()).indexOf(
            router.pathname.split('/')[1]
          )}
        />
      ) : null}
      <div style={{ minHeight: '64vh' }}>{children}</div>

      <Footer />
    </>
  )
}
