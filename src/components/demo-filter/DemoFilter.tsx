import { Button, Flex, FormControl, FormLabel, Heading, HStack, Input, NumberInput, NumberInputField, Select, Spacer, VStack } from "@chakra-ui/react"
import { useState } from "react";

export const DemoFilter = (props: any) => {

    const [select, setSelected] = useState<string>();
    const [from, setFrom] = useState<string | undefined>();
    const [fromInvalid, setFromInvalid] = useState<boolean>();
    const [to, setTo] = useState<string | undefined>();
    const [toInvalid, setToInvalid] = useState<boolean>();

    const handleSelect = (value: string) => {
        console.log(value)

        setSelected(value);
    }

    const handleFrom = (value: string) => {
        setFromInvalid(false);
        setFrom(value);
    }

    const handleFromBlur = (value: string) => {
        let newValue: string = value;
        if(to && Number.parseInt(value) > Number.parseInt(to)) {
            newValue = to;
            setFromInvalid(true);
        }
        setFrom(newValue);
    }

    const handleTo = (value: string) => {
        setToInvalid(false);
        setTo(value);
    }

    const handleToBlur = (value: string) => {
        let newValue = value;
        if(from && Number.parseInt(value) < Number.parseInt(from)) {
            newValue = from;
            setToInvalid(true);
        }
        setTo(newValue);
    }
    
    return (
        <VStack w="full" h="full" align="flex-start" bg="gray.50" px={10} pb={10} pt={5}>

            <VStack align="flex-start">
                <Heading>Demo filter component</Heading>
            </VStack>

            <Flex w="full">
                <HStack spacing='24px'>

                    <FormControl>
                        <FormLabel>Some random option</FormLabel>
                        <Select placeholder='Select option' onChange={(e) => handleSelect(e.target.value)} value={select}>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </FormControl>

                    <FormControl isInvalid={fromInvalid}>
                        <FormLabel>From</FormLabel>
                        <NumberInput placeholder="0" value={from} onChange={(valueString) => handleFrom(valueString)} onBlur={(e) => handleFromBlur(e.target.value)} >
                            <NumberInputField />
                        </NumberInput>
                    </FormControl>

                    <FormControl isInvalid={toInvalid}>
                        <FormLabel>To</FormLabel>
                        <NumberInput placeholder="10" value={to} onChange={(valueString) => handleTo(valueString)} onBlur={(e) => handleToBlur(e.target.value)} >
                            <NumberInputField />
                        </NumberInput>
                    </FormControl>

                </HStack>

                <Spacer />

                <Button mt='auto'>Apply Filter</Button>
            </Flex>
        </VStack>
    )
}