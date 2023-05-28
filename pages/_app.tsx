import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import type { AppProps } from 'next/app'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
