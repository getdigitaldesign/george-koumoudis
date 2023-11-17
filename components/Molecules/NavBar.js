import React from 'react';
import { MenuToggle, Logo, NavBarContainer} from '../Atoms';
import { MenuLinks } from './MenuLinks';

export const NavBar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
  
    const toggle = () => setIsOpen(!isOpen)
  
    return (
      <NavBarContainer {...props}>
        <Logo
          flex={1}
          justify-content={'center'}
          color={["blue.600", "blue.600", "primary.500", "primary.500"]}
        />
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavBarContainer>
    )
  }