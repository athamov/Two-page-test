import '../styles/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter()

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
