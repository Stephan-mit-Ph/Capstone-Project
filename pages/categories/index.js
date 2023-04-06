import CategorieList from "../../components/CategorieList/CategorieList";
import BackToLink from "../../components/HomeLink";

export default function CategoriesPage() {
  return (
    <div>
      <BackToLink />
      <h2>Categories</h2>
      <CategorieList />
    </div>
  );
}
