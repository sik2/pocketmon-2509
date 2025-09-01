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
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              borderbottom: "1px solid black",
            }}
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/PokeAPI/sprites/sprites/pokemon/${
                index + 1
              }.png`}
              alt="pocketmon"
            />
            {pocketmon.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
