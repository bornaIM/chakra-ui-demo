import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, HStack, Input, Select, Spacer, VStack } from "@chakra-ui/react"
import { useState } from "react";

export const DemoFilter = (props: any) => {

    const [select, setSelected] = useState<string>("");
    const [from, setFrom] = useState<string | undefined>("");
    const [fromInvalid, setFromInvalid] = useState<boolean>(false);
    const [to, setTo] = useState<string | undefined>("");
    const [toInvalid, setToInvalid] = useState<boolean>(false);

    const parseInt = (value: string) => {
        const isNan = isNaN(Number.parseInt(value));
        return isNan ? value : Number.parseInt(value);

    }

    const handleSelect = (value: string) => {
        setSelected(value);
    }

    const handleFrom = (value: string) => {
        setFromInvalid(false);
        console.log('handleFrom', value)
        setFrom(value);
    }

    const handleFromBlur = (value: string) => {
        setFromInvalid(false);
        setToInvalid(false);
        let newValue: string = value;

        if (to && parseInt(value) > parseInt(to)) {
            newValue = to;
            setFromInvalid(true);
        }
        console.log('handleFromBlur', parseInt(newValue).toString())
        setFrom(parseInt(newValue).toString());
    }

    const handleTo = (value: string) => {
        setToInvalid(false);
        console.log('handleTo', value)
        setTo(value);
    }

    const handleToBlur = (value: string) => {
        setFromInvalid(false);
        setToInvalid(false);
        let newValue = value;
        
        if (from && parseInt(value) < parseInt(from)) {
            newValue = from;
            setToInvalid(true);
        }
        console.log('handleTo', parseInt(newValue).toString())
        setTo(parseInt(newValue).toString());
    }

    const checkInput = (value: any) => {
        console.log(value.keyCode);
        const notAllowed = [69, 187, 189];
        if(notAllowed.indexOf(value.keyCode) >= 0) {
            value.preventDefault();
        }
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
                        <Input placeholder="0" type='number' value={from} onKeyDown={e => checkInput(e)} onChange={(e) => handleFrom(e.target.value.replace(/[^0-9]/g, ""))} onBlur={(e) => handleFromBlur(e.target.value)} onInvalid={e => console.log('on invalid', e)} ></Input>
                        {fromInvalid &&
                            <FormErrorMessage mb='-6'>From is bigger than to</FormErrorMessage>
                        }
                    </FormControl>

                    <FormControl isInvalid={toInvalid}>
                        <FormLabel>To</FormLabel>
                        <Input placeholder="10" type='number' value={to} onChange={(e) => handleTo(e.target.value)} onBlur={(e) => handleToBlur(e.target.value)} ></Input>
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