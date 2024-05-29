import "./App.css";
import Header from "./component/Header.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home.js";
import Cart from "./component/Cart.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
