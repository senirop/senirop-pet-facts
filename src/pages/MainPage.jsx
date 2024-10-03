import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import TitleComponent from "../components/TitleComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useCats } from "../hooks/useCats";

const MainPage = () => {
  const { generateNewCat, catArray } = useCats();

  const onClickGenerate = () => {
    generateNewCat();
  };
  useEffect(() => {
    console.log(catArray);
  }, [catArray]);

  return (
    <div className="w-full m-auto">
      <TitleComponent label={"Animals"} />
      <div className="w-7/12 m-auto">
        <div className="flex justify-center flex-col my-5 gap-3">
          <p className="text-center text-lg">
            To generate a random fact about pets, press the button below
          </p>
          <ButtonComponent handleClick={onClickGenerate} label="Generate!" />
        </div>
        <NavLink to="/1">Cat 1</NavLink>
      </div>
    </div>
  );
};

export default MainPage;
