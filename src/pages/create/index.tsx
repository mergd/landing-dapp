import { Head } from 'components/layout/Head'
import { HeadingComponent } from 'components/layout/HeadingComponent'
import { LinkComponent } from 'components/layout/LinkComponent'

import { SimpleGrid, Box } from '@chakra-ui/react'
import LoanCreation from 'components/LoanCreation'
export default function Create() {
  return (
    <>
      <Head />

      <main>
        <SimpleGrid minChildWidth={'400px'} gap={6}>
          <LoanCreation />
          <Box backgroundColor={'#D9D9D9'}></Box>
        </SimpleGrid>
      </main>
    </>
  )
}
