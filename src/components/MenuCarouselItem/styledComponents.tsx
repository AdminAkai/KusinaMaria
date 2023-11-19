import styled from 'styled-components'

export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-small);
  padding: var(--padding-small);
  border: 1px solid gray;
  border-radius: var(--border-radius-small);
  height: 640px;
  min-width: calc(1280px / 3 - (var(--padding-small) * 5));
  z-index: -1;
`

export const MenuItemImage = styled.img`
  height: 320px;
  width: calc(100%);
  object-fit: cover;
  border-radius: calc(var(--border-radius-small) - var(--padding-small));
`
