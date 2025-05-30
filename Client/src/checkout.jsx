import {
  Box, Button, FormControl, FormLabel, Input, Heading, VStack, FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (values) => {
    const amount = 2000; // You can make this dynamic later

    // Send data to payment page
    navigate('/payment', {
      state: {
        customer: values,
        amount,
      },
    });
  };

  return (
    <Box maxW="600px" mx="auto" mt={10} p={6} boxShadow="lg" borderRadius="md" bg="white">
      <Heading mb={6}>Checkout</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} align="stretch">
          <FormControl isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Your full name"
              {...register('name', { required: 'Name is required' })}
            />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="you@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.address}>
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="123 Main St"
              {...register('address', { required: 'Address is required' })}
            />
            <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.city}>
            <FormLabel>City</FormLabel>
            <Input
              placeholder="City"
              {...register('city', { required: 'City is required' })}
            />
            <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.postalCode}>
            <FormLabel>Postal Code</FormLabel>
            <Input
              placeholder="ZIP / Postal code"
              {...register('postalCode', { required: 'Postal code is required' })}
            />
            <FormErrorMessage>{errors.postalCode?.message}</FormErrorMessage>
          </FormControl>

          <Button colorScheme="blue" type="submit" isLoading={isSubmitting}>
            Place Order
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default Checkout;
