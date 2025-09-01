import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function PocketmonListPage() {
  const [pocketmons, setPocketmons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loding, setLoading] = useState(true);
  const limit = 30;
  const totalCount = 1302;

  // forPrintPokemons 실행 되는지 테스트하기 위한 변수
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((res) => {
        setPocketmons(res.results);
        setLoading(false);
      });
  }, [offset]);

  const getNumberFromUrl = (url) => {
    const urlItems = url.split("/");
    return parseInt(urlItems[6]);
  };

  // 실행되는지를 테스트 하는 변수
  let i = 0;
  // useMemozation 설정
  const forPrintPokemons = useMemo(
    () =>
      pocketmons.map((pocketmon) => {
        // 실행되는지를 테스트
        // console.log("실행됨", ++i);

        const imgNum = getNumberFromUrl(pocketmon.url);
        const imgUrl = `https://cdn.jsdelivr.net/gh/PokeAPI/sprites/sprites/pokemon/${imgNum}.png`;

        return {
          imgNum,
          imgUrl,
          ...pocketmon,
        };
      }),
    // pocketmons 이 변경될때만 실행되도록 deps(의존배열) 추가
    [pocketmons]
  );

  const showPrev = useCallback(() => {
    setOffset(offset - limit);
  }, [offset]);

  const showNext = useCallback(() => {
    setOffset(offset + limit);
  }, [offset]);

  if (loding) {
    return <>로딩중...</>;
  }

  return (
    <>
      {/* 카운트가 변경되면 forPrintPokemons 가 계속 실행되지만 useMemo를 도입하면 필요할때만 실행되록 할 수 있다.*/}
      count: <button onClick={() => setCount(count + 1)}>{count}</button>
      <h1>포켓몬 도감</h1>
      {offset > 0 && <button onClick={showPrev}>이전</button>}
      {totalCount > offset + limit && <button onClick={showNext}>다음</button>}
      <ul>
        {forPrintPokemons.map((pocketmon, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              borderbottom: "1px solid black",
            }}
          >
            <span>{pocketmon.imgNum}</span>
            <img src={pocketmon.imgUrl} alt="pocketmon" />
            <Link to={`/detail/${pocketmon.imgNum}`}>{pocketmon.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PocketmonListPage;
