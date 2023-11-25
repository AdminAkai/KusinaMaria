import { FC } from 'react'

import Footer from 'src/shared/components/Footer'
import Tagline from 'src/shared/components/Tagline'

import LandingHeader from './LandingHeader'
import Explore from './Explore'

import { LandingPageContainer } from './styledComponents'

const Landing: FC = () => (
  <LandingPageContainer>
    <LandingHeader />
    <Explore />
    <Footer />
    <Tagline />
  </LandingPageContainer>
)

export default Landing
