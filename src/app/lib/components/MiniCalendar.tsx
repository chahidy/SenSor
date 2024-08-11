'use client';
import './Calendar.css'
import { useState } from 'react';
import Calendar from 'react-calendar';
import { Text, Icon, useColorModeValue } from '@chakra-ui/react';
import 'react-calendar/dist/Calendar.css';
// Chakra imports
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Card from './card/Card';
// Custom components

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MiniCalendar(props: {
    selectRange: boolean;
    [x: string]: any;
}) {
    // const backgroundColor = useColorModeValue('white', 'whiteAlpha.100');
    const { selectRange, ...rest } = props;
    const [value, onChange] = useState<Value>(new Date());
    return (
        <Card
            // bg={backgroundColor}
            alignItems="center"
            flexDirection="column"
            w="100%"
            maxW="max-content"
            p="20px 15px"
            h="max-content"
            {...rest}
        >
            <Calendar
                className={['react-dark', 'react-dark']}
                onChange={onChange}
                value={value}
                selectRange={selectRange}
                view={'month'}
                locale='de'
                tileContent={<Text color="brand.500" />}
                prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
                nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
            />
        </Card>
    );
}