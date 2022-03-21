import { mode } from '@chakra-ui/theme-tools';
import { background, ComponentStyleConfig } from "@chakra-ui/react";

export const DemoFilter: ComponentStyleConfig = {

    baseStyle: (props) => ({
        //   display: 'flex',
        //   flexDirection: 'column',
        //   background: 'white',
        //   alignItems: 'center',
        //   gap: 6,
        '#testStack #testDiv': mode('blue', 'green')(props),
        background: mode('gray.50', 'whiteAlpha.50')(props)
    }),
    // Two variants: rounded and smooth
    variants: {
        rounded: {
            padding: 8,
            borderRadius: 'xl',
            boxShadow: 'xl',
        },
        smooth: {
            padding: 6,
            borderRadius: 'base',
            boxShadow: 'md',
        },

    },
    // The default variant value
    defaultProps: {
        variant: 'rounded',
        divColor: 'demoa'
    },
}