import * as React from "react"
import {
  ChakraProvider,
  Container,
  theme,
} from "@chakra-ui/react"
import { DemoFilterPage } from "./components/demo-filter/DemoFilterPage"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW="container.xl" p={0}>
      <DemoFilterPage></DemoFilterPage>
    </Container>
  </ChakraProvider>
)
