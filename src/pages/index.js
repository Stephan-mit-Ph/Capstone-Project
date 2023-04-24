import Preview from '../components/Preview'
import HeroImage from '../components/HeroImage'
import HeroBanner from '../../public/images/Banner.png'

export default function HomePage() {
  return (
    <>
  
      <HeroImage src={HeroBanner} alt="Herobanner" />
      <Preview />
    </>
  )
}
