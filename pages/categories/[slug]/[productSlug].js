import { useRouter } from "next/router";
import { categories } from "../../../lib/data";
import ProductDetailPage from "../../../components/ProductDetailPage/ProductDetailPage";
import BackToLink from "../../../components/BackToLink";

export default function ProductPage() {
  const router = useRouter();
  const { slug, productSlug } = router.query;


  const currentCategory = slug ? categories.find((category) => {
    return category.slug === slug;
  }) : null;

  const currentProduct = productSlug ? currentCategory.products.find((product) => {
    return product.slug === productSlug;
  }) : null;

  if (!currentProduct) {
    return null;
  }

  return (
  <>
  <BackToLink />
  <ProductDetailPage product={currentProduct} />
  </>
  );
}
