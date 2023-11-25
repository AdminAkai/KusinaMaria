import { FC } from 'react'

import CustomLink from '../CustomLink'

import { FooterContainer } from './styledComponents'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <CustomLink to='/' $logo>
        Ting&apos;s Food Mode
      </CustomLink>
    </FooterContainer>
  )
}

export default Footer
