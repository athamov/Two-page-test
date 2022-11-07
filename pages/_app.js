import '../styles/globals.css'
import localFont from '@next/font/local'
const Gilroy = localFont({ src: '../font/Gilroy-Light.otf' })

function MyApp({ Component, pageProps }) {
  return (
    <main className={Gilroy.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
