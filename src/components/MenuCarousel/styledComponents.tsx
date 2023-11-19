import styled from 'styled-components'

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: var(--spacing-medium);
  overflow: auto;
  width: 1280px;
  padding: var(--padding-small);
  border-radius: var(--border-radius-small);
  background: linear-gradient(
    90deg,
    rgb(255, 255, 255, 100%) 0%,
    rgb(255, 255, 255, 50%) 10%,
    rgb(255, 255, 255, 0%) 15%,
    rgb(255, 255, 255, 0%) 85%,
    rgb(255, 255, 255, 50%) 90%,
    rgb(255, 255, 255, 100%) 100%
  );
`
