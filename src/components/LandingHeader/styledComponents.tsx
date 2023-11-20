import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-medium);
  position: relative;
  width: calc(100% - 4px);
  border-radius: var(--border-radius-normal);
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      farthest-corner,
      rgba(0, 0, 0, 50%) 0%,
      rgba(0, 0, 0, 70%) 70%,
      rgba(0, 0, 0, 100%) 100%
    );
    position: absolute;
    top: 0;
    border-radius: var(--border-radius-normal);
  }
`

export const HeaderBackground = styled.img`
  border-radius: var(--border-radius-normal);
  height: auto;
  width: 100%;
`

export const HeaderText = styled.div`
  flex-direction: column;
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-medium);
  z-index: 2;
`

export const HeaderTitle = styled(motion.h1)`
  font-size: var(--title);
  color: ${({ theme }) => theme.text.secondary};
  text-align: center;
  line-height: normal;
`

export const HeaderSubtitle = styled.p`
  font-size: var(--subtitle);
  color: ${({ theme }) => theme.text.secondary};
  text-align: center;
`

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-medium);
`
