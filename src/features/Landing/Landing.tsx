import { FC } from 'react'

import LandingHeader from './LandingHeader'
import Explore from './Explore'

import { LandingPageContainer } from './styledComponents'

const Landing: FC = () => (
  <LandingPageContainer>
    <LandingHeader />
    <Explore />
  </LandingPageContainer>
)

export default Landing
