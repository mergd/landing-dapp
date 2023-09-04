import { Box, Button, Menu, MenuButton, MenuList, MenuItem, Image } from '@chakra-ui/react'
import { TOKENS, Token } from 'utils/tokens'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { Address } from 'wagmi'

interface Props {
  handleSelectChange: (value: Address) => void
  handleCgId: (value: string) => void
}

export default function TokenSelection(props: Props) {
  const [selectedToken, setSelectedToken] = useState<Token>()

  const handleSelect = (token: Token) => {
    setSelectedToken(token)
    props.handleSelectChange(token.contractAddress)
    token.cgID ? props.handleCgId(token.cgID) : ''
  }

  return (
    <Box w="200px">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} rounded={'none'} backgroundColor={'#D9D9D9'}>
          {/* {selectedToken ? <Image boxSize="20px" src={selectedToken.image} alt={selectedToken.name} rounded={'full'} mr={2} /> : <></>}
          {selectedToken ? selectedToken.symbol : 'Select token'} */}
          {selectedToken ? (
            <Box flex={'row'}>
              <Image boxSize="30px" src={selectedToken.image} alt={selectedToken.name} rounded={'full'} mr={2} />
            </Box>
          ) : (
            'Select'
          )}
        </MenuButton>
        <MenuList
          rounded={'none'}
          fontFamily={"'IBM Plex Mono', monospace"}
          style={{
            position: 'relative',
            zIndex: 9999,
          }}>
          {TOKENS.map((token, index) => (
            <MenuItem key={index} onClick={() => handleSelect(token)}>
              <Image boxSize="20px" src={token.image} alt={token.name} rounded={'full'} mr={2} />
              {token.name}
            </MenuItem>
          ))}
          <MenuItem key={TOKENS.length++}>Add Token</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}
