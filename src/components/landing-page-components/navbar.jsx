import React from 'react';
import logo from "../../assets/logo.svg"
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const NAV_ITEMS = [
    {
      label: 'What is BitsBids?',
      href: '#introSection',
    },
    {
      label: 'Meet The Team',
      href: '#teamSection',
    },
    {
      label: 'Features',
      href: '#featuresSection',
    },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    
    if (section) {
      const yOffset = -60; // Adjust this offset according to your layout (if needed)
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      console.log("scrolling to ", sectionId)
     // onToggle(); // Close the mobile menu after clicking on a section link
    }
  };

  const MobileNavItem = ({ label, children, href }) => {
    const handleClick = () => {
      console.log("clicked", href);
      scrollToSection(href);
    };

    return (
      <Stack spacing={4}>
        <Button
          zIndex="2"
          ms={2}
          py={2}
          variant="unstyled"
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
          bg="white"
          _hover={{
            textDecoration: 'none',
            color: useColorModeValue('gray.800', 'white'),
            bg: useColorModeValue('white', 'yellow.400'),
          }}
          _active={{
            bg: useColorModeValue('yellow.400', 'yellow.500'),
            transform: 'scale(0.98)',
          }}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          {label}
        </Button>
      </Stack>
    );
  };

  return (
    <Box position='fixed' left='0' right='0' top='0' w='100%' zIndex='10'>
      <Flex
        h="20"
        alignItems="center"
        mx="0"
        justifyContent="space-between"
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 0 }}
        px={{ base: 2 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image
            borderRadius='full'
            boxSize='50px'
            src={logo}
            alt='Bits Bids Logo'
            className='flip'
          />
          <Text paddingTop='0.5rem' paddingLeft='0.5rem' fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            BitsBids
          </Text>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            {NAV_ITEMS.map((navItem) => (
              <MobileNavItem key={navItem.label} {...navItem} />
            ))}
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button as={Link} to= "/login" fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
            Login
          </Button>
          <Button
            as={Link}
            to ="/register"
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'yellow.400'}
            href={'#'}
            _hover={{
              bg: 'yellow.200',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default NavBar;
