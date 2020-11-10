import { rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import { Container } from './Container'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <_Footer>
      <Container>
        <FooterMain>
          <FooterItem>
            <h4>Madison County Mobility Managment</h4>
            <li>
              <NextLink href={'/contact'}>Contact Us</NextLink>
            </li>
            <li>
              <NextLink href={'/schedules'}>Schedules</NextLink>
            </li>
          </FooterItem>
          <FooterItem>
            <h4>Helpful Links</h4>
            <li>
              <a
                href='https://www.madisoncounty.ny.gov/DocumentCenter/View/1010/Coordinated-Transportation-Plan-2010---May-2015-Update-PDF?bidId= '
                target='_blank'
              >
                Coordinated Transportation Plan
              </a>
            </li>
            <li>
              <a href='http://www.mcruralhealthcouncil.org/' target='_blank'>
                Madison County Rural Health Council
              </a>
            </li>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 2rem 0;
  width: 100%;
`
const FooterItem = styled.ul`
  flex: 1;
  @media (max-width: 600px) {
    margin-top: 1rem;
    flex: 0 0 100%;
  }
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

    a {
      color: ${props => rgba(props.theme.colors.colorText, 0.75)};
      &:hover {
        color: ${props => props.theme.colors.colorText};
      }
      transition: all 0.2s ease-in-out;
    }
  }
`
