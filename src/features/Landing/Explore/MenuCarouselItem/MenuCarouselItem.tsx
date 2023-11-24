import { FC } from 'react'

import { menu } from 'src/shared/data/menu'
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
    initial={{ x: 0 }}
    animate={{ x: `calc(-100% * ${menu.length})` }}
    transition={{
      duration: 50,
      repeatType: 'loop',
      ease: 'linear',
      loop: Infinity,
    }}
  >
    <MenuItemImage src={imgSrc} alt={title} />
    {title}
    <br />${price}
  </MenuItemContainer>
)

export default MenuCarouselItem
