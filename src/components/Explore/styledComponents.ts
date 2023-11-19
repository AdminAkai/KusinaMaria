import styled from 'styled-components'

export const ExploreContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-extra-large);
`

export const ExploreTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: var(--spacing-small);
`

export const ExploreTitle = styled.h1`
  font-size: var(--title);
`

export const ExploreSubtitle = styled.h1`
  font-size: var(--subtitle);
`

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: var(--spacing-medium);
  overflow: auto;
  width: 1280px;
  padding: var(--padding-small);
`

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
`

export const MenuItemImage = styled.img`
  height: 320px;
  width: calc(100%);
  object-fit: cover;
  border-radius: calc(var(--border-radius-small) - var(--padding-small));
`
