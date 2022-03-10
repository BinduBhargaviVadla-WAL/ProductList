import React from "react";
import "./App.css";
import ProductProvider from "./ProductProvider";
import ProductList from "./ProuctList";

function App() {
  return (
    <div className='App'>
      <h1>Products List</h1>
      <ProductProvider />
    </div>
  );
}
export default App;
