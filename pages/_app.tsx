import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
//datapicker 
import "react-datepicker/dist/react-datepicker.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProSidebarProvider>
  <Component {...pageProps} />
  </ProSidebarProvider>
  )
}

export default MyApp
