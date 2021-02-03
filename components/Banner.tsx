import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { isServer } from '../utils/isServer'
interface BannerProps {
  imageNumber: number
}

export const Banner: React.FC<BannerProps> = ({ imageNumber }) => {
  const [bannerUrl, setBannerUrl] = useState<null | string>(null)

  useEffect(() => {
    if (!isServer()) {
      const backgroundImageLoader = new Image()
      backgroundImageLoader.src = `/banner${imageNumber}.jpg`

      backgroundImageLoader.onload = () => {
        setBannerUrl(`/banner${imageNumber}.jpg`)
      }
    }
  }, [])
  return (
    <_Banner bannerUrl={bannerUrl || ''}>
      <Overlay imageLoaded={!!bannerUrl} />
    </_Banner>
  )
}

const _Banner = styled.div<{ bannerUrl: string }>`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${props => props.bannerUrl});
  background-size: cover;
  background-position: center center;
  position: relative;
  height: 14rem;
`
const Overlay = styled.div<{ imageLoaded: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;

  background-color: ${props => props.theme.colors.colorText};
  transition: all 0.2s ease-in-out;

  ${({ imageLoaded }) =>
    imageLoaded &&
    css`
      background-color: transparent;
      pointer-events: none;
    `}
`
