import React from "react";

const ButtonComponent = ({ label, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-[#318e93] rounded-full py-2 px-3 text-white w-24 m-auto"
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
