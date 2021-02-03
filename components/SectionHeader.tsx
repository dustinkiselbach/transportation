import { rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { Container } from './Container'

interface SectionHeaderProps {
  title: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  title
}) => {
  return (
    <_SectionHeader>
      <Container>
        <SectionHeaderMain>
          <h1>
            <span>{title.slice(0, 2)}</span>
            {title.slice(2)}
          </h1>
          {children}
        </SectionHeaderMain>
      </Container>
    </_SectionHeader>
  )
}

const _SectionHeader = styled.section`
  margin: 2rem 0;
`

const SectionHeaderMain = styled.div`
  width: 100%;
  h1 {
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 4rem;
    span {
      border-bottom: 4px solid
        ${props => rgba(props.theme.colors.colorPrimary, 0.9)};
    }
  }
  margin-bottom: 4rem;
`
