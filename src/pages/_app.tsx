import NextNProgress from 'nextjs-progressbar'
import GlobalStyle, { Footer } from 'styles/global'
import Head from 'next/head'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>João Guilherme - Programming the future</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <GlobalStyle />
      <NextNProgress color="#666665" />
      <Component {...pageProps} />
      <Footer>Copyright &copy; 2021 joaocansi. All Rights Reserved</Footer>
    </>
  )
}

export default App
