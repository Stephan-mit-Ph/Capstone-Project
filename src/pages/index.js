import HomePreview from '../components/HomePreview'
import HeroImage from '../components/HeroImage'
import HeroBanner from '../../public/images/hero-banner.png'
import Head from 'next/head'

export default function HomePage() {
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
      </Head>
      <HeroImage src={HeroBanner} alt="Herobanner" />
      <HomePreview />
    </>
  )
}
