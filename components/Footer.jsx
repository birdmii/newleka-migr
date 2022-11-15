import BroSis from "@assets/peeps.png";
import Image from "next/image";
import Btn from "@components/Btn";

const Footer = () => {
  return (
    <div className="text-center bg-gray-100 py-[30px] px-20 mt-[120px] static bottom-0 w-full">
      <div className="grid grid-cols-[repeat(2,1fr)]">
        <div className="text-right pr-10">
          <Image
            alt="NEW・LE・KA Footer"
            src={BroSis}
            className="w-full max-w-[430px] h-auto mr-0 ml-auto"
          />
        </div>
        <div className="py-10 px-0 flex flex-col text-left justify-around">
          <p className="text-3xl font-bold leading-snug">
            개발자 누나와 디자이너 동생이 한팀인 <br />
            LIFEGUARD STUDIO 입니다.
            <br />
            우당탕탕 일합니다.
          </p>
          <Btn
            content={"함께 일해요!"}
            name={"footer"}
            link={"mailto:newleka.contact@gmail.com"}
          />
        </div>
      </div>
      <div className="mt-4 text-sm tracking-wide">
        © {new Date().getFullYear() } LIFEGUARD STUDIO PRODUCT. <br />
        All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
