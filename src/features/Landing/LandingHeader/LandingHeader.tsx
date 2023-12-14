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
import { Variants } from 'framer-motion'
import AnimatedText from 'src/shared/components/AnimatedText'

const variants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
}

const LandingHeader: FC = () => (
  <HeaderContainer
    transition={{ staggerChildren: 0.5 }}
    initial='initial'
    animate='animate'
  >
    <HeaderBackground
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: 'easeIn' }}
      src={HeaderBackdrop}
      alt='landing-header-background'
    />
    <HeaderText>
      <HeaderTitle variants={variants}>
        <AnimatedText text='Enjoy Authentic Homemade' />
        <AnimatedText text='Filipino Food' staggerChildren={0.2} />
      </HeaderTitle>
      <HeaderSubtitle variants={variants}>
        A rich variety of classic filipino dishes for you to choose from,
        <br />
        local to the Atlanta area.
      </HeaderSubtitle>
      <HeaderButtons variants={variants}>
        <CustomButton>Order here!</CustomButton>
        <CustomButton secondary>Browse Menu</CustomButton>
      </HeaderButtons>
    </HeaderText>
  </HeaderContainer>
)

export default LandingHeader
