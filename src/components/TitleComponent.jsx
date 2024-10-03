import React from "react";

const TitleComponent = ({ label }) => {
  return (
    <>
      <div className="w-7/12 m-auto">
        <div className="p-3 ">
          <h1 className="text-3xl text-center">{label}</h1>
        </div>
      </div>
      <hr className="bg-zinc-600" />
    </>
  );
};

export default TitleComponent;
