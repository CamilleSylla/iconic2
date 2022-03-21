import Footer from '../components/global/footer/Footer'
import Nav from '../components/global/nav/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nav/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
