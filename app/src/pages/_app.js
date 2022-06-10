import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import AppBar from '../components/AppBar'
function MyApp({ Component, pageProps }) {
  return(
    <>
    <AppBar />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
