import { FC } from 'react'

import CustomButton from 'src/shared/components/CustomButton'

import {
  ExploreContainer,
  ExploreSubtitle,
  ExploreTitle,
  ExploreTop,
  MenuContainer,
  MenuItemContainer,
  MenuItemImage,
} from './styledComponents'
import { menu } from 'src/shared/data/menu'

const Explore: FC = () => (
  <ExploreContainer>
    <ExploreTop>
      <ExploreSubtitle>Explore</ExploreSubtitle>
      <ExploreTitle>Filipino Cuisine</ExploreTitle>
      <CustomButton>Browse Menu</CustomButton>
    </ExploreTop>
    <MenuContainer>
      {menu.map(({ title, imgSrc, price }) => (
        <MenuItemContainer key={`${title}-${price}`}>
          <MenuItemImage src={imgSrc} alt={title} />
          {title}
          <br />${price}
        </MenuItemContainer>
      ))}
    </MenuContainer>
  </ExploreContainer>
)

export default Explore
