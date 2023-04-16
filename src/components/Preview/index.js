import Link from 'next/link'
import Image from 'next/image'
import PreviewImage from '../../../public/images/iphone-13-pro-max-graphit.png'

function Preview() {
  return (
    <>
      <Link className="preview-link" href="/categories">
        All Categories
        <Image src={PreviewImage} alt="iPhone 13 Collection" width={300} height={300} />
      </Link>
    </>
  )
}

export default Preview
