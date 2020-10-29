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
`
