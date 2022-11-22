"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import suggestNLKImg from "@assets/peep-1.png";
import suggestNLImg from "@assets/peep-2.png";
import Image from "next/image";
import Btn from "./Btn";

const Modal = ({ showModal, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isA, setIsA] = useState(false);
  const [isB, setIsB] = useState(false);

  useEffect(() => {
    setIsBrowser(true); // true
  }, []);

  const handleClose = () => {
    onClose();
    setIsA(false);
    setIsB(false);
  };

  const handleCardClick = (e) => {
    const cardId = e.target.id;
    if (cardId === "suggestNewleka" && !isB) {
      setIsA(true);
    } else if (cardId === "suggestNewsletter" && !isA) {
      setIsB(true);
    } else if (cardId === "suggestNewleka") {
      let setClicked = !isA;
      setIsA(setClicked);
      setIsB(!setClicked);
    } else if (cardId === "suggestNewsletter") {
      let setClicked = !isB;
      setIsA(!setClicked);
      setIsB(setClicked);
    }
  };

  const modalContent = showModal ? (
    <div className="fixed top-0 left-0 w-full h-screen z-[9999] bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      <div className="w-[80vw] lg:w-[600px] py-8 px-[36px] bg-gray-50 rounded-2xl">
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
          <button onClick={handleCardClick}>
            <div
              id="suggestNewleka"
              className={
                isA
                  ? "bg-primary-100 border-2 border-primary-450 flex justify-center items-center flex-col  w-[30vw] lg:w-[250px] h-[336px] rounded-lg lg:p-5 m-[14px] shadow-shadow-1 hover:shadow-none"
                  : "flex justify-center items-center flex-col w-[30vw] lg:w-[250px] h-[336px] bg-white rounded-lg lg:p-5 m-[14px] shadow-shadow-1 hover:shadow-none"
              }
            >
              <Image
                id="suggestNewleka"
                src={suggestNLKImg}
                alt={"Give a suggest to NEWLEKA"}
                className="w-full max-w-[210px] h-auto"
              />
              <span id="suggestNewleka" className="mt-6 break-keep">
                뉴레카에 대해 제안하기
              </span>
            </div>
          </button>
          <button onClick={handleCardClick}>
            <div
              id="suggestNewsletter"
              class={
                isB
                  ? "bg-primary-100 border-2 border-primary-450 flex justify-center items-center flex-col w-[30vw] lg:w-[250px] h-[336px] rounded-lg lg:p-5 m-[14px] shadow-shadow-1 hover:shadow-none"
                  : "flex justify-center items-center flex-col  w-[30vw] lg:w-[250px] h-[336px] bg-white rounded-lg lg:p-5 m-[14px] shadow-shadow-1 hover:shadow-none"
              }
            >
              <Image
                id="suggestNewsletter"
                src={suggestNLImg}
                alt={"Give a suggest to NEWLEKA"}
                className="w-full max-w-[210px] h-auto"
              />
              <span id="suggestNewsletter" className="mt-6 break-keep">
                새로운 뉴스레터 알려주기
              </span>
            </div>
          </button>
        </div>
        <div className="flex justify-end">
          <Btn content={"취소"} name={"cancel"} onClick={handleClose} />
          <Btn
            content={isA ? "제안하기" : isB ? "알려주기" : "제안하기"}
            name={isA || isB ? "suggest-link" : "suggest-disable"}
            link={
              isA
                ? "https://forms.gle/S8rcCoCvxAYA6YbGA"
                : isB
                ? "https://forms.gle/jYrE9TeSnXEnfk7S6"
                : ""
            }
          />
        </div>
      </div>
    </div>
  ) : null;

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
