import Footer from '../components/global/footer/Footer'
import Nav from '../components/global/nav/Nav'
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className='app_container'>
      <div className='app_blur'/>
    </div>
    <Nav/>
    <Component {...pageProps} />
    <ToastContainer />
    <Footer/>
    </>
  )
}

export default MyApp
