import { FC, ReactNode } from 'react'
import { Variants } from 'framer-motion'

import {
  MenuItemContainer,
  MenuItemDescription,
  MenuItemDetails,
  MenuItemImage,
  MenuItemTitle,
} from './styledComponents'

export interface IMenuItemProps {
  imgSrc: string
  title: string
  description: string
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

const MenuItem: FC<IMenuItemProps> = ({
  imgSrc,
  title,
  description,
}): ReactNode => {
  return (
    <MenuItemContainer>
      <MenuItemImage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        src={imgSrc}
        draggable={false}
      />
      <MenuItemDetails
        transition={{ staggerChildren: 0.3 }}
        initial='initial'
        animate='animate'
      >
        <MenuItemTitle variants={variants}>{title}</MenuItemTitle>
        <MenuItemDescription variants={variants}>
          {description}
        </MenuItemDescription>
      </MenuItemDetails>
    </MenuItemContainer>
  )
}

export default MenuItem
