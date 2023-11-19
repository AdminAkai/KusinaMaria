import { FC } from 'react'

import { menu } from 'src/shared/data/menu'

import { MenuContainer } from './styledComponents'

const MenuCarousel: FC = () => {
  return (
    <MenuContainer>
      {menu.map((menuItem) => (
        <MenuCarousel
          key={`${menuItem.title}-${menuItem.price}`}
          {...menuItem}
        />
      ))}
    </MenuContainer>
  )
}

export default MenuCarousel
