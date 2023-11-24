import { FC } from 'react'

import CustomLink from 'src/shared/components/CustomLink'

import InstagramLogo from 'src/assets/icons/instagram.svg?react'
import FacebookLogo from 'src/assets/icons/facebook.svg?react'

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
    <NavbarContainer>
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
        <InstagramIconContainer>
          <InstagramLogo width='1.5rem' height='1.5rem' />
        </InstagramIconContainer>
        <FacebookIconContainer>
          <FacebookLogo width='1.5rem' height='1.5rem' />
        </FacebookIconContainer>
      </NavbarSocials>
    </NavbarContainer>
  )
}

export default Navbar
