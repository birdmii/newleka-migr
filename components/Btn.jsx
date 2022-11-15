import Link from "next/link";
import React from "react";

const Btn = ({ content, name, link }) => {
  const btnClass = "mt-4 ml-2 py-3 px-4 rounded-lg cursor-pointer bg-primary-450 text-white active:bg-primary-500 hover:bg-primary-400";
  let btn;

  if (name === "suggest") {
    btn = (
      <button className={btnClass}>
        {content}
      </button>
    );
  } else if (name === "cancel") {
    btn = (
      <button className="mt-4 ml-2 py-3 px-4 rounded-lg cursor-pointer bg-gray-100 text-gray-400 active:bg-gray-200">
        {content}
      </button>
    );
  } else if (name === "footer") {
    btn = (
      <Link href={link}>
        <button className={btnClass + " ml-0"}>
          {content}
        </button>
      </Link>
    );
  } else if (name === "suggest-disable") {
    btn = (
      <button className={btnClass}>
        {content}
      </button>
    );
  } else if (name === "suggest-link") {
    btn = (
      <Link href={link} target="_blank" rel="noopener">
        <button className={btnClass}>
          {content}
        </button>
      </Link>
    );
  } else if (name === "go-back") {
    btn = (
      <Link href={link}>
        <button className={btnClass}>
          {content}
        </button>
      </Link>
    );
  }

  return <div>{btn}</div>;
};

export default Btn;
