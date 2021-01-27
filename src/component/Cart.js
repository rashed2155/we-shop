import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.qtn;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.qtn === 1 ? (item.qtn = 1) : (item.qtn -= 1);
      }
    });
    setCart([...cart]);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.qtn += 1;
      }
    });
    setCart([...cart]);
  };

  const removeCart = (id) => {
    cart.forEach((item, index) => {
      if (item.id === id) {
        cart.splice(index, 1);
      }
    });

    setCart([...cart]);
  };

  const imgDiv = useRef();

  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );
  }

  return (
    <div>
      <div className="container show-cart">
        {cart.map((product) => (
          <div className="details-cart">
            <div
              className="delete"
              style={{ float: "right" }}
              onClick={() => removeCart(product.id)}
            >
              X
            </div>
            <div className="container-lg detail-cart" key={product.id}>
              <div className="col-3 img-container">
                <Link to={`/products/${product.id}`}>
                  <img src={product.images} ref={imgDiv} alt={product.title} />
                </Link>
              </div>
              <div className="col-9 cart-box">
                <Link to={`/products/${product.id}`}>
                  <h2> {product.title} </h2>
                </Link>
                <h3>
                  <span style={{ fontSize: "27px", fontWeight: "bold" }}>
                    ৳
                  </span>
                  {product.price}
                </h3>
                <div className="amount">
                  <button
                    className="count"
                    onClick={() => reduction(product.id)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span>{product.qtn}</span>
                  <button
                    className="count"
                    onClick={() => {
                      increase(product.id);
                    }}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="order">
        <div className="action-order">
          <button className="btn">Order</button>
        </div>
        <div>
          <h3>
            Total :{" "}
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>৳</span>{" "}
            {total}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
