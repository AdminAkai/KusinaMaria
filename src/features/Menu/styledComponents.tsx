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
