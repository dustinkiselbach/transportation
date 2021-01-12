import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import NextLink from 'next/link'
import { rgba } from 'polished'
import { useRouter } from 'next/router'
import { Container } from './Container'
import { isServer } from '../utils/isServer'

interface NavbarProps {
  links: string[]
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [clicked, setClicked] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (clicked && !isServer()) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [clicked])

  return (
    <_Navbar>
      <Container>
        <NavbarMain>
          <Links>
            {links.map((link, i) => (
              <NavbarItem
                active={
                  router.pathname === `/${link.toLowerCase()}` ||
                  (router.pathname === '/' && link === 'Home')
                }
                key={i}
              >
                <NextLink href={i === 0 ? '/' : `/${link.toLowerCase()}`}>
                  {link}
                </NextLink>
              </NavbarItem>
            ))}
          </Links>
        </NavbarMain>
        <Hamburger
          onClick={() => setClicked(c => !c)}
          {...{ clicked }}
          light={!clicked}
        >
          <span />
          <span />
          <span />
        </Hamburger>
      </Container>
      <MobileMenu {...{ clicked }}>
        <MobileMenuContainer>
          {links.map((link, i) => (
            <li key={i}>
              <NextLink href={i === 0 ? '/' : `/${link.toLowerCase()}`}>
                {link}
              </NextLink>
            </li>
          ))}
        </MobileMenuContainer>
      </MobileMenu>
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
  @media (max-width: 600px) {
    justify-content: flex-end;
    padding: 0;
  }
  @media (max-width: 600px) {
    display: none;
  }
`

const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  @media (max-width: 1200px) {
    width: 75%;
  }
`

const Hamburger = styled.div<{ clicked: boolean; light: boolean }>`
  position: absolute;
  top: 1rem;
  right: 1rem;

  @media (min-width: 600px) {
    display: none;
  }

  z-index: 10;
  height: 40px;
  width: 30px;

  span {
    width: 100%;
    background-color: ${props =>
      props.light
        ? props.theme.colors.colorOffWhite
        : props.theme.colors.colorText};
    height: 2px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    transition: all 0.2s ease-in-out;

    &:first-child {
      transform: translateY(-10px) translate(0, -50%);
    }

    &:nth-child(2) {
    }

    &:last-child {
      transform: translateY(10px) translate(-0, -50%);
    }
    ${({ clicked }) =>
      clicked &&
      css`
        &:first-child {
          transform: translateY(-2px) translate(0, 50%) rotate(-45deg);
        }

        &:nth-child(2) {
          transform: translateY(0px) translate(0, -50%) rotate(45deg);
          background-color: transparent;
        }

        &:last-child {
          transform: translateY(0px) translate(0, -50%) rotate(45deg);
        }
      `}
  }
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
const MobileMenu = styled.div<{ clicked: boolean }>`
  @media (min-width: 600px) {
    display: none;
  }
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(${props =>
    rgba(props.theme.colors.colorPrimary, 0.5)},${props =>
  rgba(props.theme.colors.colorPrimary, 0.5)}), linear-gradient(white, white) ;
  /* background-color: ${props =>
    rgba(props.theme.colors.colorPrimary, 0.5)}; */
  z-index: 2;
  transform: translateX(${props => (props.clicked ? '0' : '600px')});
  transition: all 0.2s ease-in-out;
`
const MobileMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  li {
    margin: 1.5rem;
    text-align: center;

    font-size: 1.5rem;

    a {
      transition: 0.2s all ease-in-out;
      position: relative;
      color: ${props => props.theme.colors.colorText};
      font-weight: 500;
    }
  }
`
