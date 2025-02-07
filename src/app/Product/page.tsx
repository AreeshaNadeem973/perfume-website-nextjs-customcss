"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const perfumes = [
    {
      name: "Chanel",
      description: "Classic and timeless fragrance",
      price: "$150",
      image: "/images/chanel.jpeg",
    },
    {
      name: "Gucci Bloom",
      description: "Floral and elegant aroma",
      price: "$135",
      image: "/images/dior.png",
    },
    {
      name: "Tom Ford Noir",
      description: "Mysterious and intense scent",
      price: "$180",
      image: "/images/tomford.png",
    },
    {
      name: "Versace Eros",
      description: "Bold and passionate fragrance",

      price: "$120",
      image: "/images/versace.png",
    },
    {
      name: "Armani Code",
      description: "Sophisticated and seductive aroma",
      price: "$140",
      image: "/images/armani.png",
    },
    {
      name: "Gucci Bloom",
      description: "Floral and elegant aroma",
      price: "$130",
      image: "/images/Perfumes1.jpeg",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="perfumes">
      <div id="products" className="content">
        <h1 className="heading" data-aos="fade-up">
          Discover Our Exclusive Perfume Collection
        </h1>
        <div className="grid">
          {perfumes.map((perfume, index) => (
            <div key={index} className="card" data-aos="fade-up">
              <Image
                src={perfume.image}
                alt={perfume.name}
                width={200}
                height={250}
                className="image"
                unoptimized={true}
              />
              <h2 className="perfumeName">{perfume.name}</h2>
              <p className="description">{perfume.description}</p>
              <p className="price">{perfume.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
