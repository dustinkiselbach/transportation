import { darken, lighten } from 'polished'
import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  text: string
  variant?: string
  onSubmit?: () => void
  loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  onSubmit,
  loading
}) => {
  switch (variant) {
    case 'secondary':
      return <SecondaryButton>{text}</SecondaryButton>

    default:
      return (
        <PrimaryButton
          onClick={onSubmit}
          disabled={loading}
          isLoading={!!loading}
        >
          {text}
        </PrimaryButton>
      )
  }
}

const PrimaryButton = styled.button<{ isLoading: boolean }>`
  background-color: ${props =>
    props.isLoading
      ? lighten(0.2, props.theme.colors.colorPrimary)
      : props.theme.colors.colorPrimary};
  color: ${props => props.theme.colors.colorText};
  &:hover {
    background-color: ${props => lighten(0.2, props.theme.colors.colorPrimary)};
  }
`
const SecondaryButton = styled.button`
  background-color: ${props => props.theme.colors.colorOffWhite};
  color: ${props => props.theme.colors.colorText};
  &:hover {
    background-color: ${props => darken(0.1, props.theme.colors.colorOffWhite)};
  }
`
