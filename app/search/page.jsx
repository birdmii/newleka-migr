import Cards from "@components/Cards";

export default function Page({ searchParams }) {
  const qs = searchParams.q;
  return (
    <>
      <Cards category={'search'} />
    </>
  );
}
