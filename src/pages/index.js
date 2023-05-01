import HomePreview from '../components/HomePreview'
import HeroImage from '../components/HeroImage'
import HeroBanner from '../../public/images/hero-banner.png'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>SEC:Tech</title>
        <meta name="decription" content="Capstone Project by Stephan Niendorf @neuefische GmbH -School and Pool for digital Talents" />
      </Head>
      <HeroImage src={HeroBanner} alt="Herobanner" />
      <HomePreview />
    </>
  )
}
