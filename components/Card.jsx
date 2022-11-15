const Card = ({ newsletter }) => {
  const categoryArr = [
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

  const sendingTermArr = [
    { code: "daily", name: "매일" },
    { code: "weekly", name: "매주" },
    { code: "tendays", name: "10일" },
    { code: "biweekly", name: "격주" },
    { code: "monthly", name: "매달" },
    { code: "?", name: "?" },
  ];

  const sendingDayArr = [
    { code: "Mon", name: "월" },
    { code: "Tue", name: "화" },
    { code: "Wed", name: "수" },
    { code: "Thu", name: "목" },
    { code: "Fri", name: "금" },
    { code: "Sat", name: "토" },
    { code: "Sun", name: "일" },
  ];

  const tagArr = newsletter.tag.tag;
  const sendingDays = newsletter.sendingday.day;
  const sampleLink = newsletter.samplelink !== "-" ? newsletter.samplelink : "";
  let categoryTitle;
  categoryArr.forEach((item) => {
    if (newsletter.category === item.code) {
      categoryTitle = item.title;
    }
  });

  let sendingTerm;
  sendingTermArr.forEach((item) => {
    if (item.code === newsletter.sendingterm) {
      sendingTerm = item.name;
    }
  });

  let categoryClassName = `bg-${newsletter.category}`;

  return (
    <div className="relative min-w-[300px] h-[584px] bg-white p-5 rounded-2xl overflow-hidden">
      <div className="flex mb-2">
        <span
          className={
            categoryClassName +
            " rounded-lg py-1 px-2 text-white text-sm font-bold"
          }
        >
          {categoryTitle}
        </span>
      </div>
      <h2 className="text-[34px] leading-10 text-left break-keep">
        {newsletter.title}
      </h2>

      <p className="text-left break-keep text-gray-500 font-xs my-[14px] leading-relaxed">
        {newsletter.description}
      </p>

      <div className="absolute bottom-[96px]">
        <div className="text-xs tracking-wide">발행 주기</div>
        <div className="mt-2">
          <span className="py-1 px-2 text-primary-500 bg-primary-100 rounded-lg text-xs font-bold">
            {sendingTerm}
          </span>
        </div>
        <div className="mt-2">
          {newsletter.sendingterm === "daily"
            ? sendingDayArr.map((day) => {
                return (
                  <span
                    key={day.code}
                    className="py-1 px-2 mr-1 text-xs font-medium rounded-lg bg-primary-100 text-primary-500"
                  >
                    {day.name}
                  </span>
                );
              })
            : sendingDayArr.map((day) => {
                if (sendingDays.includes(day.code)) {
                  return (
                    <span
                      key={day.code}
                      className="py-1 px-2 mr-1 text-xs text-medium rounded-lg bg-primary-100 text-primary-500"
                    >
                      {day.name}
                    </span>
                  );
                }
                return (
                  <span
                    key={day.code}
                    className={
                      "py-1 px-2 bg-gray-50 text-gray-300 mr-1 text-xs font-medium rounded-lg"
                    }
                  >
                    {day.name}
                  </span>
                );
              })}
        </div>

        <div className="mt-6">
          <div className="text-xs">관련 태그</div>
          <div className="mt-2 mb-6">
            {tagArr.map((tag) => {
              return (
                <span
                  key={tag}
                  className="text-xs mr-2 py-1 px-2 border-solid border border-gray-100 rounded-lg text-gray-500"
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <a
        target="_blank"
        href={newsletter.subscriptionlink}
        rel="noopener noreferrer"
      >
        <button className="absolute flex justify-center items-center bottom-5 left-5 right-5 h-[56px] bg-gray-50 text-primary-600 rounded-2xl hover:bg-primary-450 hover:text-white active:bg-primary-500">
          구독하기
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-2 w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default Card;
