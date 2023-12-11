import { FC, ReactNode, useRef } from 'react'
import { Variants, useInView } from 'framer-motion'

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
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })

  return (
    <MenuItemContainer ref={ref}>
      <MenuItemImage
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 3 }}
        src={imgSrc}
        draggable={false}
      />
      <MenuItemDetails
        transition={{ staggerChildren: 0.3 }}
        initial='initial'
        animate={isInView ? 'animate' : 'initial'}
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
