import axios from "axios";
import { useEffect } from "react";
import { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
import ProductList from "./ProuctList";

const ProductProvider = () => {
  const initialValue = {
    loading: true,
    error: "",
    data: [],
  };
  const [state, dispatch] = useReducer(ProductReducer, initialValue);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);

        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch(function (error) {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  const reducerValue = { state, dispatch };
  console.log(reducerValue.state.data.length);
  return (
    <ProductContext.Provider value={reducerValue}>
      <ProductList />
    </ProductContext.Provider>
  );
};
export default ProductProvider;
