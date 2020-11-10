import React from 'react'
import styled from 'styled-components'

export const Container: React.FC = ({ children }) => {
  return <_Container>{children}</_Container>
}

const _Container = styled.div`
  padding: 0 8rem;
  width: 100%;
  position: relative;
  display: flex;
  @media (max-width: 1600px) {
    padding: 0 6rem;
  }
  @media (max-width: 1400px) {
    padding: 0 4rem;
  }
  @media (max-width: 1200px) {
    padding: 0 3rem;
  }
  @media (max-width: 1000px) {
    padding: 0 2rem;
  }
  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`
