import { FC } from 'react'

import { MenuItemContainer, MenuItemImage } from './styledComponents'

interface MenuCarouselItemProps {
  title: string
  imgSrc: string
  price: number
}

const MenuCarouselItem: FC<MenuCarouselItemProps> = ({
  title,
  imgSrc,
  price,
}) => (
  <MenuItemContainer key={`${title}-${price}`}>
    <MenuItemImage src={imgSrc} alt={title} />
    {title}
    <br />${price}
  </MenuItemContainer>
)

export default MenuCarouselItem
