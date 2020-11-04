import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import { rgba } from 'polished'
import { useRouter } from 'next/router'
import { Container } from './Container'

interface NavbarProps {
  links: string[]
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const router = useRouter()

  return (
    <_Navbar>
      <Container>
        <NavbarMain>
          <Links>
            {links.map((link, i) => (
              <NavbarItem
                active={router.pathname === `/${link.toLowerCase()}`}
                key={i}
              >
                <NextLink href={i === 0 ? '/' : `/${link.toLowerCase()}`}>
                  {link}
                </NextLink>
              </NavbarItem>
            ))}
          </Links>
        </NavbarMain>
      </Container>
    </_Navbar>
  )
}

const _Navbar = styled.nav`
  background-color: ${props => props.theme.colors.colorWhite};
`
const NavbarMain = styled.div`
  display: flex;
  padding: 1rem 0;
  width: 100%;
  justify-content: center;
`

const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`

const NavbarItem = styled.li<{ active: boolean }>`
  a {
    transition: 0.2s all ease-in-out;
    position: relative;
    color: ${props => props.theme.colors.colorText};
    &:hover {
      &::after {
        width: 100%;
      }
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: ${props => (props.active ? '100%' : 0)};
      height: 2px;
      background-color: ${props => rgba(props.theme.colors.colorPrimary, 0.9)};
      transition: all 0.2s ease-in-out;
    }
  }
`
