import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";

function Products() {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart

  return (
    <div className="products">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img style={{width:"100%"}} src={product.images} alt={product.title} />
          </Link>
          <div className="box">
            <h3>
              <Link to={`/products/${product.id}`}> {product.title} </Link>
            </h3>
            <p>{product.description}</p>
            <h4>
              <span style={{ fontSize: "27px", fontWeight: "bold" }}>৳</span>{" "}
              {product.price}
            </h4>
            <button onClick={() => addCart(product.id)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
