import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/detailPage";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route index path="/" element={<ListPage />}></Route>
        <Route index path="/list" element={<ListPage />}></Route>
        <Route index path="/detail/:id" element={<DetailPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
