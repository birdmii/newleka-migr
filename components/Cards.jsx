"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Card from "./Card";
import NoCard from "./NoCard";

const Cards = ({ category, newsletters }) => {
  const pathname = usePathname();
  const [newsletterData, setNewsletterData] = useState(newsletters);

  const categoryArr = [
    { code: "search", title: "검색 결과" },
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

  let count = 0;

  if (newsletters && newsletters !== undefined) {
    count = newsletters.length;
  }

  const handleClickRandomBtn = (e) => {
    const randomNewsletters = [...newsletterData];
    if (count) {
      let m = count;
      let t;
      let i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = randomNewsletters[m];
        randomNewsletters[m] = randomNewsletters[i];
        randomNewsletters[i] = t;
      }
    }
    setNewsletterData([...randomNewsletters]);
  };

  return (
    <>
      <div className="flex items-center pt-8">
        <h3 className="font-2xl text-gray-600 text-[27px] font-bold ">
          {categoryArr.find((item) => item.code === category).title}
          {"  "}
          {category !== "all" ? (
            <span className="text-[17px]">({count})</span>
          ) : null}
        </h3>
        {pathname === "/search" ? null : (
          <button className="ml-2" onClick={handleClickRandomBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </button>
        )}
      </div>
      {count > 0 ? (
        <div className="mt-4 grid sm:grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,2fr)] xl:grid-cols-[repeat(3,300px)] gap-[18px] mb-[18px]">
          {pathname === "/search"
            ? newsletters.map((newsletter) => (
                <Card key={newsletters.id} newsletter={newsletter} />
              ))
            : newsletterData.map((newsletter) => (
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
