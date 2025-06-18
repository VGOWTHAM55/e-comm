import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { 
  Box, 
  Container, 
  Flex, 
  Text, 
  Button, 
  Grid, 
  Card, 
  CardBody, 
  Image, 
  Heading, 
  Stack, 
  Badge, 
  Input, 
  Textarea, 
  FormControl, 
  FormLabel, 
  VStack, 
  HStack, 
  Icon, 
  Spinner, 
  Alert, 
  AlertIcon, 
  useToast,
  Link,
  Spacer,
  Divider,
  SimpleGrid,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [cartModalOpen, setCartModalOpen] = useState(false);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = [
          {
            _id: '1',
            name: 'Wireless Headphones',
            price: 59.99,
            originalPrice: 79.99,
            discount: 25,
            rating: 4.5,
            reviews: 128,
            image: 'https://plus.unsplash.com/premium_photo-1666739389069-ac398d974962?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzExfHxXaXJlbGVzcyUyMEhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
            category: 'Audio',
            inStock: true
          },
          {
            _id: '2',
            name: 'Smartphone Stand',
            price: 19.99,
            originalPrice: 24.99,
            discount: 20,
            rating: 4.2,
            reviews: 87,
            image: 'https://plus.unsplash.com/premium_photo-1681718166365-9ae0a5d208a7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnRwaG9uZSUyMFN0YW5kfGVufDB8fDB8fHww',
            category: 'Accessories',
            inStock: true
          },
          {
            _id: '3',
            name: 'Laptop Sleeve',
            price: 25.00,
            originalPrice: 35.00,
            discount: 29,
            rating: 4.7,
            reviews: 203,
            image: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80',
            category: 'Accessories',
            inStock: false
          },
          {
            _id: '4',
            name: 'Bluetooth Speaker',
            price: 39.50,
            originalPrice: 49.99,
            discount: 21,
            rating: 4.4,
            reviews: 156,
            image: 'https://images.unsplash.com/photo-1706013762574-adc75c766768?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Audio',
            inStock: true
          },
          {
            _id: '5',
            name: 'Smartwatch',
            price: 89.99,
            originalPrice: 129.99,
            discount: 31,
            rating: 4.6,
            reviews: 342,
            image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80',
            category: 'Wearables',
            inStock: true
          },
          {
            _id: '6',
            name: 'Gaming Mouse',
            price: 29.99,
            originalPrice: 39.99,
            discount: 25,
            rating: 4.3,
            reviews: 94,
            image: 'https://images.unsplash.com/photo-1563297007-0686b7003af7?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Gaming',
            inStock: true
          },
          {
            _id: '7',
            name: 'Tablet Holder',
            price: 22.50,
            originalPrice: 29.99,
            discount: 25,
            rating: 4.1,
            reviews: 67,
            image: 'https://images.unsplash.com/photo-1623126908027-0ece32cdad9c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            category: 'Accessories',
            inStock: true
          },
          {
            _id: '8',
            name: 'Desk Lamp',
            price: 35.00,
            originalPrice: 45.00,
            discount: 22,
            rating: 4.5,
            reviews: 189,
            image: 'https://images.unsplash.com/photo-1605984522226-1b840e9c1de2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fERlc2slMjBMYW1wfGVufDB8fDB8fHww',
            category: 'Home',
            inStock: true
          }
        ];
        setProducts(data);
      } catch (err) {
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.some(item => item._id === product._id);
    if (isInWishlist) {
      setWishlist(prev => prev.filter(item => item._id !== product._id));
      toast({
        title: "Removed from Wishlist",
        description: `${product.name} has been removed from your wishlist.`,
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setWishlist(prev => [...prev, product]);
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist.`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleContactSubmit = () => {
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

   const handleCheckout = () => {
    const token = localStorage.getItem('token');
  if (!token) {
    toast({
      title: "Authentication Required",
      description: "Please log in before proceeding.",
      status: "warning",
      duration: 3000,
      isClosable: true
    });
    window.location.href = '/login';
    return;
  }

  setCartModalOpen(false);
  window.location.href = '/checkout';
};

 return (
    <Box 
      minH="100vh" 
      bgImage="url('https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
      bgSize="cover"
      bgAttachment="fixed"
      bgPosition="center"
    >
      {/* Enhanced Navbar */}
      <Box 
        bg="rgba(255, 255, 255, 0.95)" 
        backdropFilter="blur(10px)" 
        boxShadow="lg" 
        position="sticky" 
        top="0" 
        zIndex="50"
        borderBottom="1px solid"
        borderColor="gray.200"
      >
        <Container maxW="7xl">
          <Flex py={4} align="center" justify="space-between">
            <Heading size="lg" color="orange.600" fontWeight="bold">
              E-Shop
            </Heading>
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
              <Link href="#" color="orange.600" _hover={{color: 'green.800',fontWeight: 'bold', textDecoration: 'none'}}>
                Home
              </Link>
              <Link href="#products" color="orange.600" _hover={{color: 'purple.900',fontWeight: 'bold', textDecoration:"none"}}>
                Products
              </Link>
              <Link href="#contact" color="orange.600" _hover={{color: 'blue.700',fontWeight: 'bold', textDecoration:"none"}}>
                Contact
              </Link>
              <Button as={RouterLink} to="/login" colorScheme="orange" variant="outline">
                Login/Register
              </Button>
              <HStack>
                <Badge colorScheme="orange">{cart.length}</Badge>
                   <IconButton
                    icon={<FaShoppingCart />} 
                    onClick={() => setCartModalOpen(true)}
                    variant="ghost"
                    colorScheme="purple"
                    />
              </HStack>
            </HStack>
          </Flex>
        </Container>
      </Box>
      

      {/* Hero Section */}
      <Box py={16} textAlign="center">
        <Container maxW="4xl">
          <VStack spacing={6}>
            <Heading 
              size="2xl" 
              color="white" 
              textShadow="2px 2px 4px rgba(0,0,0,0.6)"
              fontWeight="bold"
            >
              Welcome To E-Shop
            </Heading>
            <Text 
              fontSize="xl" 
              color="white" 
              textShadow="1px 1px 2px rgba(0,0,0,0.6)"
              maxW="2xl"
            >
              Discover amazing products at unbeatable prices. Quality guaranteed, satisfaction promised.
            </Text>
            <Button 
              size="lg" 
              colorScheme="cyan" 
              boxShadow="xl"
              _hover={{ transform: 'translateY(-2px)', boxShadow: '2xl' }}
              transition="all 0.2s"
            >
            <Link href="#products" style={{ textDecoration: 'none', color: 'white' }}>Shop Now</Link>
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Products Section */}
      <Box id="products" py={1}>
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading 
                size="xl" 
                color="white" 
                textShadow="2px 2px 4px rgba(0,0,0,0.6)"
                mb={4}
              >
                Featured Products
              </Heading>
              <Divider borderColor="white" opacity={0.3} />
            </Box>

            {loading ? (
              <Flex justify="center" align="center" h="48">
                <VStack spacing={4}>
                  <Spinner size="xl" color="blue.500" />
                  <Text color="white" fontSize="lg">Loading amazing products...</Text>
                </VStack>
              </Flex>
            ) : error ? (
              <Alert status="error" borderRadius="lg" bg="red.50">
                <AlertIcon />
                {error}
              </Alert>
            ) : products.length === 0 ? (
              <Alert status="info" borderRadius="lg" bg="blue.50">
                <AlertIcon />
                No products found.
              </Alert>
            ) : (
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
                {products.map(product => (
                  <Card 
                    key={product._id}
                    bg="rgba(255, 255, 255, 0.95)"
                    backdropFilter="blur(10px)"
                    boxShadow="xl"
                    borderRadius="xl"
                    overflow="hidden"
                    transition="all 0.3s"
                    _hover={{ 
                      transform: 'translateY(-8px)', 
                      boxShadow: '2xl',
                      bg: 'white'
                    }}
                    position="relative"
                  >
                    {product.discount > 0 && (
                      <Badge 
                        position="absolute" 
                        top={3} 
                        left={3} 
                        colorScheme="red" 
                        zIndex={1}
                        borderRadius="full"
                        px={2}
                        py={1}
                      >
                        -{product.discount}%
                      </Badge>
                    )}
                    
                    <Box position="relative" overflow="hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        h="200px"
                        w="100%"
                        objectFit="cover"
                        transition="transform 0.3s"
                        _hover={{ transform: 'scale(1.05)' }}
                      />
                      <HStack 
                        position="absolute" 
                        top={3} 
                        right={3} 
                        spacing={2}
                      >
                        <IconButton
                          icon={<FaHeart />}
                          size="sm"
                          colorScheme={wishlist.some(item => item._id === product._id) ? "pink" : "green"}
                          variant="solid"
                          borderRadius="full"
                          onClick={() => toggleWishlist(product)}
                          opacity={0.9}
                        />
                        <IconButton
                          icon={<FaEye />}
                          size="sm"
                          colorScheme="purple"
                          variant="solid"
                          borderRadius="full"
                          onClick={() => openProductModal(product)}
                          opacity={0.9}
                        />
                      </HStack>
                    </Box>

                    <CardBody p={6}>
                      <Stack spacing={4} align="start">
                        <Badge colorScheme="brand" alignSelf="flex-start" fontSize="xs">
                          {product.category}
                        </Badge>
                        
                        <Heading size="md"  noOfLines={2}>
                          {product.name}
                        </Heading>
                        
                        <HStack justify="space-between" align="center">
                          <VStack align="start" spacing={1}>
                            <HStack>
                              <Text fontSize="lg" fontWeight="bold" color="orange.600">
                                ${product.price.toFixed(2)}
                              </Text>
                              {product.originalPrice > product.price && (
                                <Text 
                                  fontSize="sm" 
                                  color="teal.500" 
                                  textDecoration="line-through"
                                >
                                  ${product.originalPrice.toFixed(2)}
                                </Text>
                              )}
                            </HStack>
                            <Text fontSize="xs" >
                              <FaStar color="orange" /> {product.rating} ({product.reviews} reviews)
                            </Text>
                          </VStack>
                          
                          <Badge 
                            colorScheme={product.inStock ? "green" : "pink"} 
                            variant="subtle"
                            mr="auto"
                          >
                            {product.inStock ? "In Stock" : ""}
                          </Badge>
                        </HStack>

                        <Button
                          colorScheme="purple"
                          size="md"
                          borderRadius="15px"
                          leftIcon={<FaShoppingCart />}
                          onClick={() => addToCart(product)}
                          isDisabled={!product.inStock}
                          _hover={{ 
                            transform: 'translateY(-3px)',
                            boxShadow: 'xlg',
                            color: 'orange.600',
                            bg: 'whiteAlpha.900',
                          }}
                          transition="all 0.2s"
                        >
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </Button>
                      </Stack>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            )}
          </VStack>
        </Container>
      </Box>

      {/* Enhanced Contact Section */}
      <Box id="contact" bg="" backdropFilter="" py={10}>
        <Container maxW="4xl">
          <VStack spacing={8}>
            <Box textAlign="center">
              <Heading size="xl" color="white" mb={2}>
                Get in Touch
              </Heading>
              <Text color="white" fontSize="lg">
                Have questions? We'd love to hear from you!
              </Text>
            </Box>

            <Box 
              
              p={8} 
              borderRadius="2xl" 
              boxShadow="2xl" 
              w="100%"
            >
              <VStack spacing={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="100%">
                  <FormControl isRequired>
                    <FormLabel color="white">Full Name</FormLabel>
                    <Input 
                      placeholder="Enter your full name"
                      size="lg"
                      color="white"
                      borderRadius="lg"
                      _focus={{ borderColor: 'white', boxShadow: '0 0 0 1px #3182ce' }}
                      _hover={{color: 'orange.600',bg: 'whiteAlpha.900'}}
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel color="white">Email Address</FormLabel>
                    <Input 
                      type="email"
                      placeholder="Enter your email"
                      size="lg"
                      borderRadius="lg"
                      _focus={{ borderColor: 'white', boxShadow: '0 0 0 1px #3182ce' }}
                      _hover={{color: 'orange.600',bg: 'whiteAlpha.900'}}
                    />
                  </FormControl>
                </SimpleGrid>

                <FormControl isRequired>
                  <FormLabel color="white">Phone Number</FormLabel>
                  <Input 
                    type="tel"
                    placeholder="Enter your phone number"
                    size="lg"
                    borderRadius="lg"
                    _focus={{ borderColor: 'white', boxShadow: '0 0 0 1px #3182ce' }}
                    _hover={{color: 'orange.600',bg: 'whiteAlpha.900'}}
                  />
                </FormControl>


                <FormControl isRequired>
                  <FormLabel color="white">Message</FormLabel>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    size="lg"
                    borderRadius="lg"
                    _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px #3182ce' }}
                    _hover={{color: 'orange.600',bg: 'whiteAlpha.900'}}
                  />
                </FormControl>

                <Button
                  onClick={handleContactSubmit}
                  colorScheme="brand"
                  size="lg"
                  w="100%"
                  borderRadius="lg"
                  _hover={{ 
                    transform: 'translateY(-2px)',
                    boxShadow: 'xl'
                  }}
                  transition="all 0.2s"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
      {/* Enhanced Footer */}

      <Box bg="sky.800" color="white" py={12}>
        <Container maxW="7xl">
          <VStack spacing={8}>
            <Flex 
              direction={{ base: 'column', md: 'row' }} 
              justify="space-between" 
              align="center" 
              w="100%"
              spacing={6}
            >
              <VStack align={{ base: 'center', md: 'flex-start' }} spacing={2}>
                <Heading size="md" color="white">
                <Link _hover={{ color: 'red.400' }}>E-Shop</Link>
                </Heading>
                <Text color="brand" textAlign={{ base: 'center', md: 'left' }}>
                    <Link  _hover={{ color: 'blue.300' }}>Your Trusted Online Shopping Destination</Link>
                </Text>
              </VStack>

              <HStack spacing={6}>
                <Link href="https://www.facebook.com/" _hover={{ color: 'green.400' }}>
                  <HStack>
                    <Icon as={FaFacebook} w={5} h={5} />
                    <Text display={{ base: 'none', md: 'block' }}>Facebook</Text>
                  </HStack>
                </Link>
                <Link href="https://www.instagram.com/" _hover={{ color: 'pink.400' }}>
                  <HStack>
                    <Icon as={FaInstagram} w={5} h={5} />
                    <Text display={{ base: 'none', md: 'block' }}>Instagram</Text>
                  </HStack>
                </Link>
                <Link href="https://x.com/?lang=en-in" _hover={{ color: 'blue.300' }}>
                  <HStack>
                    <Icon as={FaTwitter} w={5} h={5} />
                    <Text display={{ base: 'none', md: 'block' }}>Twitter</Text>
                  </HStack>
                </Link>
                <Link href="https://wa.me/1234567890" _hover={{ color: 'teal.400' }}>
                  <HStack>
                    <Icon as={FaWhatsapp} w={5} h={5} />
                    <Text display={{ base: 'none', md: 'block' }}>WhatsApp</Text>
                  </HStack>
                </Link>
              </HStack>
            </Flex>

            <Divider borderColor="gray.600" />

            <Text colorScheme="brand" textAlign="center">
              <Link href="#" _hover={{ color: 'cyan.400' }}> 
              © {new Date().getFullYear()}  All rights reserved @ E-Shop Pvt Ltd.
              </Link>
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Product Modal */}
      <Modal isOpen={cartModalOpen} onClose={() => setCartModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cart.length === 0 ? (
              <Text>No items in cart.</Text>
            ) : (
              <VStack spacing={4} align="stretch">
                {cart.map((item, index) => (
                  <Flex key={index} justify="space-between">
                    <Text>{item.name}</Text>
                    <Text>${item.price}</Text>
                  </Flex>
                ))}
              </VStack>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={handleCheckout}>Proceed to Checkout</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Shop;