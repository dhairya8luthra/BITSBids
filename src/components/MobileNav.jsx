// MobileNav.js
import React from 'react';
import {
  Flex,
  Text,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMenu, FiBell, FiChevronDown } from 'react-icons/fi';
import SearchBar from './SearchBar';

const MobileNav = ({ onOpen }) => {
  return (
    <Flex
      mt="0 !important"
      ml={{ base: 0, md: 60 }}
      px={{ base: 0, md: 2 }}
      height="20"
      top='0'
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="5px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Bits Bids
      </Text>
      <SearchBar />
      {/* Notification and User Menu */}
    </Flex>
  );
};

export default MobileNav;
