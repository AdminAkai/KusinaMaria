import { FC } from 'react'

import LandingHeader from 'src/components/LandingHeader'

import { LandingPageContainer } from './styledComponents'

const Landing: FC = () => (
  <LandingPageContainer>
    <LandingHeader />
  </LandingPageContainer>
)

export default Landing
