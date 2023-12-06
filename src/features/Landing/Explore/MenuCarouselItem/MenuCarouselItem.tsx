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
  <MenuItemContainer
    key={`${title}-${price}`}
    initial={{ translateX: 0 }}
    animate={{ translateX: '-100%' }}
    transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
  >
    <MenuItemImage src={imgSrc} alt={title} />
    {title}
    <br />${price}
  </MenuItemContainer>
)

export default MenuCarouselItem
