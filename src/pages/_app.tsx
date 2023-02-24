import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Global from '@/styles/Global'
import { defaultTheme } from '@/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={defaultTheme}>
    <Global />
    <Component {...pageProps} />
  </ThemeProvider>
}