import { useParams } from "react-router-dom";

function DetailPage() {
  const params = useParams();
  return (
    <>
      <h1>상세페이지</h1>
      <h3>{params.id}</h3>
      <img
        src={`https://cdn.jsdelivr.net/gh/PokeAPI/sprites/sprites/pokemon/${params.id}.png`}
        alt="pocketmon"
      />
    </>
  );
}

export default DetailPage;
