import React from "react";
import TitleComponent from "../components/TitleComponent";
import { NavLink } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";

const DetailPage = () => {
  return (
    <div className="w-full m-auto">
      <TitleComponent label={"Fact 1"} />
      <div className="w-7/12 m-auto">
        <div className="flex justify-center flex-col my-5 gap-3">
          <p className="text-center text-lg">
            To generate a random fact about pets, press the button below
          </p>
        </div>
        <NavLink to="/">
          <ButtonComponent label="Go Back" />
        </NavLink>
      </div>
    </div>
  );
};

export default DetailPage;
