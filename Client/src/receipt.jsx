import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Icon,
  Button,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Receipt = () => {
  const navigate = useNavigate();

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={20}
      p={8}
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <Icon as={CheckCircleIcon} w={12} h={12} color="green.400" mb={4} />
      <Heading as="h2" size="lg" mb={2}>
        Payment Successful!
      </Heading>
      <Text fontSize="md" mb={6}>
        Thank you for your order. Your receipt has been emailed to you.
      </Text>

      <VStack spacing={1} align="start" fontSize="sm" bg="gray.50" p={4} borderRadius="md">
        <Text><strong>Order ID:</strong> #123456</Text>
        <Text><strong>Amount Paid:</strong> $20.00</Text>
        <Text><strong>Status:</strong> Paid</Text>
      </VStack>

      <Button mt={6} colorScheme="blue" onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </Box>
  );
};

export default Receipt;
