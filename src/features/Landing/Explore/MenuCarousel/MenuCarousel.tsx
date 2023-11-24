import { FC } from 'react'

import MenuCarouselItem from '../MenuCarouselItem'

import { menu } from 'src/shared/data/menu'

import { MenuContainer } from './styledComponents'

const MenuCarousel: FC = () => {
  return (
    <MenuContainer>
      {menu.map((menuItem) => (
        <MenuCarouselItem
          key={`${menuItem.title}-${menuItem.price}`}
          {...menuItem}
        />
      ))}
      {menu.map((menuItem) => (
        <MenuCarouselItem
          key={`${menuItem.title}-${menuItem.price}`}
          {...menuItem}
        />
      ))}
    </MenuContainer>
  )
}

export default MenuCarousel
