import { Button } from "@mui/material";
import useCats from "./hooks/useCats";
import { CatCard } from "./components/CatComponent";

const App = () => {
  const { cats, generateCatObject, deleteCat } = useCats();

  return (
    <>
      <h1>Animals</h1>
      <Button variant="contained" onClick={generateCatObject}>
        Generate
      </Button>

      {cats.map((cat, key) => (
        <CatCard cat={cat} key={cat.id} index={key + 1} deleteCat={deleteCat} />
      ))}
    </>
  );
};

export default App;
