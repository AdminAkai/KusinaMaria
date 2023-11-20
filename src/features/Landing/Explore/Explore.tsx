import { FC } from 'react'

import CustomButton from 'src/shared/components/CustomButton'

import MenuCarousel from './MenuCarousel'

import {
  ExploreContainer,
  ExploreSubtitle,
  ExploreTitle,
  ExploreTop,
} from './styledComponents'
import AnimatedText from 'src/shared/components/AnimatedText'

const Explore: FC = () => (
  <ExploreContainer>
    <ExploreTop>
      <ExploreSubtitle>
        <AnimatedText text='Explore' />
      </ExploreSubtitle>
      <ExploreTitle>Filipino Cuisine</ExploreTitle>
      <MenuCarousel />
    </ExploreTop>
    <CustomButton>Browse Menu</CustomButton>
  </ExploreContainer>
)

export default Explore
