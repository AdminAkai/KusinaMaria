import { FC } from 'react'

import HeaderBackdrop from 'src/assets/images/header_backdrop.jpg'

import CustomButton from 'src/shared/components/CustomButton'

import {
  HeaderContainer,
  HeaderBackground,
  HeaderText,
  HeaderTitle,
  HeaderSubtitle,
  HeaderButtons,
} from './styledComponents'

const LandingHeader: FC = () => (
  <HeaderContainer>
    <HeaderBackground src={HeaderBackdrop} alt='landing-header-background' />
    <HeaderText>
      <HeaderTitle
        initial={{ x: -3000 }}
        animate={{ x: 0 }}
        transition={{ duration: '2', delay: 0.2 }}
        whileHover={{ scale: '0.9', opacity: 0.4 }}
      >
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
