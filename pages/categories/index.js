import CategorieList from "../../components/CategorieList/CategorieList";
import BackToLink from "../../components/BackToLink";

export default function CategoriesPage() {
  return (
    <>
      <BackToLink />
      <h2>Categories</h2>
      <CategorieList />
    </>
  );
}
