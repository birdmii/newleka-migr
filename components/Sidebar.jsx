'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const category = undefined;

  const categories = [
    { code: "economy", title: "경제" },
    { code: "education", title: "교육" },
    { code: "news", title: "뉴스" },
    { code: "design", title: "디자인" },
    { code: "lifestyle", title: "라이프스타일" },
    { code: "marketing", title: "마케팅" },
    { code: "culture", title: "문화" },
    { code: "work", title: "일과 노동" },
    { code: "society", title: "사회" },
    { code: "tech", title: "테크" },
    { code: "trend", title: "트렌드" },
  ];

  return (
    <div className="mt-10 sticky t-[104px] min-w-[230px] mr-5">
      <div className="text-[17px] font-bold justify-between py-[11px] pr-0 pl-[11px]">
        카테고리
      </div>

      <ul className="text-[15px] font-medium">
        <Link href="/">
          {category === undefined ? (
            <li className="py-[9px] px-4 mt-[3px] text-gray-600 font-bold w-full cursor-pointer rounded-lg hover:rounded-lg bg-gray-100">
              {" "}
              랜덤모두보기
            </li>
          ) : (
            <li className="py-[9px] px-4 mt-[3px] text-gray-400 w-full cursor-pointer hover:bg-gray-100 hover:rounded-lg">
              {" "}
              랜덤모두보기
            </li>
          )}
        </Link>
        {categories.map((item) => {
          if (item.code === category) {
            return (
              <Link key={item.code} href="/category/[category]" as={`/category/${item.code}`}>
                <li
                  className="py-[9px] px-4 mt-[3px] text-gray-600 font-bold w-full cursor-pointer rounded-lg hover:rounded-lg bg-gray-100"
                  id={item.code}
                >
                  {item.title}
                </li>
              </Link>
            );
          } else {
            return (
              <Link key={item.code} href="/category/[category]" as={`/category/${item.code}`}>
                <li
                  className="py-[9px] px-4 mt-[3px] text-gray-400 w-full cursor-pointer hover:bg-gray-100 hover:rounded-lg"
                  id={item.code}
                >
                  {item.title}
                </li>
              </Link>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
