import { Box, Flex, FormLabel, Heading, HStack, Input, VStack } from "@chakra-ui/react"

interface DemoFilterProps {
    from: number | null,
    to: number | null,
    onChange: (from: number | null, to: number | null) => void
}

export const DemoFilter = ({ from, to, onChange }: DemoFilterProps) => {

    const parseInt = (value: string | undefined | number | null): number | null => {
        const isNan = isNaN(Number.parseInt(String(value)));
        return isNan ? null : Number.parseInt(String(value));
    }

    const mapValue = (value: number | null) => {
        debugger
        return  value === null ?  '' : value;
    }

    const handleFrom = (value: string) => {
        console.log('handleFrom', value);
        onChange(parseInt(value), to);
    }

    const handleFromBlur = (value: string) => {
        debugger;
        let newValue: string = value;

        const valuePom = parseInt(value);
        const toPom = parseInt(to);

        if (valuePom && toPom && valuePom > toPom ) {
            newValue = String(to);
        }
        console.log('handleFromBlur', parseInt(newValue))
        handleFrom(newValue);
    }

    const handleTo = (value: string) => {
        console.log('handleFrom', value);
        onChange(from, parseInt(value));
    }

    const handleToBlur = (value: string) => {
        debugger;
        let newValue: string = value;

        const valuePom = parseInt(value);
        const fromPom = parseInt(from);

        if (valuePom && fromPom && valuePom < fromPom ) {
            newValue = String(from);
        }

        console.log('handleTo', parseInt(newValue));
        handleTo(newValue);
    }

    const checkInput = (value: any) => {
        console.log(value.keyCode);
        const notAllowed = [69, 187, 189];
        if (notAllowed.indexOf(value.keyCode) >= 0) {
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

                    <Box>
                        <FormLabel>From</FormLabel>
                        <Input placeholder="0" type='number' value={mapValue(from)} onKeyDown={e => checkInput(e)} onChange={(e) => handleFrom(e.target.value)} onBlur={(e) => handleFromBlur(e.target.value)}></Input>
                    </Box>

                    <Box>
                        <FormLabel>To</FormLabel>
                        <Input placeholder="10" type='number' value={mapValue(to)} onKeyDown={e => checkInput(e)} onChange={(e) => handleTo(e.target.value)} onBlur={(e) => handleToBlur(e.target.value)}></Input>
                    </Box>

                </HStack>
            </Flex>
        </VStack>
    )
}