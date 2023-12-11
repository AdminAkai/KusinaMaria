import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-medium);
  width: 100%;
  padding: 0 calc(8px + 12.5vw);
`

export const MenuTitle = styled(motion.h1)`
  font-size: var(--title);
  color: ${({ theme }) => theme.nav.primary};
  text-align: center;
  line-height: normal;
`

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

export const MenuSectionHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: var(--spacing-medium);
`

export const MenuSectionTitle = styled.h3`
  font-size: var(--subtitle);
`

export const SectionDivider = styled.div`
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.nav.primary};
  opacity: 50%;
`

export const MenuSectionItems = styled.div`
  padding: var(--spacing-large) 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
