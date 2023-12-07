import { FC, ReactNode } from 'react'

import {
  MenuItemContainer,
  MenuItemDescription,
  MenuItemDetails,
  MenuItemImage,
  MenuItemTitle,
} from './styledComponents'

export interface IMenuItemProps {
  imgSrc: string
  title: string
  description: string
}

const MenuItem: FC<IMenuItemProps> = ({
  imgSrc,
  title,
  description,
}): ReactNode => {
  return (
    <MenuItemContainer>
      <MenuItemImage src={imgSrc} />
      <MenuItemDetails>
        <MenuItemTitle>{title}</MenuItemTitle>
        <MenuItemDescription>{description}</MenuItemDescription>
      </MenuItemDetails>
    </MenuItemContainer>
  )
}

export default MenuItem
