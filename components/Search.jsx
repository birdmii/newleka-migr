const Search = ({
  query,
  handleQuery,
  handleQuerySubmit,
  showSearchbar,
  handleShowSearchbar,
}) => {
  return (
    <>
      <div className="max-lg:hidden flex items-center h-full text-gray-300 border-l border-l-gray-100 border-r border-r-gray-100 w-[60%] pl-5">
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

        <form className="w-full h-full" onSubmit={handleQuerySubmit}>
          <input
            type="text"
            name="search"
            id="searchBox"
            value={query}
            onChange={handleQuery}
            className="w-full h-full pl-5 text-gray-400 text-sm focus:text-gray-600 placeholder:text-gray-300 outline-none"
            placeholder="관심있는 주제를 검색해보세요. (예: 음악, 스타트업, 마케팅 등)"
          />
        </form>
      </div>
      {/* Mobile Searchbar */}
      {showSearchbar && (
        <div className="lg:hidden block fixed top-0 left-0 w-screen h-screen z-[99] bg-white">
          <div className="flex items-center bg-white text-gray-300 h-[60px] py-2 px-4 shadow-search">
            <div className="flex bg-gray-100 w-full h-full rounded-lg p-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <form
                className="bg-gray-100 w-[90%]"
                onSubmit={handleQuerySubmit}
                id="searchForm"
              >
                <input
                  type="text"
                  name="search"
                  id="searchBox"
                  value={query}
                  onChange={handleQuery}
                  className="bg-gray-100 w-[90%] text-gray-400 text-[16px] pl-5"
                  placeholder="관심있는 주제를 검색해보세요."
                />
              </form>
            </div>
            <div onClick={handleShowSearchbar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-lg ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
