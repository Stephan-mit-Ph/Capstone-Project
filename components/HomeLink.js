import Link from "next/link";
import ChevronLeft from '/components/Icons/ChevronLeft';



export default function HomeLink() {
    return (
        <>
        <Link href="/">
            <ChevronLeft />
            Home
        </Link>
        </>
    );
}
