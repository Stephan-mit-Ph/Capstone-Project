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
      <Layout>
        <Head>
          <title>SEC:Tech</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="decription"
            content="SEC:Tech is a E-Commerce Shop Application built with React, Next.js, Styled-Components, CSS, HTML, JavaScript. It's a demo shop for my capstone project @ neuefische GmbH. "
          />
          <meta name="author" content="Stephan Niendorf" />
          <meta name="keywords" content="E-Commerce, Shop, React, Next.js, Styled-Components, CSS, HTML, JavaScript" />
          <meta name="robots" content="index, follow" />
        </Head>
        <Component {...pageProps} categories={categories} />
        <ToastContainer role="alert" />
      </Layout>
    </>
  )
}
