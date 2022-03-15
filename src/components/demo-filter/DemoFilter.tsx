import { Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Spacer, VStack } from "@chakra-ui/react"

export const DemoFilter = (props: any) => {

    return (
        <VStack w="full" h="full" align="flex-start" bg="gray.50" px={10} pb={10} pt={5}>

            <VStack align="flex-start">
                <Heading>Demo filter component</Heading>
            </VStack>

            <Flex w="full">
                <HStack spacing='24px'>

                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="John" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="John" />
                    </FormControl>

                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="John" />
                    </FormControl>

                </HStack>

                <Spacer />

                <Button mt='auto'>Apply Filter</Button>
            </Flex>
        </VStack>
    )
}