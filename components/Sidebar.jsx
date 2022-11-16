"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavBtn from "./NavBtn";

const Sidebar = () => {
  const paths = usePathname();
  const category = paths.split("/")[2];

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
    <div>
      <div className="max-lg:hidden mt-10 sticky top-[104px] w-[230px] mr-5">
        <div className="text-[17px] font-bold justify-between py-[11px] pr-0 pl-[11px]">
          카테고리
        </div>

        <ul className="text-[15px] font-medium my-4">
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
                <Link
                  key={item.code}
                  href="/category/[category]"
                  as={`/category/${item.code}`}
                >
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
                <Link
                  key={item.code}
                  href="/category/[category]"
                  as={`/category/${item.code}`}
                >
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
      <div className="lg:hidden fixed top-0 w-screen h-screen left-0 z-[99] bg-[rgba(0,0,0,0.5)] backdrop-blur-sm">
        <div className="absolute right-0 text-right z-[100] text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="block top-0 w-4/5 h-full overflow-y-scroll z-[99] bg-background px-4 pt-4 left-0">
          <div className="m-0 p-0 flex justify-start">
            <NavBtn content="제안하기" />
          </div>
          <div className="text-[17px] font-bold mt-6 p-0">
            <span>카테고리</span>
          </div>
          <ul className="text-[15px] font-medium my-4">
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
                  <Link
                    key={item.code}
                    href="/category/[category]"
                    as={`/category/${item.code}`}
                  >
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
                  <Link
                    key={item.code}
                    href="/category/[category]"
                    as={`/category/${item.code}`}
                  >
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
      </div>
    </div>
  );
};

export default Sidebar;
