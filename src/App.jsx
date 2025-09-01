import { useEffect, useState } from "react";

function App() {
  const [pocketmons, setPocketmons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res) => setPocketmons(res.results));
  });

  return (
    <>
      <h1>포켓몬 도감</h1>
      <ul>
        {pocketmons.map((pocketmon, index) => (
          <li key={index}>{pocketmon.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
