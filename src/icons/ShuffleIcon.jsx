import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="17"
      fill="none"
      viewBox="0 0 26 17"
    >
      <path
        stroke="#070648"
        strokeLinecap="round"
        strokeWidth="2"
        d="M8 4L24 4"
      ></path>
      <path
        stroke="#070648"
        strokeLinecap="round"
        strokeWidth="2"
        d="M18 13L2 13"
      ></path>
      <circle cx="4" cy="4" r="3.5" stroke="#070648"></circle>
      <circle
        cx="22"
        cy="13"
        r="3.5"
        stroke="#070648"
        transform="rotate(-180 22 13)"
      ></circle>
    </svg>
  );
}

export default Icon;