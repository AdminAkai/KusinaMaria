import { FC } from 'react'
import {
  HeaderContainer,
  HeaderBackground,
  HeaderText,
  HeaderTitle,
  HeaderSubtitle,
  HeaderButtons,
} from './styledComponents'

import HeaderBackdrop from 'src/assets/images/header_backdrop.jpg'
import CustomButton from 'src/shared/components/CustomButton'

const LandingHeader: FC = () => (
  <HeaderContainer>
    <HeaderBackground src={HeaderBackdrop} alt='landing-header-background' />
    <HeaderText>
      <HeaderTitle>
        Enjoy Authentic Homemade
        <br />
        Filipino Food
      </HeaderTitle>
      <HeaderSubtitle>
        A rich variety of classic filipino dishes for you to choose from,
        <br />
        local to the Atlanta area.
      </HeaderSubtitle>
      <HeaderButtons>
        <CustomButton>Order here!</CustomButton>
        <CustomButton secondary>Browse Menu</CustomButton>
      </HeaderButtons>
    </HeaderText>
  </HeaderContainer>
)

export default LandingHeader
