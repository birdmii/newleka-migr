import { supabase } from "@utils/database";
import Cards from "@components/Cards";
import { notFound } from "next/navigation";

export default async function Page({ params, searchParams }) {
  const { data } = await supabase
    .from("newsletters")
    .select("*")
    .eq("category", `${params.slug}`);

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
      <Cards category={params.slug} newsletters={data} />
    </>
  );
}
