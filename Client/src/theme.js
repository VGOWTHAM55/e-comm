import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e3f2f9',
      100: '#c5e4f3',
      200: '#a2d4ec',
      300: '#7ac1e4',
      400: '#47a9da',
      500: '#f26367', // main
      600: '#662c91',
      700: '#006ba1',
      800: '#005885',
      900: '#003f5e',
    },
     myColor: {
          50: "#effefd",
          100: "#e0fcfc",
          200: "#c1faf8",
          300: "#a1f7f5",
          400: "#82f5f1",
          500: "#63f2ee",
          600: "#4fc2be",
          700: "#3b918f",
          800: "#28615f",
          900: "#143030"
        },
        maroon: {
    50: 'oklch(0.94 0.04 336)',
    100: 'oklch(0.93 0.05 336)',
    200: 'oklch(0.92 0.06 338)',
    300: 'oklch(0.89 0.08 342)',
    400: 'oklch(0.85 0.1 345)',
    500: "#00d5be",
    600: '#00bcff',
    700: 'oklch(0.67 0.21 5)',
    800: 'oklch(0.62 0.24 13)',
    900: 'oklch(0.53 0.21 16)',
    950: 'oklch(0.41 0.16 16)',
}
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
});

export default theme;
