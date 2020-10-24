import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  text: string
  variant?: string
}

export const Button: React.FC<ButtonProps> = ({ text, variant }) => {
  switch (variant) {
    case 'secondary':
      return <SecondaryButton>{text}</SecondaryButton>

    default:
      return <PrimaryButton>{text}</PrimaryButton>
  }
}

const PrimaryButton = styled.button`
  background-color: ${props => props.theme.colors.colorPrimary};
  color: ${props => props.theme.colors.colorText};
`
const SecondaryButton = styled.button`
  background-color: ${props => props.theme.colors.colorOffWhite};
  color: ${props => props.theme.colors.colorText};
`
