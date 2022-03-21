import { mode } from '@chakra-ui/theme-tools';
import { background, ComponentStyleConfig } from "@chakra-ui/react";

export const DemoFilter: ComponentStyleConfig = {

    parts: ['main', 'testDiv'],

    baseStyle: (props) => ({
        main: {
            background: mode('gray.50', 'whiteAlpha.50')(props)
        },
        testDiv: {
            background: mode('blue', 'green')(props)
        }
    }),
    // Two variants: rounded and smooth
    variants: {
        rounded: {
            main: {
                padding: 8,
                borderRadius: 'xl',
                boxShadow: 'xl',
            }
        },
        smooth: {
            main: {
                padding: 6,
                borderRadius: 'base',
                boxShadow: 'md',
            }
        },

    },
    // The default variant value
    defaultProps: {
        variant: 'rounded',
    },
}