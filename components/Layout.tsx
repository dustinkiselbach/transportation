import React from 'react'
import styled from 'styled-components'
import { links } from '../constants/Links'
import { Navbar } from './Navbar'

export const Layout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Navbar {...{ links }} />
      <Container>{children}</Container>
    </>
  )
}

const Container = styled.div`
  padding: 0 4rem;
`
