import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
            <Image
                src="/../public/images/iphone-13-pro-max-graphit 1.png"
                alt="iPhone 13 Collection"
                width={300}
                height={300}
            />
            <Link href="/categories">All Categories</Link>
            <p>
                Looking for high-quality refurbished Apple products at
                unbeatable prices? Look no further than our e-commerce store! We
                offer a wide selection of top-of-the-line Apple
                products,including iPhones, iPads, MacBooks, and more, all
                professionally refurbished to like-new condition and backed by
                our quality guarantee.
            </p>
        </>
  );
}
