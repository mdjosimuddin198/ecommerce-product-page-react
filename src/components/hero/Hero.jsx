import React, { useState } from "react";
import thumbnail1 from "../../assets/images/image-product-1.jpg";
import thumbnail2 from "../../assets/images/image-product-2.jpg";
import thumbnail3 from "../../assets/images/image-product-3.jpg";
import thumbnail4 from "../../assets/images/image-product-4.jpg";

const Hero = () => {
  const products = [
    {
      id: 1,
      title:
        "Stylish Running Sports Sneakers Casual Lace-Up Shoes For Winter And Summer",
      description:
        "Stylish Running Sports Sneakers Casual Lace-Up Shoes For Winter And Summer - Stay Fashionable And Comfortable Year-Round With These Men's Shoes",
      type: "Shoe",
      model: "adidas",
      price: 4000,
      oldPrice: 5000,
      images: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
    },
  ];

  const [mainImage, setMainImage] = useState(products[0].images[0]);
  const [quantity, setQuantity] = useState(1);
  const handleIncresePrice = () => setQuantity((prv) => prv + 1);
  const handleDecresePrice = () => setQuantity((prv) => Math.max(1, prv - 1));
  const price = 4000;
  const totalPrice = quantity * price;
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isExist = cart.find((item) => item.id === product.id);
    if (isExist) {
      isExist.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div>
      <div className="py-2">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-6 bg-white shadow-lg rounded-2xl mb-10 p-4">
          {/* ===== Left: Image Gallery ===== */}
          <div className="flex flex-col-reverse">
            <div className="flex  ">
              {products[0].images?.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={` relative m-3 rounded-lg cursor-pointer overflow-hidden border transition ${
                    mainImage === img
                      ? "border-secondary ring-2 ring-secondary"
                      : "border-gray-300 hover:border-secondary"
                  }`}
                >
                  <img
                    src={img}
                    // alt={`thumb-${idx}`}

                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative bg-gray-100  border-2 rounded-xl overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
              {mainImage && (
                <img
                  src={mainImage}
                  //   alt={product.title}

                  className={`object-cover transition duration-300 `}
                />
              )}
            </div>
          </div>

          {/* ===== Right: Product Info ===== */}
          <div>
            <h2 className="text-3xl font-semibold mb-2">{products.title}</h2>

            {/* Price */}
            <div className="flex items-center gap-3 mt-3">
              <span className="line-through text-gray-400 text-lg">$5000</span>
              <span className="text-3xl font-bold text-secondary">
                ${price}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-3 leading-relaxed text-sm">
              Stylish Running Sports Sneakers Casual Lace-Up Shoes For Winter
              And Summer - Stay Fashionable And Comfortable Year-Round With
              These Men'S Shoes
            </p>

            {/* Type & Model */}
            <div className="mt-4 text-sm">
              <p>
                <span className="font-medium">Type:</span> Shoe
              </p>
              <p>
                <span className="font-medium">Model:</span> adidas
              </p>
            </div>

            {/* Total Price */}
            <div className="mt-5 text-lg font-semibold">
              Total Price: <span className="text-secondary">${totalPrice}</span>
            </div>

            {/* Quantity + Buy Now */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button
                  className="btn btn-primary"
                  onClick={handleDecresePrice}
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  className="btn btn-primary"
                  onClick={handleIncresePrice}
                >
                  +
                </button>
              </div>

              <button className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
