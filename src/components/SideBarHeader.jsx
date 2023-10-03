// SidebarHeader.js
import React from 'react';
import {
  Flex,
  Image,
  Text,
  CloseButton,
  useColorModeValue,
} from '@chakra-ui/react';
import logo from '../assets/logo.svg';

const SidebarHeader = ({ onClose }) => {
  return (
    <Flex
      h="20"
      alignItems="center"
      mx="8"
      justifyContent="space-between"
      borderBottom="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Image
         borderRadius='full'
         boxSize='50px'
         src={logo}
         alt='Bits Bids Logo'
         className='flip'
      />
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        BitsBids
      </Text>
      <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
    </Flex>
  );
};

export default SidebarHeader;
