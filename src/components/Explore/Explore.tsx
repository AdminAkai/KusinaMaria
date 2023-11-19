import { FC } from 'react'

import CustomButton from 'src/shared/components/CustomButton'

import MenuCarousel from 'src/components/MenuCarousel'

import {
  ExploreContainer,
  ExploreSubtitle,
  ExploreTitle,
  ExploreTop,
} from './styledComponents'

const Explore: FC = () => (
  <ExploreContainer>
    <ExploreTop>
      <ExploreSubtitle>Explore</ExploreSubtitle>
      <ExploreTitle>Filipino Cuisine</ExploreTitle>
      <MenuCarousel />
    </ExploreTop>
    <CustomButton>Browse Menu</CustomButton>
  </ExploreContainer>
)

export default Explore
