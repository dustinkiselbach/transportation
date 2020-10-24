import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import { lighten } from 'polished'
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

const _Navbar = styled.div`
  padding: 1rem 32rem;
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.colors.colorWhite};
  z-index: 2;
`
const Links = styled.ul`
  display: flex;
  justify-content: space-evenly;
  font-size: 1.2rem;
`

const NavbarItem = styled.li<{ active: boolean }>`
  a {
    color: ${props =>
      props.active
        ? lighten(0.25, props.theme.colors.colorText)
        : props.theme.colors.colorText};
    &:hover {
      color: ${props => lighten(0.25, props.theme.colors.colorText)};
      transition: 0.2s all ease-in-out;
    }
  }
`
