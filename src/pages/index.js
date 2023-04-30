import HomePreview from '../components/HomePreview'
import HeroImage from '../components/HeroImage'
import HeroBanner from '../../public/images/hero-banner.png'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>SEC:Tech E-Commerce App</title>
        <lang lang="en" />
        <meta
          name="description"
          content="Welcome to our Online-Shop. Looking for high-quality refurbished Apple products at unbeatable prices? Look no further than our e-commerce store! We offer a wide selection of top-of-the-line Apple products, including iPhones, iPads, MacBooks, and more, all professionally refurbished to like-new condition and backed by our quality guarantee."
        />
      </Head>
      <HeroImage src={HeroBanner} alt="Herobanner" />
      <HomePreview />
    </>
  )
}
