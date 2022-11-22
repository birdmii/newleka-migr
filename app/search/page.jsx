import { supabase } from "@utils/database";
import Cards from "@components/Cards";

export const revalidate = 0

async function getNewslettersBySearchKeyword(keyword) {
  const { data, error } = await supabase.rpc("get_search_results", {
    qs: keyword,
  });

  return data;
}

export default async function Page({ searchParams }) {
  const qs = searchParams.q;
  const resultData = await getNewslettersBySearchKeyword(qs);

  return (
    <>
      <Cards category={"search"} newsletters={resultData} />
    </>
  );
}
