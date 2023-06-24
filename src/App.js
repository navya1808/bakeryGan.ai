import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PageNotFound from "./Components/PageNotFound";
import Home from "./Components/Home";
import BakeryItems from "./Components/BakeryItems";
import Cart from "./Components/Cart";
import { Provider } from "./Context";

function App() {
  return (
    <Provider >
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<BakeryItems />} />
            <Route path="/cart" element={<Cart />} /> 
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
