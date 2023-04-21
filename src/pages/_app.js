import GlobalStyle from '../styles'
import Layout from '../components/Layout/index.js'
import { categories } from '../data/categories'

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} categories={categories} />
      </Layout>
    </>
  )
}
