import Alert from "@components/Alert";
import Cards from "@components/Cards";

export default function Home() {
  const newsletters = [
    {
      id: 194,
      published_at: "2021-07-31T13:35:03.608Z",
      created_at: "2021-07-31T13:35:03.779Z",
      updated_at: "2021-07-31T13:35:03.779Z",
      title: "찰리씨네 다이어리",
      description:
        "조금 오래된 영화를 좋아합니다. 너무 무겁지도, 너무 가볍지도 않게, 매주 토요일 오전 11시에 찾아갑니다.",
      subscriptionlink: "https://charliecinediary.imweb.me/index",
      sendingterm: "weekly",
      sendingnumber: 1,
      category: "culture",
      tag: {
        tag: ["21세기 이전", "영화 소개"],
      },
      sendingday: {
        day: ["Sat"],
      },
      language: "ko",
      publishing: true,
      samplelink: "https://charliecinediary.imweb.me/15",
    },
    {
      id: 194,
      published_at: "2021-07-31T13:35:03.608Z",
      created_at: "2021-07-31T13:35:03.779Z",
      updated_at: "2021-07-31T13:35:03.779Z",
      title: "찰리씨네 다이어리",
      description:
        "조금 오래된 영화를 좋아합니다. 너무 무겁지도, 너무 가볍지도 않게, 매주 토요일 오전 11시에 찾아갑니다.",
      subscriptionlink: "https://charliecinediary.imweb.me/index",
      sendingterm: "weekly",
      sendingnumber: 1,
      category: "culture",
      tag: {
        tag: ["21세기 이전", "영화 소개"],
      },
      sendingday: {
        day: ["Sat"],
      },
      language: "ko",
      publishing: true,
      samplelink: "https://charliecinediary.imweb.me/15",
    },
    {
      id: 194,
      published_at: "2021-07-31T13:35:03.608Z",
      created_at: "2021-07-31T13:35:03.779Z",
      updated_at: "2021-07-31T13:35:03.779Z",
      title: "찰리씨네 다이어리",
      description:
        "조금 오래된 영화를 좋아합니다. 너무 무겁지도, 너무 가볍지도 않게, 매주 토요일 오전 11시에 찾아갑니다.",
      subscriptionlink: "https://charliecinediary.imweb.me/index",
      sendingterm: "weekly",
      sendingnumber: 1,
      category: "culture",
      tag: {
        tag: ["21세기 이전", "영화 소개"],
      },
      sendingday: {
        day: ["Sat"],
      },
      language: "ko",
      publishing: true,
      samplelink: "https://charliecinediary.imweb.me/15",
    },
  ];
  return (
    <div className="mt-10">
      <Alert
        alertContent={{
          content:
            "210개가 넘는 뉴스레터를 NEW・LE・KA에 모아두었어요📚 새로운 뉴스레터들을 찾아보세요!",
        }}
      />
      <Cards category={"all"} newsletters={newsletters} />
    </div>
  );
}
