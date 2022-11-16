import Cards from "@components/Cards";
import { notFound } from "next/navigation";

export default function Page({ params, searchParams }) {
  console.log(searchParams.id);
  const categoryArr = [
    "economy",
    "education",
    "news",
    "design",
    "lifestyle",
    "marketing",
    "culture",
    "work",
    "tech",
    "trend",
    "society",
  ];
  if (!categoryArr.includes(params.slug)) {
    notFound();
  }

  return (
    <>
      <Cards category={params.slug} />
    </>
  );
}
