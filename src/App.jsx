import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      const response = await fetch("https://freetestapi.com/api/v1/animals");
      const data = await response.json();
      setAnimals(data);
    };
    if (animals.length === 0) {
      fetchAnimals();
    }
  }, []);

  return (
    <>
      <h1>Animals</h1>

      <table>
        <tr>
          <th>Name</th>
          <th>Species</th>
          <th>Family</th>
        </tr>

        {animals.map((animal, key) => (
          <tr key={`${key}`}>
            <td>{animal.name}</td>
            <td>{animal.species}</td>
            <td>{animal.family}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default App;
