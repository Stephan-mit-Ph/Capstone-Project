import HomePreview from '../components/HomePreview'
import HeroImage from '../components/HeroImage'
import HeroBanner from '../../public/images/hero-banner.png'

export default function HomePage() {
  return (
    <>
      
      <HeroImage src={HeroBanner} alt="Herobanner" />
      <HomePreview />
    </>
  )
}
