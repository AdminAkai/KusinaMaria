import { FC } from 'react'

import CustomLink from 'src/shared/components/CustomLink'

import InstagramIcon from 'src/assets/icons/instagram.svg?react'
import FacebookIcon from 'src/assets/icons/facebook.svg?react'

import IconRenderer from '../IconRenderer'

import { allNavbarOptions } from './lib'
import {
  FacebookIconContainer,
  InstagramIconContainer,
  NavbarContainer,
  NavbarOptions,
  NavbarSocials,
} from './styledComponents'

const Navbar: FC = () => {
  return (
    <NavbarContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeIn',
        duration: 1,
      }}
    >
      <CustomLink to='/' $logo>
        Ting&apos;s Food Mode
      </CustomLink>
      <NavbarOptions>
        {allNavbarOptions.map(({ label, route }, i) => (
          <CustomLink to={route} key={`${i}-${label}`}>
            {label}
          </CustomLink>
        ))}
      </NavbarOptions>
      <NavbarSocials>
        <IconRenderer />
        <InstagramIconContainer>
          <InstagramIcon width='1.5rem' height='1.5rem' />
        </InstagramIconContainer>
        <FacebookIconContainer>
          <FacebookIcon width='1.5rem' height='1.5rem' />
        </FacebookIconContainer>
      </NavbarSocials>
    </NavbarContainer>
  )
}

export default Navbar
