import Cards from "@components/Cards";

export default function Page({ params, searchParams }) {
  console.log(searchParams.id);
  return (
    <>
      <Cards category={params.slug}/>
    </>
  );
}
