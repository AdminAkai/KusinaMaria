import { FC, ReactNode } from 'react'

import AnimatedText from 'src/shared/components/AnimatedText'

import MenuSection from './MenuSection'

import { fullMenu } from './lib'
import { MenuContainer, MenuTitle } from './styledComponents'

const Menu: FC = (): ReactNode => {
  return (
    <MenuContainer>
      <MenuTitle>
        <AnimatedText text='Menu' />
      </MenuTitle>
      {fullMenu.map(({ sectionHeader, menuItems }) => (
        <MenuSection
          key={sectionHeader}
          sectionHeader={sectionHeader}
          menuItems={menuItems}
        />
      ))}
    </MenuContainer>
  )
}

export default Menu
