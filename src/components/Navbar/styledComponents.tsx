import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: inherit;
  padding: var(--spacing-large) 0;
`
export const NavbarOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-extra-large);
`

export const NavbarSocials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-extra-large);
`

export const FacebookIconContainer = styled.div`
  svg {
    fill: ${({ theme }) => theme.logo};
  }
`

export const InstagramIconContainer = styled.div`
  path {
    fill: ${({ theme }) => theme.logo};
  }
`
