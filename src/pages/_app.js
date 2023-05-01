import GlobalStyle from '../styles'
import Layout from '../components/Layout/index.js'
import { categories } from '../data/categories'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} categories={categories} />
        <ToastContainer />
      </Layout>
    </>
  )
}
