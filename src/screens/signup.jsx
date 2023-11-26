import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    
    Image,
  } from '@chakra-ui/react'
  import { useState } from 'react'
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
  import logo from '../assets/logo.svg'
  import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';  
  import {Link} from 'react-router-dom'
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false)
    const login = useGoogleLogin({
      onSuccess: tokenResponse => console.log(tokenResponse),
    });
    return (
      <GoogleOAuthProvider clientId="413883304345-bcdbafc7lf4a7k8hpfgutqlgqng30j9r.apps.googleusercontent.com">
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
        style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
             // Set a negative z-index to keep the content above the background
          }}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Image
        boxSize='150px'
        objectFit='cover'
        borderRadius='full'
        src={logo}
        alt='BIT Bids Logo'
        className='flip'
                />
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            BitsBids: Your Ultimate Online Auction Platform for Buying and Selling🔥
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Button
                  size="lg"
                  bg={'purple'}
                  color={'white'}
                  _hover={{
                    bg: 'purple.500',
                  }}
                  onClick={() => login()}>
                  Signup Using BITSMail
                </Button>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to ="/login" ><Text color={'blue.400'}>Login</Text></Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </GoogleOAuthProvider>
      )
  }