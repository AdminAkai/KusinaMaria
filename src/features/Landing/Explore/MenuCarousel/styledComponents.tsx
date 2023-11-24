import styled from 'styled-components'

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: var(--spacing-medium);
  overflow: hidden;
  width: 1280px;
  padding: var(--padding-small);
  border-radius: calc(var(--border-radius-small) - 5px);
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  /* mask: linear-gradient(
    90deg,
    rgb(255, 255, 255, 100%) 3%,
    rgb(255, 255, 255, 50%) 10%,
    rgb(255, 255, 255, 0%) 15%,
    rgb(255, 255, 255, 0%) 85%,
    rgb(255, 255, 255, 50%) 90%,
    rgb(255, 255, 255, 100%) 97%
  ); */
`
