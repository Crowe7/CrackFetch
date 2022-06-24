import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import Layout from '../src/components/layout'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Crack Fetch</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" type="image/x-icon" href=""></link>
      </Head>
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <NotificationsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationsProvider>
      </MantineProvider>
    </>
  )
}

export default MyApp
