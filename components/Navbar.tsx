import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import NextLink from 'next/link'
import { rgba } from 'polished'
import { useRouter } from 'next/router'
import { Container } from './Container'
import { isServer } from '../utils/isServer'
import { LINKS } from '../constants/links'

const EXTRA_LINK_OPTIONS: Record<string, string[]> = {
  Announcements: [
    'Announcement Center',
    'Travel Training',
    'Madison Transit Token Program'
  ]
}

export const Navbar: React.FC = () => {
  const [clicked, setClicked] = useState(false)
  const [activeLinkWithOptions, setActiveLinkWithOptions] = useState('')
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
            {LINKS.map((link, i) => (
              <NavbarItem
                active={
                  router.pathname === `/${link.toLowerCase()}` ||
                  (router.pathname === '/' && link === 'Home')
                }
                key={i}
              >
                {EXTRA_LINK_OPTIONS[link] ? (
                  <NavbarItemWithSubitems
                    onMouseEnter={() => setActiveLinkWithOptions(link)}
                    onMouseLeave={() => setActiveLinkWithOptions('')}
                  >
                    {link}
                    {link === activeLinkWithOptions ? (
                      <Subitems>
                        {EXTRA_LINK_OPTIONS[link].map(subLink => (
                          <li key={subLink}>
                            <NextLink
                              href={`/${subLink
                                .split(' ')
                                .join('-')
                                .toLowerCase()}`}
                            >
                              {subLink}
                            </NextLink>
                          </li>
                        ))}
                      </Subitems>
                    ) : null}
                  </NavbarItemWithSubitems>
                ) : (
                  <NextLink href={i === 0 ? '/' : `/${link.toLowerCase()}`}>
                    {link}
                  </NextLink>
                )}
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
          {LINKS.map((link, i) => (
            <li key={i}>
              {EXTRA_LINK_OPTIONS[link] ? (
                <NavbarItemWithSubitems
                  onClick={() =>
                    setActiveLinkWithOptions(prevLink =>
                      !prevLink ? link : ''
                    )
                  }
                >
                  {link} {link === activeLinkWithOptions ? '-' : '+'}
                  {link === activeLinkWithOptions ? (
                    <MobileSubitems>
                      {EXTRA_LINK_OPTIONS[link].map(subLink => (
                        <li key={subLink}>
                          <NextLink
                            href={`/${subLink
                              .split(' ')
                              .join('-')
                              .toLowerCase()}`}
                          >
                            {subLink}
                          </NextLink>
                        </li>
                      ))}
                    </MobileSubitems>
                  ) : null}
                </NavbarItemWithSubitems>
              ) : (
                <NextLink href={i === 0 ? '/' : `/${link.toLowerCase()}`}>
                  {link}
                </NextLink>
              )}
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
  @media (max-width: 1800px) {
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

const NavbarItemWithSubitems = styled.div`
  cursor: pointer;
`

const Subitems = styled.ul`
  position: absolute;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.colorOffWhite};
  padding: 1rem;
  padding-top: 2rem;

  li {
    margin-bottom: 1rem;
  }
`

const MobileSubitems = styled.ul`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;

  li {
    font-size: 1.25rem;
    margin: 1rem;

    a {
      font-weight: 400;
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
  justify-content: space-evenly;
  margin-top: auto;
  text-align: center;
  height: 100%;
  li {
    margin: 2rem;
    text-align: center;
    font-weight: 500;
    color: ${props => props.theme.colors.colorText};

    font-size: 1.5rem;

    a {
      transition: 0.2s all ease-in-out;
      position: relative;
      color: ${props => props.theme.colors.colorText};
      font-weight: 500;
    }
  }
`
