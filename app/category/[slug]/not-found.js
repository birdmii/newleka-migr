import Image from "next/image";
import FourOFour from "@assets/404.png";
import Btn from "@components/Btn";

export default function NotFound() {
  return (
    <div className="min-w-[936px] flex flex-col items-center mt-20">
      <Image src={FourOFour} className="w-full max-w-[519px] h-auto" />
      <div className="text-center mt-6">
        <h3 className="text-gray-600 font-bold text-2xl leading-loose">
          이런! 찾을 수 없는 페이지네요...
        </h3>
        <p className="text-gray-400 text-[16px]">
          존재하지 않는 주소를 입력하셨거나 잘못된 경로를 이용하셨네요...
        </p>
        <Btn content={"홈 화면으로 가기"} name={"go-back"} link={"/"} />
      </div>
    </div>
  );
}
