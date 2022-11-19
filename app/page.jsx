import { supabase } from "@utils/database";
import Alert from "@components/Alert";
import Cards from "@components/Cards";

async function getAllNewsletters() {
  const { data } = await supabase.from("newsletters").select("*");
  return data;
}

async function getAlertContent() {
  const { data } = await supabase.from("alerts").select("*").eq("id", 1);
  return data[0];
}

export default async function Home() {
  const newsletterData = getAllNewsletters();
  const alertData = getAlertContent();

  const [newsletters, alertContent] = await Promise.all([
    newsletterData,
    alertData,
  ]);

  return (
    <div className="mt-10">
      <>
        <Alert alertContent={alertContent} />
        <Cards category={"all"} newsletters={newsletters} />
      </>
    </div>
  );
}
