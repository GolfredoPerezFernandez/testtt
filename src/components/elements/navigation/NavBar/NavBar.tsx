import { HStack } from '@chakra-ui/react';
import { NavItem } from '../NavItem';
import NAV_LINKS from './paths';

const NavBar = () => {
  return (
    <HStack gap={'30px'}>
      {NAV_LINKS.map((link) => (
        <NavItem key={`link-${link.label}`} {...link} />
      ))}
       
  
    </HStack>
  );
};

export default NavBar;
