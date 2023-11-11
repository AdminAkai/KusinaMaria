import styled from 'styled-components'

export const CustomButtonContainer = styled.button<{ $secondary?: boolean }>`
  padding: 12px 24px;
  border-radius: 8px;
  width: 200px;
  background-color: ${({ theme, $secondary }) =>
    $secondary ? 'transparent' : theme.logo};
  color: ${({ theme }) => theme.text.secondary};
  border: ${({ theme, $secondary }) =>
    $secondary ? `1px solid ${theme.text.secondary}` : 'none'};
  cursor: pointer;
`
