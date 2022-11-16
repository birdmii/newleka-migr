import { supabase } from "@utils/database";
import Alert from "@components/Alert";
import Cards from "@components/Cards";

export default async function Home() {
  const { data } = await supabase.from("newsletters").select("*");
  console.log(data);
  
  let m = data.length;
  let t;
  let i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = data[m];
    data[m] = data[i];
    data[i] = t;
  };

  return (
    <div className="mt-10">
      <Alert
        alertContent={{
          content:
            "210개가 넘는 뉴스레터를 NEW・LE・KA에 모아두었어요📚 새로운 뉴스레터들을 찾아보세요!",
        }}
      />
      <Cards category={"all"} newsletters={data} />
    </div>
  );
}
