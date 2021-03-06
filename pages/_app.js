import Footer from '../components/global/footer/Footer'
import Nav from '../components/global/nav/Nav'
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { NavProvider } from '../context/NavContext';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <div className='app_container'>
      <div className='app_blur'/>
    </div>
    <NavProvider>
    <Component {...pageProps} />
    <ToastContainer />
    <Footer/>
    <Nav/>
    </NavProvider>
    </>
  )
}

export default MyApp
