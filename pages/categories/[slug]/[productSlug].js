import { useRouter } from "next/router";
import { categories } from "../../../lib/data";
import ProductDetailPage from "../../../components/ProductDetailPage/ProductDetailPage";
import BackToLink from "../../../components/BackToLink";

export default function ProductPage() {
  const router = useRouter();
  const { slug, productSlug } = router.query;

  const currentCategory = categories.find((category) => category.slug === slug);
  const currentProduct = currentCategory.products.find((product) => {
    return product.slug === productSlug;
  });

  return (
  <>
  <BackToLink />
  <ProductDetailPage product={currentProduct} />
  </>
  );
}
