import { FC } from 'react'

import FacebookIcon from 'src/assets/icons/facebook.svg?react'
import YoutubeIcon from 'src/assets/icons/youtube.svg?react'
import EmailIcon from 'src/assets/icons/email.svg?react'
import InstagramIcon from 'src/assets/icons/instagram.svg?react'

import InstagramCode from 'src/assets/images/instagram_qr.jpg'

import CustomLink from '../CustomLink'

import {
  FooterContainer,
  FooterInstagramQR,
  FooterLink,
  FooterLinks,
  FooterMapEmbed,
  FooterSocial,
} from './styledComponents'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <CustomLink to='/' $logo>
          Ting&apos;s Food Mode
        </CustomLink>
        <FooterSocial>
          <EmailIcon width='1.5rem' height='1.5rem' />
          <FooterLink href='mailto:Tingsfoodmode@gmail.com' target='_top'>
            Tingsfoodmode@gmail.com
          </FooterLink>
        </FooterSocial>
        <FooterSocial>
          <YoutubeIcon width='1.5rem' height='1.5rem' />
          <FooterLink href='https://youtube.com/kusinnamaria007'>
            Kusina Maria
          </FooterLink>
        </FooterSocial>
        <FooterSocial>
          <FacebookIcon width='1.5rem' height='1.5rem' />
          <FooterLink href='https://www.facebook.com/tingsfoodmode'>
            https://www.facebook.com/tingsfoodmode
          </FooterLink>
        </FooterSocial>
        <FooterSocial>
          <InstagramIcon width='1.5rem' height='1.5rem' />
          <FooterLink href='https://www.instagram.com/tingsfoodmode/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='>
            @TingsFoodMode
          </FooterLink>
        </FooterSocial>
        <FooterSocial>
          QR:
          <FooterInstagramQR src={InstagramCode} />
        </FooterSocial>
      </FooterLinks>
      <FooterMapEmbed
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106135.55751913608!2d-84.50253099286624!3d33.76748282932745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1701896530784!5m2!1sen!2sus'
        allowFullScreen={true}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </FooterContainer>
  )
}

export default Footer
