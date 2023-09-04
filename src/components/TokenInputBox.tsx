import Select from './TokenSelection'
import { Box, Stack, Input, InputGroup, InputLeftElement, Text, InputRightElement } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useBalance, Address } from 'wagmi'

interface Props {
  user?: Address
  setBalance?: (value: string) => void
}

export default function TokenInputBox(props: Props) {
  const [token, setToken] = useState<Address>('0x')
  const [cgId, setCgId] = useState<string>('')
  const [balance, setBalance] = useState('0.00')
  const [currentPrice, setCurrentPrice] = useState('0.00')
  const { data, isError, isLoading } = useBalance({
    address: props.user,
    token: token,
  })
  useEffect(() => {
    const fetchPriceData = async () => {
      if (cgId) {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cgId}&vs_currencies=usd`)
        const data = await response.json()
        setCurrentPrice(data[cgId].usd)
        console.log(data)
      }
    }

    fetchPriceData()
  }, [cgId])
  return (
    <Box w="200px" position="relative" backgroundColor={'#D9D9D9'}>
      <Stack spacing={4}>
        <InputGroup width={'200%'}>
          <Input
            placeholder="0.00"
            rounded={'none'}
            backgroundColor={'#D0D0D0'}
            color={'#545454'}
            border={'none'}
            fontFamily={"'IBM Plex Mono', monospace"}
            fontWeight={'semibold'}
            value={balance}
            onChange={(e) => {
              const value = e.target.value
              if (/^\d*\.?\d*$/.test(value)) {
                setBalance(value)
                props.setBalance ? props.setBalance(value) : ''
              }
            }}
            textAlign="right"
            py={8}
          />
          <InputRightElement mr={12} pb={2}>
            <Text
              onClick={() => setBalance(data?.formatted ? data.formatted : '0')}
              fontSize={'10px'}
              fontFamily={"'IBM Plex Mono', monospace"}
              whiteSpace="nowrap"
              textAlign={'left'}>
              Balance: {data?.formatted ? data.formatted : '0'}
            </Text>
          </InputRightElement>

          <InputLeftElement width="12rem" py={8}>
            <Box ml={16}>
              <Select handleSelectChange={setToken} handleCgId={setCgId} />
            </Box>
            <Text>${parseInt(balance) ? Math.floor(parseInt(currentPrice) * parseInt(balance)).toLocaleString() : '0.00'}</Text>
          </InputLeftElement>
        </InputGroup>{' '}
      </Stack>
    </Box>
  )
}
