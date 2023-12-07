import { FC, ReactNode } from 'react'

import AnimatedText from 'src/shared/components/AnimatedText'

import { fullMenu } from './lib'
import {
  MenuContainer,
  MenuSection,
  MenuSectionHeader,
  MenuSectionItems,
  MenuSectionTitle,
  MenuTitle,
  SectionDivider,
} from './styledComponents'
import MenuItem from './MenuItem'

const Menu: FC = (): ReactNode => {
  return (
    <MenuContainer>
      <MenuTitle>
        <AnimatedText text='Menu' />
      </MenuTitle>
      {fullMenu.map(({ sectionHeader, menuItems }) => (
        <MenuSection key={sectionHeader}>
          <MenuSectionHeader>
            <MenuSectionTitle>{sectionHeader}</MenuSectionTitle>
            <SectionDivider />
          </MenuSectionHeader>
          <MenuSectionItems>
            {menuItems.map((menuItem) => (
              <MenuItem key={menuItem.title} {...menuItem} />
            ))}
          </MenuSectionItems>
        </MenuSection>
      ))}
    </MenuContainer>
  )
}

export default Menu
