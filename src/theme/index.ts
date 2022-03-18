import { ChakraTheme, extendTheme, ThemeComponentProps } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
    colors: {
        demoFilter: {
            50: '#f5fee5',
            100: '#e1fbb2',
            200: '#cdf781',
            300: '#b8ee56',
            400: '#a2e032',
            500: '#8ac919',
            600: '#71ab09',
            700: '#578602',
            800: '#3c5e00',
            900: '#203300',
        }
    },
    components: {
        Button: {
            variants: {
                primary: (props: ThemeComponentProps<ChakraTheme>) => ({
                    rounded: 'none',
                    color: mode('white', 'gray.800')(props),
                    backgroundColor: mode('demoFilter.500', 'demoFilter.200')(props),

                    _hover: {
                        backgroundColor: mode('demoFilter.600', 'demoFilter.300')(props),
                    },

                    _active: {
                        backgroundColor: mode('demoFilter.700', 'demoFilter.400')(props),
                    },
                }),
            },
        }
    }
})

export default theme;
