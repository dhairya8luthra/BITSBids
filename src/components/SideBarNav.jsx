// SidebarNav.js
import React from 'react';
import { VStack } from '@chakra-ui/react';
import NavItem from './NavItems'; // Assuming you have a NavItem component

const LinkItems = [
  { name: 'Home', route: '/home' },
  { name: 'Your Listings', route: '/listings' },
  { name: 'Chats', route: '/chats' },
  { name: 'Favorites', route: '/favorites' },
  { name: 'Settings', route: '/settings' },
];

const SidebarNav = () => {
  return (
    <VStack spacing={4} align="stretch">
      {LinkItems.map((link) => (
        <NavItem key={link.name} route={link.route}>
          {link.name}
        </NavItem>
      ))}
    </VStack>
  );
};

export default SidebarNav;
