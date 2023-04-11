import BackToLink from "../../../components/BackToLink";
import CategoryList from "../../../components/CategoryList/CategoryList";
import { useRouter } from "next/router";

export default function CategoryPage() {
  return (
    <>
      <BackToLink />
      <CategoryList />
    </>
  );
}
