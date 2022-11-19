const SkltnCard = () => {
  return (
    <div className="relative min-w-[300px] h-[584px] bg-gray-100 p-5 rounded-2xl overflow-hidden text-justify">
      <div className="flex mb-2">
        <span className="box-content rounded-lg py-1 px-2 h-[17px] w-9 bg-gray-200 animate-pulse"></span>
      </div>
      <h2 className="w-full h-10 rounded-lg bg-gray-200 animate-pulse"></h2>
      <div className="mt-[14px]">
        <div className="w-full h-[17px] rounded mt-1 bg-gray-200 animate-pulse"></div>
        <div className="w-full h-[17px] rounded mt-1 bg-gray-200 animate-pulse"></div>
        <div className="w-full h-[17px] rounded mt-1 bg-gray-200 animate-pulse"></div>
        <div className="w-full h-[17px] rounded mt-1 bg-gray-200 animate-pulse"></div>
        <div className="w-full h-[17px] rounded mt-1 bg-gray-200 animate-pulse"></div>
      </div>
      <div className="absolute flex justify-center items-center bottom-5 left-5 right-5 h-[56px] bg-gray-200 rounded-2xl animate-pulse"></div>
    </div>
  )
}

export default SkltnCard