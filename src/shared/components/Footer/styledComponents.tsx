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

export const FooterLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-large);
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
  width: 600px;
  height: 450px;
  border: 0;
  border-radius: 8px;
`
