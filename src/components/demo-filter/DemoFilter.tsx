import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, NumberInput, NumberInputField, Select, Spacer, VStack } from "@chakra-ui/react"
import { useState } from "react";

export const DemoFilter = (props: any) => {

    const [select, setSelected] = useState<string>();
    const [from, setFrom] = useState<string | undefined>();
    const [fromInvalid, setFromInvalid] = useState<boolean>();
    const [to, setTo] = useState<string | undefined>();
    const [toInvalid, setToInvalid] = useState<boolean>();

    const handleSelect = (value: string) => {
        setSelected(value);
    }

    const handleFrom = (value: string) => {
        setFromInvalid(false);
        setFrom(value);
    }

    const handleFromBlur = (value: string) => {
        setFromInvalid(false);
        setToInvalid(false);
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
        setFromInvalid(false);
        setToInvalid(false);
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
                        <NumberInput placeholder="0" min={0} value={from} onChange={(valueString) => handleFrom(valueString)} onBlur={(e) => handleFromBlur(e.target.value)} >
                            <NumberInputField />
                        </NumberInput>
                        {fromInvalid &&
                            <FormErrorMessage mb='-6'>From is bigger than to</FormErrorMessage>  
                        }
                    </FormControl>

                    <FormControl isInvalid={toInvalid}>
                        <FormLabel>To</FormLabel>
                        <NumberInput placeholder="10" min={0} value={to} onChange={(valueString) => handleTo(valueString)} onBlur={(e) => handleToBlur(e.target.value)} >
                        {/* <NumberInput placeholder="10" value={to} onChange={(valueString) => handleTo(valueString)} onBlur={(e) => handleBlur()} > */}
                            <NumberInputField />
                        </NumberInput>
                        {toInvalid &&
                            <FormErrorMessage mb='-6'>To is smaller than from</FormErrorMessage>  
                        }
                    </FormControl>

                </HStack>

                <Spacer />

                <Button mt='auto'>Apply Filter</Button>
            </Flex>
        </VStack>
    )
}