import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MenuItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-large);
`

export const MenuItemImage = styled(motion.img)`
  height: auto;
  width: 200px;
  user-select: none;
`

export const MenuItemDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-medium);
`

export const MenuItemTitle = styled(motion.h3)`
  font-size: var(--description);
`

export const MenuItemDescription = styled(motion.div)`
  font-size: var(--paragraph);
  text-align: left;
  width: 400px;
`
