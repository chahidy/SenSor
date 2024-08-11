'use client'

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

export default function Card({ name, temp, time }: { name: string | undefined, temp: number | undefined, time: string | undefined }) {
  return (
    <Center py={6}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            px={3}
            color={'blue.500'}
            rounded={'full'}>
            id {name}
          </Text>
          <Text fontSize={'3xl'}>°C</Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'6xl'} fontWeight={800}>
              {temp}
            </Text>
          </Stack>
          <Text color={'gray.500'}>Aktuelle Uhrzeit {time}</Text>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10} >
          <List spacing={3} >
            <ListItem >
              <ListIcon as={CheckIcon} color="green.400" />

              Online

            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Luftfeuchtigkeit
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Alarm aktiv
            </ListItem>
            <ListItem>
              <ListIcon as={CloseIcon} color="red.400" />
              Bericht deaktiviert
            </ListItem>
          </List>

          <Button
            mt={10}
            w={'full'}
            bg={'blue.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(144 205 244 / 43%)'}
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Upgrade
          </Button>
        </Box>
      </Box>
    </Center>
  )
}