import Image from "next/image"
import NoResult from "@assets/no-result.png"
import Btn from "./Btn"

const NoCard = () => {
  return (
    <div className="flex justify-center items-center max-lg:min-w-[90vw] flex-col">
      <Image src={NoResult} className="max-w-[387px] h-auto" />
      <div className="text-center mt-6">
        <h3 className="text-gray-600 font-bold text-2xl leading-loose">등록된 뉴스레터가 없어요 ㅠㅠ</h3>
        <p className="text-gray-400 text-[16px]">알고있는 뉴스레터를 알려주세요!</p>
        <Btn content={'알려주기'} name={'suggest'} />
      </div>
    </div>
  )
}

export default NoCard