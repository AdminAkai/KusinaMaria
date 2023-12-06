import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MenuContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 1280px;
  white-space: nowrap;
  padding: var(--padding-small);
  border-radius: calc(var(--border-radius-small) - 5px);
  gap: var(--spacing-medium);
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
`
