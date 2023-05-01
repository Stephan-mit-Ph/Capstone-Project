import GlobalStyle from '../styles'
import Layout from '../components/Layout/index.js'
import { categories } from '../data/categories'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SEC:Tech E-Commerce App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta lang="en" />
        <meta
          name="decription"
          content="Capstone Project by Stephan Niendorf @neuefische GmbH -School and Pool for digital Talents.
        E-Commerce Shop Application"
        />
        <meta name="author" content="Stephan Niendorf" />
        <meta name="keywords" content="E-Commerce, Shop, React, Next.js, Styled-Components, CSS, HTML, JavaScript" />
        <meta name="robots" content="index, follow" />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} categories={categories} />
        <ToastContainer />
      </Layout>
    </>
  )
}
