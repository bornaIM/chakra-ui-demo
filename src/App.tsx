import * as React from "react"
import {
  ChakraProvider,
  Container,
} from "@chakra-ui/react"
import { DemoFilterPage } from "./components/demo-filter/DemoFilterPage"
import theme from "./theme"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW="container.xl" p={0}>
      <DemoFilterPage></DemoFilterPage>
    </Container>
  </ChakraProvider>
)
