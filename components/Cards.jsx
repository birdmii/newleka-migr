import Card from "./Card";
import NoCard from "./NoCard";

const Cards = ({ category, newsletters }) => {
  const count = newsletters ? newsletters.length : 0;
  const categoryArr = [
    { code: "all", title: "랜덤모두보기" },
    { code: "economy", title: "경제" },
    { code: "education", title: "교육" },
    { code: "news", title: "뉴스" },
    { code: "design", title: "디자인" },
    { code: "lifestyle", title: "라이프스타일" },
    { code: "marketing", title: "마케팅" },
    { code: "culture", title: "문화" },
    { code: "work", title: "일과 노동" },
    { code: "tech", title: "테크" },
    { code: "trend", title: "트렌드" },
    { code: "society", title: "사회" },
  ];

  return (
    <>
      <h3 className="font-2xl text-gray-600 text-[27px] font-bold pt-8">
        {categoryArr.find((item) => item.code === category).title}
        {"  "}
        {category !== "all" ? (
          <span className="text-[17px]">({count})</span>
        ) : null}
      </h3>
      {count > 0 ? (
        <div className="mt-4 grid sm:grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,2fr)] xl:grid-cols-[repeat(3,300px)] gap-[18px] mb-[18px]">
          {newsletters.map((newsletter) => (
            <Card key={newsletters.id} newsletter={newsletter} />
          ))}
        </div>
      ) : (
        <div className="mt-4 mb-30">
          <NoCard />
        </div>
      )}
    </>
  );
};

export default Cards;
