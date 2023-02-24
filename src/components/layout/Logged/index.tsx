import React from 'react'
import Head, { HeadProps } from '@/components/Head'

import Footer from './components/Footer'
import Header from './components/Header'

import { Container, Main } from './styles'

interface LayoutLoggedProps extends HeadProps {
  children: React.ReactNode
}

const LayoutLogged = ({ children, title }: LayoutLoggedProps) => {
  return (
    <>
      <Head title={title} />
      <Container>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </Container>
    </>
  )
}

export default LayoutLogged