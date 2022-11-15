const Search = () => {
  return (
    <>
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

      <form className="w-full h-full">
        <input
          type="text"
          name="search"
          id="searchBox"
          className="w-full h-full pl-5 text-gray-400 text-sm focus:text-gray-600 placeholder:text-gray-300 outline-none"
          placeholder="관심있는 주제를 검색해보세요. (예: 음악, 스타트업, 마케팅 등)"
        />
      </form>
    </>
  );
};

export default Search;
