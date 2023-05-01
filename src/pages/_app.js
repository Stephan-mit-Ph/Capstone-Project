import GlobalStyle from '../styles'
import Layout from '../components/Layout/index.js'
import { categories } from '../data/categories'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>SEC:Tech</title>
        <meta name="decription" content="Capstone Project by Stephan Niendorf @neuefische GmbH -School and Pool for digital Talents" />
      </Head>
      <Layout>
        <Component {...pageProps} categories={categories} />
        <ToastContainer />
      </Layout>
    </>
  )
}
