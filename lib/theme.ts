import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  
  sizes: {
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.600',
        lineHeight: 'tall',
      },
      p:{
        padding:'.5em 0'
      },
      h3 : {
        padding: '1em 0',
        fontSize: 'x-large',
        color:' #3ea394'
      }
    },
  },
  
  components: {
    Link: {
      // 1. We can update the base styles
      baseStyle: {
        color: mode('black', 'green.100'),
        _hover:{
            color:'green.400'
        }
      }
    }
},
})

export default theme