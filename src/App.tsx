import * as React from "react"
import {
  ChakraProvider,
  Container,
  theme,
} from "@chakra-ui/react"
import { DemoFilter } from "./components/demo-filter/DemoFilter"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW="container.xl" p={0}>
      <DemoFilter></DemoFilter>
    </Container>
  </ChakraProvider>
)
