import { useRouter } from 'next/router'
import { darken, lighten } from 'polished'
import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  text: string
  variant?: string
  onSubmit?: () => void
}

export const Button: React.FC<ButtonProps> = ({ text, variant, onSubmit }) => {
  const router = useRouter()
  switch (variant) {
    case 'secondary':
      return <SecondaryButton>{text}</SecondaryButton>

    default:
      return <PrimaryButton onClick={onSubmit}>{text}</PrimaryButton>
  }
}

const PrimaryButton = styled.button`
  background-color: ${props => props.theme.colors.colorPrimary};
  color: ${props => props.theme.colors.colorText};
  &:hover {
    background-color: ${props => lighten(0.3, props.theme.colors.colorPrimary)};
  }
`
const SecondaryButton = styled.button`
  background-color: ${props => props.theme.colors.colorOffWhite};
  color: ${props => props.theme.colors.colorText};
  &:hover {
    background-color: ${props => darken(0.1, props.theme.colors.colorOffWhite)};
  }
`
