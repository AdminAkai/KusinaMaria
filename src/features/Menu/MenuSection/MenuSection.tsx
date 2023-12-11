import { FC, ReactNode, useRef } from 'react'
import { Variants, useInView } from 'framer-motion'

import MenuItem, { IMenuItemProps } from '../MenuItem/MenuItem'

import {
  MenuSectionContainer,
  MenuSectionHeader,
  MenuSectionItems,
  MenuSectionTitle,
  SectionDivider,
} from './styledComponents'

interface IMenuSectionProps {
  sectionHeader: string
  menuItems: IMenuItemProps[]
}

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

const MenuSection: FC<IMenuSectionProps> = ({
  sectionHeader,
  menuItems,
}): ReactNode => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  return (
    <MenuSectionContainer>
      <MenuSectionHeader
        ref={ref}
        variants={variants}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
        transition={{ duration: 0.2, ease: 'easeIn' }}
      >
        <MenuSectionTitle>{sectionHeader}</MenuSectionTitle>
        <SectionDivider />
      </MenuSectionHeader>
      <MenuSectionItems>
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.title} {...menuItem} />
        ))}
      </MenuSectionItems>
    </MenuSectionContainer>
  )
}

export default MenuSection
