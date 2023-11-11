import { FC } from 'react'

import CustomLink from 'src/shared/components/CustomLink'

import InstagramLogo from 'src/assets/icons/instagram.svg?react'
import FacebookLogo from 'src/assets/icons/facebook.svg?react'

import { allNavbarOptions } from './lib'
import {
  NavbarContainer,
  NavbarOptions,
  NavbarSocials,
} from './styledComponents'

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <CustomLink to='/' logo>
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
        <InstagramLogo width='24px' height='24px' />
        <FacebookLogo width='24px' height='24px' />
      </NavbarSocials>
    </NavbarContainer>
  )
}

export default Navbar
