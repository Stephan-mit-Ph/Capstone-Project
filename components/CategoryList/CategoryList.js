import { useRouter } from "next/router";
import { categories } from "../../lib/data";


export default function CategoryList() {
    const router = useRouter();
    const { slug } = router.query;

    const categoryIndex = categories.findIndex((category) => category.slug === slug);

    const category = categories[categoryIndex];

    if (!category) {
        return null;
    }

    const { name } = category;

    return (
        <>
            <h2>{name}</h2>
        </>
    )

}