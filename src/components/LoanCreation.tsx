import React, { useState } from 'react'
import {
  Radio,
  RadioGroup,
  Flex,
  Stack,
  Collapse,
  Box,
  Text,
  Button,
  InputRightElement,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  InputGroup,
  Input,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'
import { ChevronDownIcon, PlusSquareIcon, InfoIcon } from '@chakra-ui/icons'
import { Term, TERMS } from 'utils/tokens'

import TokenInputBox from './TokenInputBox'
import { useAccount } from 'wagmi'
export default function LoanCreation() {
  const required = <span style={{ color: 'red' }}>*</span>
  const { address, isConnected } = useAccount()
  const truncatedAddress = address ? `${address.slice(0, 5)}...${address.slice(-3)}` : ''

  const [interestRate, setInterestRate] = useState('0.00')
  const [collateral, setCollateral] = useState('0.00')
  const [borrow, setBorrow] = useState('0.00')
  const [duration, setDuration] = useState('4')
  const [termSet, setTermSet] = useState<Term>()
  const [advanced, setAdvanced] = useState(false)
  const interest = (
    <Box>
      <Text fontWeight={'bold'} fontFamily={"'Anonymous Pro', monospace"} color={'#545454'}>
        {' '}
        Interest Rate
      </Text>
      <InputGroup width={'50%'}>
        <Input
          placeholder="0"
          rounded={'none'}
          backgroundColor={'#D0D0D0'}
          color={'#545454'}
          border={'none'}
          fontFamily={"'IBM Plex Mono', monospace"}
          fontWeight={'semibold'}
          value={interestRate}
          onChange={(e) => {
            const value = e.target.value
            if (/^\d*\.?\d*$/.test(value)) {
              setInterestRate(value)
            }
          }}
        />
        <InputRightElement fontFamily={"'IBM Plex Mono', monospace"} fontWeight={'semibold'}>
          %
        </InputRightElement>
      </InputGroup>
    </Box>
  )

  const terms = (
    <Box>
      <Text fontWeight={'bold'} fontFamily={"'Anonymous Pro', monospace"} color={'#545454'} textAlign={'right'}>
        {' '}
        {required} Terms
      </Text>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          fontFamily={"'IBM Plex Mono', monospace"}
          rounded={'none'}
          backgroundColor={'#D0D0D0'}>
          {termSet?.name ? termSet.name : 'Select'}
        </MenuButton>

        <MenuList rounded={'none'} fontFamily={"'IBM Plex Mono', monospace"}>
          {TERMS?.map((term, index) => (
            <MenuItem key={index} onClick={() => setTermSet(term)}>
              {term.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
  return (
    <Box backgroundColor={'#D9D9D9'} py={2} px={4}>
      <Text fontWeight={'bold'} fontFamily={"'Anonymous Pro', monospace"} fontSize={'23px'} color={'#353535'}>
        Create a Loan
      </Text>

      <Text fontWeight={'bold'} fontFamily={"'Anonymous Pro', monospace"} color={'#545454'}>
        {' '}
        Collateral {required}
      </Text>
      <TokenInputBox user={address} setBalance={setCollateral} />
      <Text fontWeight={'bold'} fontFamily={"'Anonymous Pro', monospace"} color={'#545454'}>
        {' '}
        Borrow {required}
      </Text>

      <TokenInputBox user={address} setBalance={setBorrow} />
      {/* Interest Rate */}
      <Flex direction="row">
        {interest}
        {terms}
      </Flex>
      <Text fontWeight={'bold'} fontFamily={"'Anonymous Pro', monospace"} color={'#545454'}>
        {' '}
        Min Duration {required} <InfoIcon />
      </Text>
      <RadioGroup onChange={setDuration} value={duration} fontFamily={"'Anonymous Pro', monospace"} color={'#545454'}>
        <Flex direction="row" justifyContent="space-between" maxW={'md'}>
          <Radio value="3">0</Radio>
          <Radio value="0">12 hrs</Radio>
          <Radio value="1">1 day</Radio>
          <Radio value="2">2 days</Radio>
        </Flex>
      </RadioGroup>
      <Text onClick={() => setAdvanced(!advanced)} mt={2} fontWeight={'bold'} fontFamily={"'Anonymous Pro', monospace"} color={'#545454'}>
        {' '}
        Advanced <ChevronDownIcon />
      </Text>
      <Collapse in={advanced}>
        {/* Advanced section content goes here */}
        <Flex flexDirection="column">
          <Flex justifyContent="space-between" mr={3}>
            <Text fontWeight={'semibold'} fontFamily={"'Anonymous Pro', monospace"} color={'#545454'}>
              {' '}
              Allow Callbacks?
            </Text>
            <Checkbox colorScheme="green" defaultChecked={true} />
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontWeight={'semibold'} fontFamily={"'Anonymous Pro', monospace"} color={'#545454'}>
              {' '}
              Additional Data?
            </Text>
            <Input
              rounded={'none'}
              backgroundColor={'#D0D0D0'}
              color={'#545454'}
              border={'none'}
              fontFamily={"'IBM Plex Mono', monospace"}
              placeholder={'0'}
              textAlign="right"
              maxW={'xs'}
            />
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontWeight={'semibold'} fontFamily={"'Anonymous Pro', monospace"} color={'#545454'}>
              {' '}
              On behalf of?
            </Text>
            <Input
              rounded={'none'}
              backgroundColor={'#D0D0D0'}
              color={'#545454'}
              border={'none'}
              fontFamily={"'IBM Plex Mono', monospace"}
              placeholder={truncatedAddress}
              textAlign="right"
              maxW={'xs'}
            />
          </Flex>
        </Flex>
      </Collapse>

      <Button mt={2} width={'100%'} rounded={'none'} backgroundColor={'#D0D0D0'} fontFamily={"'IBM Plex Mono', monospace"}>
        {' '}
        Create a Loan
      </Button>
    </Box>
  )
}
