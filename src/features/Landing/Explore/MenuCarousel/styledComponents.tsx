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
`
