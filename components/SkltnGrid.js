import SkltnAlert from "./SkltnAlert";
import SkltnCard from "./SkltnCard";

const SkltnGrid = ({ category }) => {
  const gridTitle = (
    <h3 className="pt-8">
      <span className="block h-[39px] w-[200px] bg-gray-200 animate-pulse rounded-lg"></span>
    </h3>
  );

  const gridBody = (
    <div className="mt-4 mb-30 grid sm:grid-cols-[repeat(1,1fr)] md:grid-cols-[repeat(2,2fr)] xl:grid-cols-[repeat(3,300px)] gap-[18px] mb-[18px]">
      <SkltnCard />
      <SkltnCard />
      <SkltnCard />
      <SkltnCard />
      <SkltnCard />
      <SkltnCard />
    </div>
  );
  return (
    <div>
      <div className={category === "all" ? "mt-10" : ""}>
        {category === "all" ? <SkltnAlert /> : null}
        {gridTitle}
        {gridBody}
      </div>
    </div>
  );
};

export default SkltnGrid;
