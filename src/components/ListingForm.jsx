import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
  InputLeftAddon,
  InputGroup,
  InputRightElement,
  Tag,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react';
import CurrencyInput from 'react-currency-input-field';

import { useToast } from '@chakra-ui/react';

function TagsInputForm() {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagAdd = () => {
    if (tagInput.trim() !== '') {
      setTags([...tags, tagInput]);
      setTagInput('');
    }
  };

  const handleTagRemove = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
  };

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Create New Listing🍀
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="Listing-name" fontWeight={'normal'}>
            What are you putting up for Auction?
          </FormLabel>
          <Input id="" placeholder="Product Name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="Description" fontWeight={'normal'}>
          Description
        </FormLabel>
        <Textarea id="description" type="description" placeholder="Description" />
        <FormHelperText>Describe what you are selling</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="tags" fontWeight={'normal'} mt="2%">
          Tags
        </FormLabel>
        <InputGroup size="md">
          <Input
            placeholder="Add tag"
            value={tagInput}
            onChange={handleInputChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleTagAdd}>
              Add
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box mt="2">
          {tags.map((tag, index) => (
            <Tag key={index} variant="solid" colorScheme="yellow" m="1">
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => handleTagRemove(tag)} />
            </Tag>
          ))}
        </Box>
      </FormControl>
    </>
  );
}
function Form2() {
  return (
    <>
      <Heading w="100%"  fontWeight="normal" mb="2%">
        Create New Listing🍀
      </Heading>
      <FormControl ml="0" w='100%'>
        <FormLabel htmlFor="Starting-bid-price" fontWeight="normal" mt='5'>
          Starting Bid Price🪙
        </FormLabel>
        <InputGroup>
        <CurrencyInput
          id="start-bid-value"
          name="start-bid-value"
          placeholder=" Please enter a number"
          prefix="₿"
          style={{ textAlign: 'left', fontWeight:'normal',w:'100%' }} 

          // Left-align the CurrencyInput

        />
        </InputGroup>
        <FormLabel htmlFor='images' fontWeight='normal' mt='10px'>
          Please Upload a few Images📸
        </FormLabel>
      </FormControl>
      {/* Add more form fields as needed */}
    </>
  );
}
    

function Form3() {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Additional Details
      </Heading>
      {/* Add form fields for additional details */}
    </>
  );
}

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const handleNextStep = () => {
    setStep(step + 1);
    setProgress(progress + 33.33);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
    setProgress(progress - 33.33);
  };

  const handleSubmit = () => {
    toast({
      title: 'Listing Created',
      description: "We've created the listing for you",
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated />
        {step === 1 ? (
          <TagsInputForm />
        ) : step === 2 ? (
          <Form2 />
        ) : (
          <Form3 />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={handlePreviousStep}
                isDisabled={step === 1}
                colorScheme="yellow"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                onClick={handleNextStep}
                w="7rem"
                isDisabled={step === 3}
                colorScheme="yellow"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                onClick={handleSubmit}
                w="7rem"
                colorScheme="red"
                variant="solid"
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
