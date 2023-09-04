import React from 'react'
import { Flex, useColorModeValue, Spacer, Heading, Box, Button, ButtonGroup } from '@chakra-ui/react'
import { SITE_NAME } from 'utils/config'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Web3Button } from '@web3modal/react'
import { Web3NetworkSwitch } from '@web3modal/react'
import landingLogo from 'assets/logo.svg'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  className?: string
}

export function Header(props: Props) {
  const className = props.className ?? ''
  const router = useRouter()
  const isCreate = router.pathname.includes('/create')
  const isView = router.pathname.includes('/view')
  const isAuction = router.pathname.includes('/auction')
  return (
    <Flex as="header" className={className} px={4} py={4} mb={8} alignItems="center">
      <LinkComponent href="/">
        <Heading as="h1" size="md" fontFamily="'Anonymous Pro', monospace">
          <Image src={landingLogo.src} alt={SITE_NAME} width={150} height={200} />
        </Heading>
      </LinkComponent>

      <Spacer />
      <Box
        as="header"
        justifyContent="center" // Add this line
        bg={useColorModeValue('gray.100', 'gray.700')}
        px={4}
        py={2}
        borderRadius="full">
        <ButtonGroup variant="outline" spacing="6">
          <LinkComponent href="/create">
            <Button
              colorScheme="teal"
              variant={isCreate ? 'solid' : 'ghost'}
              borderRadius="full"
              _hover={{ bg: 'teal.500', color: isCreate ? '' : 'white' }}
              fontFamily="'Anonymous Pro', monospace"
              fontWeight="bold">
              Create
            </Button>
          </LinkComponent>
          <LinkComponent href="/view">
            <Button
              colorScheme="teal"
              variant={isView ? 'solid' : 'ghost'}
              borderRadius="full"
              _hover={{ bg: 'teal.500', color: isView ? '' : 'white' }}
              fontFamily="'Anonymous Pro', monospace"
              fontWeight="bold">
              View
            </Button>
          </LinkComponent>
          <LinkComponent href="/auction">
            <Button
              colorScheme="teal"
              variant={isAuction ? 'solid' : 'ghost'}
              borderRadius="full"
              _hover={{ bg: 'teal.500', color: isAuction ? '' : 'white' }}
              fontFamily="'Anonymous Pro', monospace"
              fontWeight="bold">
              Auction
            </Button>
          </LinkComponent>
        </ButtonGroup>
      </Box>
      <Spacer />

      <Flex alignItems="center" gap={4}>
        <Web3NetworkSwitch />
        <Web3Button icon="hide" label="Connect" />
        <ThemeSwitcher />
      </Flex>
    </Flex>
  )
}
