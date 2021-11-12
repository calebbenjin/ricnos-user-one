import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';

const theme = extendTheme({
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `'Poppins', sans-serif`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 800
  },

  components: {
    Input: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      borderColor: {
        
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        // 4. We can override existing variants
        // solid: (props) => ({
        //   bg: props.colorMode === "dark" ? "red.300" : "red.500",
        // }),
      },
    },
  },
  

})

export default theme;