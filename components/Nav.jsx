import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/logo.png";
import Search from "@components/Search";
import NavBtn from "@components/NavBtn";

const Nav = () => {
  return (
    <>
      <div className="bg-white h-[64px] sticky top-0 w-full z-10">
        <div className="max-md:justify-between relative max-w-[1232px] my-0 mx-auto py-0 px-5 flex items-center h-full">
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="md:w-[20%]">
            <Link href="/">
              <Image alt="Logo Image" src={Logo} width={127} height={83} />
            </Link>
          </div>
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="max-md:hidden flex items-center h-full text-gray-300 border-l border-l-gray-100 border-r border-r-gray-100 w-[60%] pl-5">
            <Search />
          </div>
          <div className="max-md:hidden ml-auto">
            <NavBtn content={"제안하기"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
