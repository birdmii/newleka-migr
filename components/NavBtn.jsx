"use client";

import Modal from "@components/Modal";
import { useState } from "react";

const NavBtn = ({ content }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="py-2 px-4 ml-[10px] bg-primary-450 active:bg-primary-500 cursor-pointer text-white rounded-full text-sm"
        onClick={() => setShowModal(true)}
      >
        {content}
      </button>
      <Modal showModal={showModal} onClose={() => setShowModal(false)}/>
    </>
  );
};

export default NavBtn;
