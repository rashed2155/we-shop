import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataProvider";

function ProductDetails() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  const details = products.filter((product, index) => {
    return product.id === id;
  });

  console.log(details);

  return (
    <div>
      {details.map((product) => (
        <div className="details" key={product.id}>
          <div className="img-container">
            <img src={product.images} alt={product.title} />
          </div>
          <div className="box-details">
            <h2> {product.title} </h2>
            <h3>
              <span style={{ fontSize: "27px", fontWeight: "bold" }}>৳</span>
              {product.price}
            </h3>
            <p> {product.description} </p>
            <div className="action">
              <button onClick={() => addCart(product.id)}>Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDetails;
