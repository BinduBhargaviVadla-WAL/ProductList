import { React } from "react";
import { useContext } from "react";
import ProductContext from "./ProductContext";

export default function ProductList() {
  const { dispatch } = useContext(ProductContext);
  const reducerValue = useContext(ProductContext);
  console.log(reducerValue.state.data.length);

  return (
    <div className='ProductList border border-primary'>
      {reducerValue.state.data.map((val, index) => {
        return (
          <div className=' border border-primary'>
            <card>
              <h2>{val.title}</h2>
              <img src={val.image} alt='..' />
              <p>
                <strong>Id NO:</strong>
                {val.id}
              </p>
              <p>
                <strong>Category:</strong>
                {val.category}
              </p>
              <p>
                <strong>Price:</strong>
                {val.price}Rs
              </p>
              <p className='Description'>
                <strong>
                  About Product:
                  <br />
                </strong>
                {val.description}
              </p>
              <div>
                <button
                  onClick={() => {
                    dispatch({ type: "edit", index: index });
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "delete", index: index });
                  }}
                >
                  Delete
                </button>
              </div>
            </card>
          </div>
        );
      })}

      {/* <card>
                <img src={data.image} alt=".." />
                <p>Product Id NO:{data.id}</p>
                <h2>{data.title}</h2>
                <p>
                    <strong>Category:{data.category}</strong>
                </p>
                <p>
                    <strong>Price:{data.price}Rs</strong>
                </p>
                <p>
                    <strong>
                        About Product :{data.description}
                        <br />
                    </strong>
                    {data.description}
                </p>
        </card> */}
    </div>
  );
}
