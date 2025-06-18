import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  FormErrorMessage,
  useToast,
  Center,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = 'Email is required';
    if (!form.password) errs.password = 'Password is required';
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);

    // TODO: Replace with your real authentication logic/API call
    if (form.email === 'user@example.com' && form.password === 'password') {
      localStorage.setItem('token', 'demo-token');
      toast({
        title: 'Login successful!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      setTimeout(() => navigate('/'), 1000);
    } else {
      toast({
        title: 'Invalid credentials',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  return (
    <Center minH="100vh" bg="gray.50">
      <Box
        maxW="md"
        w="100%"
        p={8}
        bg="white"
        boxShadow="xl"
        borderRadius="lg"
      >
        <Heading mb={6} textAlign="center">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Button
              colorScheme="blue"
              type="submit"
              isLoading={loading}
              w="100%"
            >
              Login
            </Button>
          </VStack>
        </form>
        <Text mt={4} fontSize="sm" color="gray.500" textAlign="center">
          Demo: user@example.com / password
        </Text>
      </Box>
    </Center>
  );
};

export default Login;