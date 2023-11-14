import { FC } from 'react'

import {
  ExploreContainer,
  ExploreSubtitle,
  ExploreTitle,
} from './styledComponents'
import CustomButton from 'src/shared/components/CustomButton'

const Explore: FC = () => (
  <ExploreContainer>
    <ExploreSubtitle>Explore</ExploreSubtitle>
    <ExploreTitle>Filipino Cuisine</ExploreTitle>
    <CustomButton>Browse Menu</CustomButton>
  </ExploreContainer>
)

export default Explore
