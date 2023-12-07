import { IMenuItemProps } from './MenuItem/MenuItem'

interface MenuSection {
  sectionHeader: string
  menuItems: IMenuItemProps[]
}

export const fullMenu: MenuSection[] = [
  {
    sectionHeader: 'Starters',
    menuItems: [
      {
        title: '',
        imgSrc: '',
        description: '',
      },
    ],
  },
  {
    sectionHeader: 'Chicken',
    menuItems: [
      {
        title: '',
        imgSrc: '',
        description: '',
      },
    ],
  },
  {
    sectionHeader: 'Beef',
    menuItems: [
      {
        title: '',
        imgSrc: '',
        description: '',
      },
    ],
  },
]
