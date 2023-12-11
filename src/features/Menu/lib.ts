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
        description:
          'Pancit Bihon is a popular Filipino rice noodle dish. This is made-up of rice noodles, meat, and vegetables. Shrimp Pancit Bihon is a version that use shrimp, along with the usual vegetables such as carrots, cabbage, and snow peas.',
      },
      {
        title: 'Pancit Malabon',
        imgSrc: pancitMalabonImg,
        description:
          'Pansit Malabon is a flavorful noodle dish that originated in the City of Malabon. This dish resembles the Pancit Palabok but the array of seafood toppings and the traditional tough and thick rice noodles distinguishes this dish.',
      },
    ],
  },
  {
    sectionHeader: 'Chicken',
    menuItems: [
      {
        title: 'Chicken Adobo',
        imgSrc: chickenAdoboImg,
        description:
          'Chicken Adobo is an authentic Filipino dish and is one of the mostly recognized Filipino foods. Not to be mistaken with Mexican adobo, this dish is uniquely prepared by stewing chicken in vinegar and soy sauce.',
      },
    ],
  },
  {
    sectionHeader: 'Beef',
    menuItems: [
      {
        title: 'Beef Caldereta',
        imgSrc: beefCalderetaImg,
        description:
          'Another favorite Filipino dish is the Kaldereta. It is a hearty meat dish using chevon (goat meat), beef, or pork combined with potatoes, carrots, tomato sauce, and liver spread or liver paste.',
      },
      {
        title: 'Oxtail Kare Kare',
        imgSrc: oxtailKareKareImg,
        description:
          'Kare kare is a rich and peanut buttery oxtail and beef stew that is braised for over two hours, includes a cornucopia of tender vegetables, and served with a side of steaming white rice',
      },
    ],
  },
  {
    sectionHeader: 'Pork',
    menuItems: [
      {
        title: 'Ground Pork Lumpia',
        imgSrc: groundPorkLumpiaImg,
        description:
          'Lumpia or Lumpiang Shanghai is a type of Filipino egg roll. The basic filling is composed of ground pork along with minced onions, carrots, and seasonings such as salt and ground black pepper.',
      },
    ],
  },
  {
    sectionHeader: 'Desserts',
    menuItems: [
      {
        title: 'Turon',
        imgSrc: turonImg,
        description:
          'Turon, also known as banana lumpia, is filled with sweet fruits like jackfruit, saba banana, sweet potato, or mango.',
      },
      {
        title: 'Puto Ube',
        imgSrc: putoUbeImg,
        description:
          'Puto Ube like most puto is a steamed cake that can either be made with rice flour or just the usual all-purpose flour, it is easy to distinguish compared to most due to its vibrant purple colour coming from its main ingredient called ube or purple yam.',
      },
    ],
  },
]
