import { Box, Flex, FormLabel, Heading, HStack, Input, VStack } from "@chakra-ui/react"
import { useState } from "react"

interface DemoFilterProps {
    value: {
        from: number | null,
        to: number | null,
    }
    
    onChange: (from: number | null, to: number | null) => void
}

export const DemoFilter = ({ value, onChange }: DemoFilterProps) => {

    const [fromKey, setFromKey] = useState(0);
    const [toKey, setToKey] = useState(0);
    const [autofocus, setAutofocus] = useState<'from' | 'to' | null>(null);

    const parseInt = (value: string | undefined | number | null): number | null => {
        const isNan = isNaN(Number.parseInt(String(value)));
        return isNan ? null : Number.parseInt(String(value));
    }

    const mapValue = (value: number | null) => {
        debugger
        return value === null ? '' : value;
    }

    const handleFrom = (newValue: string) => {
        console.log('handleFrom', newValue);
        const intValue = parseInt(newValue);
        if(String(intValue) !== newValue) {
            setFromKey(fromKey + 1);
            setAutofocus('from');
        }
        onChange(parseInt(newValue), value.to);
    }

    const handleFromBlur = (blurValue: string) => {
        debugger;
        let newValue: string = blurValue;

        const valuePom = parseInt(blurValue);
        const toPom = parseInt(value.to);

        if (valuePom && toPom && valuePom > toPom) {
            newValue = String(value.to);
        }
        console.log('handleFromBlur', parseInt(newValue))
        setAutofocus(null);
        handleFrom(newValue);
    }

    const handleTo = (newValue: string) => {
        console.log('handleFrom', newValue);
        const intValue = parseInt(newValue);
        if(String(intValue) !== newValue) {
            setToKey(toKey + 1);
            setAutofocus('to');
        }
        onChange(value.from, parseInt(newValue));
    }

    const handleToBlur = (blurValue: string) => {
        debugger;
        let newValue: string = blurValue;

        const valuePom = parseInt(blurValue);
        const fromPom = parseInt(value.from);

        if (valuePom && fromPom && valuePom < fromPom) {
            newValue = String(value.from);
        }

        console.log('handleTo', parseInt(newValue));
        setAutofocus(null);
        handleTo(newValue);
    }

    const checkInput = (newValue: any) => {
        console.log(newValue.keyCode);
        const notAllowed = [69, 187, 189];
        if (notAllowed.indexOf(newValue.keyCode) >= 0) {
            newValue.preventDefault();
        }
    }

    return (
        <VStack w="full" h="full" align="flex-start" bg="gray.50" px={10} pb={10} pt={5}>

            <VStack align="flex-start">
                <Heading>Demo filter component</Heading>
            </VStack>

            <Flex w="full">
                <HStack spacing='24px'>

                    <Box>
                        <FormLabel>From</FormLabel>
                        <Input key={`from_${fromKey}`} autoFocus={autofocus === 'from'} placeholder="0" type='number' value={mapValue(value.from)} onKeyDown={e => checkInput(e)} onChange={(e) => handleFrom(e.target.value)} onBlur={(e) => handleFromBlur(e.target.value)}></Input>
                    </Box>

                    <Box>
                        <FormLabel>To</FormLabel>
                        <Input key={`to_${toKey}`} autoFocus={autofocus === 'to'} placeholder="10" type='number' value={mapValue(value.to)} onKeyDown={e => checkInput(e)} onChange={(e) => handleTo(e.target.value)} onBlur={(e) => handleToBlur(e.target.value)}></Input>
                    </Box>

                </HStack>
            </Flex>
        </VStack>
    )
}