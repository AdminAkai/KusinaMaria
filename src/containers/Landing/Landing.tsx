import { FC } from 'react'

import LandingHeader from 'src/components/LandingHeader'
import Explore from 'src/components/Explore'

import { LandingPageContainer } from './styledComponents'

const Landing: FC = () => (
  <LandingPageContainer>
    <LandingHeader />
    <Explore />
  </LandingPageContainer>
)

export default Landing
