import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import { lighten, rgba } from 'polished'
import { useRouter } from 'next/router'

interface NavbarProps {
  links: string[]
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const router = useRouter()

  return (
    <_Navbar>
      <Links>
        {links.map((link, i) => (
          <NavbarItem
            active={router.pathname === `/${link.toLowerCase()}`}
            key={i}
          >
            <NextLink href={i === 0 ? '/' : link.toLowerCase()}>
              {link}
            </NextLink>
          </NavbarItem>
        ))}
      </Links>
    </_Navbar>
  )
}

const _Navbar = styled.nav`
  padding: 1rem 32rem;
  width: 100%;
  background-color: ${props => props.theme.colors.colorWhite};
  z-index: 2;
`
const Links = styled.ul`
  display: flex;
  justify-content: space-evenly;
  font-size: 1rem;
`

const NavbarItem = styled.li<{ active: boolean }>`
  a {
    transition: 0.2s all ease-in-out;
    position: relative;
    color: ${props =>
      props.active
        ? lighten(0.25, props.theme.colors.colorText)
        : props.theme.colors.colorText};
    &:hover {
      color: ${props => lighten(0.25, props.theme.colors.colorText)};
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
