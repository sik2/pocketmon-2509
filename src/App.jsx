import { useEffect, useState } from "react";

function App() {
  const [pocketmons, setPocketmons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loding, setLoading] = useState(true);
  const limit = 30;
  const totalCount = 1302;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((res) => {
        setPocketmons(res.results);
        setLoading(false);
      });
  }, [offset]);

  const showPrev = () => {
    setOffset(offset - limit);
  };

  const showNext = () => {
    setOffset(offset + limit);
  };

  if (loding) {
    return <>로딩중...</>;
  }

  return (
    <>
      <h1>포켓몬 도감</h1>
      {offset > 0 && <button onClick={showPrev}>이전</button>}
      {totalCount > offset + limit && <button onClick={showNext}>다음</button>}
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
