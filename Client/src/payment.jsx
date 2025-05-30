import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Text,
  VStack,
  useToast,
  Divider,
  Center,
} from '@chakra-ui/react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

const CARD_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#2D3748',
      backgroundColor: '#F7FAFC',
      '::placeholder': { color: '#A0AEC0' },
    },
    invalid: { color: '#E53E3E' },
  },
};

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const res = await fetch('http://localhost:4242/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 2000 }), // $20
    });

    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      toast({
        title: 'Payment failed',
        description: result.error.message,
        status: 'error',
        isClosable: true,
      });
    } else if (result.paymentIntent.status === 'succeeded') {
      toast({
        title: 'Payment successful!',
        description: 'Thank you for your purchase.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      setTimeout(() => navigate('/receipt'), 2000);
    }

    setLoading(false);
  };

  return (
    <Center minH="100vh" bg="gray.50">
      <Container maxW="md" p={6} bg="white" boxShadow="xl" borderRadius="lg">
        <Heading mb={2}>Checkout</Heading>
        <Text mb={4}>Enter your card details below to complete the payment.</Text>
        <Divider mb={6} />

        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            <FormControl>
              <FormLabel>Card Information</FormLabel>
              <Box
                p={3}
                bg="gray.50"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="md"
              >
                <CardElement options={CARD_OPTIONS} />
              </Box>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              isLoading={loading}
              isDisabled={!stripe || !elements || loading}
            >
              Pay $20
            </Button>
          </VStack>
        </form>
      </Container>
    </Center>
  );
};

export default Payment;
