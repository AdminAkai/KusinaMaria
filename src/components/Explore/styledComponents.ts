import styled from 'styled-components'

export const ExploreContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-page);
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
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-medium);
  overflow: auto;
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
  height: 328px;
  width: 296px;
`

export const MenuItemImage = styled.img`
  height: 200px;
  width: calc(328px - var(--padding-small));
  object-fit: cover;
  border-radius: calc(var(--border-radius-small) - var(--padding-small));
`
