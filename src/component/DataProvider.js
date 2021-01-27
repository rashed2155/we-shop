import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      id: "1",
      title: "watch product 01",
      images: "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      sizes: ["XL", "L", "M"],
      price: "200",
      qtn : 1,
    },
    {
      id: "2",
      title: "watch product 02",
      images: "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      sizes: ["XL", "L", "M"],
      price: "300",
      qtn : 1,
    },
    {
      id: "3",
      title: "watch product 03",
      images: "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      sizes: ["XL", "L", "M"],
      price: "450",
      qtn : 1,
    },
    {
      id: "4",
      title: "watch product 04",
      images: "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      sizes: ["XL", "L", "M"],
      price: "450",
      qtn : 1,
    },
    {
      id: "5",
      title: "watch product 05",
      images: "https://www.upsieutoc.com/images/2020/07/18/img5.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      sizes: ["XL", "L", "M"],
      price: "450",
      qtn : 1,
    },
    {
      id: "6",
      title: "watch product 06",
      images: "https://www.upsieutoc.com/images/2020/07/18/img6.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      sizes: ["XL", "L", "M"],
      price: "450",
      qtn : 1,
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  useEffect (() => {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    if(dataCart){
      setCart(dataCart)
    }
  }, [])

  useEffect (() => {
    localStorage.setItem('dataCart', JSON.stringify(cart))
  }, [cart])

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
