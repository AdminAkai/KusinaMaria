import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: var(--spacing-extra-large);
  border-left: 4px solid ${({ theme }) => theme.logo};
  padding: 0 var(--spacing-page);
`
