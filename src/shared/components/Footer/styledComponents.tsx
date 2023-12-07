import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  gap: var(--spacing-extra-large);
  border-left: 4px solid ${({ theme }) => theme.logo};
  padding: var(--spacing-small) var(--spacing-page);
`

export const FooterLinks = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: var(--spacing-large);
`

export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-large);
`

export const FooterLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.nav.primary};
  &:visited {
    color: ${({ theme }) => theme.nav.primary};
  }
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

export const FooterMapEmbed = styled.iframe`
  width: 46.875rem;
  height: 28.125rem;
  border: 0;
  border-radius: var(--border-radius-normal);
`

export const FooterInstagramQR = styled.img`
  width: 15rem;
  height: 12.5rem;
`
