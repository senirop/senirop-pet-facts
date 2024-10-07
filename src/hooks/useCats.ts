import { useCallback, useState } from "react";

const useCats = () => {
  const [cats, setCats] = useState([]);

  const fetchFact = useCallback(async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    return data.fact;
    // setAnimals(data);
  }, []);

  const fetchCatasObject = useCallback(async (word) => {
    const response = await fetch(
      `https://cataas.com/cat/says/${word}?json=true`,
      {
        headers: {},
      }
    );
    const data = await response.json();
    console.log({ data });

    return data;
  }, []);

  const generateCatObject = async () => {
    const factSentece = await fetchFact();
    const [firstWord, secondWord] = [...factSentece.split(" ")];
    const title = `${firstWord} ${secondWord}`;
    const catas = await fetchCatasObject(title);

    const cat = {
      id: catas?._id,
      title,
      fact: factSentece,
      imgUrl: `https://cataas.com/cat/${catas?._id}/says/${title}`,
    };

    setCats((prevState) => [...prevState, cat]);

    // console.log(firstWord, secondWord, catas);
  };

  const deleteCat = (id) => {
    setCats((prevState) => prevState.filter((cat) => cat.id != id));
  };

  return { cats, generateCatObject, deleteCat };
};

export default useCats;
