import { rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import { Container } from './Container'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <_Footer>
      <Container>
        <FooterMain>
          <FooterItem>
            <h4>Madison County Mobility Managment</h4>
            <li>Contact Us</li>
            <li>About Us</li>
          </FooterItem>
          <FooterItem>
            <h4>Helpful Links</h4>
            <li>Coordinated Transportation Plan</li>
            <li>Madison County Rural Health Council</li>
          </FooterItem>
          <FooterItem>
            <h4>Find Us Online</h4>
            <li>Facebook</li>
            <li>Instagram</li>
          </FooterItem>
        </FooterMain>
      </Container>
    </_Footer>
  )
}

const _Footer = styled.footer`
  background-color: ${props => rgba(props.theme.colors.colorPrimary, 0.5)};
`

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem 0;
  width: 100%;
`
const FooterItem = styled.ul`
  h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  li {
    &:not(:first-child) {
      margin-top: 8px;
    }

    color: ${props => rgba(props.theme.colors.colorText, 0.75)};
  }
`
