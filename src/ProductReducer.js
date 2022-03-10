const ProductReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "FETCH_SUCCESS":
      console.log("fetch success");
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      console.log("fetch fail");
      return {
        loading: true,
        data: [],
        error: "Some thing went wrong",
      };
    case "edit":
      return state;
    case "delete":
      console.log("delte index");
      console.log(action.index);
      let filteredData = state.data.filter((val, index) => {
        if (index !== action.index) {
          return true;
        }
        return false;
      });
      console.log(filteredData);
      return filteredData;
    case "deleteAll":
      return {
        loading: true,
        data: [],
        error: "Some thing went wrong",
      };
    default:
      return state;
  }
};
export default ProductReducer;
