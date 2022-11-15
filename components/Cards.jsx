import Card from "./Card";

const Cards = ({category, newsletters}) => {
  const count = newsletters ? newsletters.length : 0;
  console.log(count);
  return (
    <>
      <h3 className="font-2xl text-gray-600 text-[27px] font-bold pt-8">
        {category}
        {"  "}
        {category !== "랜덤모두보기" ? <span className="text-[17px]">({count})</span> : null}
      </h3>
      {count > 0 ? (
        <div className="mt-4 grid grid-cols-[repeat(3,300px)]	gap-[18px] mb-[18px]">
          {newsletters.map((newsletter) => (
            <Card key={newsletters.id} newsletter={newsletter} />
          ))}
        </div>
      ) : (
        <div className="mt-4 mb-30"></div>
      )}
    </>
  );
};

export default Cards;
