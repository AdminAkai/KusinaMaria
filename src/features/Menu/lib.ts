import { IMenuItemProps } from './MenuItem/MenuItem'

import beefCalderetaImg from 'src/assets/images/beef_caldereta.jpg'
import chickenAdoboImg from 'src/assets/images/chicken_adobo.jpg'
import pancitShrimpBihon from 'src/assets/images/pancit_shrimp_bihon.jpg'
import turonImg from 'src/assets/images/turon.jpg'
import pancitMalabonImg from 'src/assets/images/pancit_malabon.jpg'
import groundPorkLumpiaImg from 'src/assets/images/ground_pork_lumpia.jpg'
import oxtailKareKareImg from 'src/assets/images/oxtail_kare_kare.jpg'
import putoUbeImg from 'src/assets/images/puto_ube.jpg'

interface MenuSection {
  sectionHeader: string
  menuItems: IMenuItemProps[]
}

export const fullMenu: MenuSection[] = [
  {
    sectionHeader: 'Pancit',
    menuItems: [
      {
        title: 'Pancit Shrimp Bihon',
        imgSrc: pancitShrimpBihon,
        description: '',
      },
      {
        title: 'Pancit Malabon',
        imgSrc: pancitMalabonImg,
        description: '',
      },
    ],
  },
  {
    sectionHeader: 'Chicken',
    menuItems: [
      {
        title: 'Chicken Adobo',
        imgSrc: chickenAdoboImg,
        description: '',
      },
    ],
  },
  {
    sectionHeader: 'Beef',
    menuItems: [
      {
        title: 'Beef Caldereta',
        imgSrc: beefCalderetaImg,
        description: '',
      },
      {
        title: 'Oxtail Kare Kare',
        imgSrc: oxtailKareKareImg,
        description: '',
      },
    ],
  },
  {
    sectionHeader: 'Pork',
    menuItems: [
      {
        title: 'Ground Pork Lumpia',
        imgSrc: groundPorkLumpiaImg,
        description: '',
      },
    ],
  },
  {
    sectionHeader: 'Desserts',
    menuItems: [
      {
        title: 'Turon',
        imgSrc: turonImg,
        description: '',
      },
      {
        title: 'Puto Ube',
        imgSrc: putoUbeImg,
        description: '',
      },
    ],
  },
]
