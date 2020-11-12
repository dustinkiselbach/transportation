import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyle'
import { baseTheme } from '../styles/themes/baseTheme'
import { DefaultSeo } from 'next-seo'
import { DEFAULT_SEO } from '../seo/next-seo.config'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider theme={baseTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
