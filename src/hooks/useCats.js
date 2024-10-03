import { useState } from "react";
import { fetchHelper } from "../helpers/fetchHelper";

export const useCats = () => {
  const [catArray, setCatArray] = useState([]);

  const generateNewCat = async () => {
    const { data } = await fetchHelper(
      "https://freetestapi.com/api/v1/animals/1"
    );
    setCatArray((prevState) => [...prevState, data]);
  };

  return { generateNewCat, catArray };
};
