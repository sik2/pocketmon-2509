import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/list">포켓몬 리스트</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
