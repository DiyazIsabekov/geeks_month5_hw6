import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/hoc/Layout";
import MainPage from "./pages/MainPage/MainPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
