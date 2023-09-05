import React, { useState } from "react";
import Cart from "./Cart";

export default function ProductList() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  // const products=JSON.parse(localStorage.getItem("product-list"))||[];

  // const addToCartHandler = (products) => {
  //   setCart([...cart, products]);
  // };
  const addToCartHandler = (product) => {
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa

 const productList= JSON.parse(localStorage.getItem('cart'))||[];
 localStorage.setItem('cart', JSON.stringify([...productList,product]))
 alert("them thanh cong")
} ;

  const handleShow = () => {
    setShow(true);
  };
  const handleclose = () => {
    setShow(false);
  };



  const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      quantity:100,
      price: '35',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Basdsssfic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      quantity:100,
      price: '35',
      color: 'Black',
    },
    {
      id: 3,
      name: 'Basiccccc Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      quantity:100,
      price: '35',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Basic Teeccccc',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      quantity:100,
      price: '35',
      color: 'Black',
    },

  ]
  

  // localStorage.setItem("product-list", JSON.stringify(products));
  return (
    <div>
      {show ? <Cart handleclose={handleclose} cart={cart}  /> : <></>}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div>
            <svg
              style={{ cursor: "pointer" }}
              onClick={handleShow}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" style={{display:"none"}}/>
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <button className="addcart"
                  onClick={() => addToCartHandler(product)}
                >
                  Add Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
