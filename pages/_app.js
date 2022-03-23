import Footer from '../components/global/footer/Footer'
import Nav from '../components/global/nav/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className='app_container'>
      <div className='app_blur'/>
    </div>
    <Nav/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
