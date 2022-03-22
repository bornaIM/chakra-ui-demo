import { ChakraProvider, Flex, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { StoryContext } from "@storybook/react"
import React from "react"
import { ColorModeScript } from "@chakra-ui/react"

import theme from '../../src/theme';

import { FaMoon, FaSun } from "react-icons/fa"


const ColorModeToggleBar = () => {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const nextMode = useColorModeValue("dark", "light")

  return (
    <Flex justify="flex-end" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  )
}

export const withChakra = (StoryFn: Function, context: StoryContext) => {
  // const { direction } = context.globals
  // const dir = direction.toLowerCase()

  // React.useEffect(() => {
  //   document.documentElement.dir = dir
  // }, [dir])

  return (
    <ChakraProvider theme={theme}>
      <ColorModeToggleBar />
      <div id="story-wrapper" style={{ minHeight: "100vh" }}>
        <StoryFn />
      </div>
    </ChakraProvider>
  )
}