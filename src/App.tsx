import { useState } from 'react'
import './App.css'
import { Container, Stack, Title } from '@mantine/core'
import { QueryClientProvider } from 'react-query'
import client from './utils/client'


function App() {

  return (
   <Container>
    <Stack>
      <Title>My Reads!</Title>
    </Stack>
   </Container>
  )
}

function WrappedApp() {
  return (
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  )
}

export default WrappedApp
