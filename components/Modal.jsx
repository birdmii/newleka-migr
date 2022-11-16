"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import suggestNLKImg from "@assets/peep-1.png";
import suggestNLImg from "@assets/peep-2.png";
import Image from "next/image";
import Btn from "./Btn";

const Modal = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(false); // true
  }, []);

  const modalContent = (
    <div className="fixed top-0 left-0 w-full h-screen z-50 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      <div className="w-[600px] py-8 px-[36px] bg-gray-50 rounded-2xl">
        <div>
          <h3 className="text-gray-600 font-bold text-2xl leading-loose">
            제안하기
          </h3>
          <p className="text-gray-400 text-sm my-4">
            제안해주셔서 감사합니다! <br />
            여러분의 소중한 피드백 하나하나가 더 나은 뉴레카를 만들어 갑니다!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button>
            <div
              id="suggestNewleka"
              class="flex justify-center items-center flex-col w-[250px] h-[336px] bg-white rounded-lg p-5 m-[14px] shadow-shadow-1 hover:shadow-none"
            >
              <Image
                id="suggestNewleka"
                src={suggestNLKImg}
                alt={"Give a suggest to NEWLEKA"}
                className="w-full max-w-[210px] h-auto"
              />
              <span id="suggestNewleka" className="mt-6">
                뉴레카에 대해 제안하기
              </span>
            </div>
          </button>
          <button>
            <div
              id="suggestNewleka"
              class="flex justify-center items-center flex-col w-[250px] h-[336px] bg-white rounded-lg p-5 m-[14px] shadow-shadow-1 hover:shadow-none"
            >
              <Image
                id="suggestNewleka"
                src={suggestNLImg}
                alt={"Give a suggest to NEWLEKA"}
                className="w-full max-w-[210px] h-auto"
              />
              <span id="suggestNewleka" className="mt-6">
                새로운 뉴스레터 알려주기
              </span>
            </div>
          </button>
        </div>
        <div className="flex justify-end">
          <Btn content={"취소"} name={"cancel"} />
          <Btn
            content={"제안하기"}
            name={"suggest-link"}
            link={"https://forms.gle/S8rcCoCvxAYA6YbGA"}
          />
        </div>
      </div>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
