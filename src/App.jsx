import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/detailPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<ListPage />}></Route>
      <Route index path="/list" element={<ListPage />}></Route>
      <Route index path="/detail/:id" element={<DetailPage />}></Route>
    </Routes>
  );
}

export default App;
