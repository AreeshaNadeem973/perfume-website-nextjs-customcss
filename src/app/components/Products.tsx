
// "use client";

// import React, { useEffect } from "react";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Products = () => {
//   const perfumes = [
//     {
//       name: "Chanel No. 5",
//       description: "A timeless floral fragrance with a luxurious touch.",
//       price: "$150",
//       image: "/images/chanel.jpeg",
//     },
//     {
//       name: "Dior Sauvage",
//       description: "A bold, fresh scent inspired by wild landscapes.",
//       price: "$135",
//       image: "/images/dior.png",
//     },
//     {
//       name: "Tom Ford Black Orchid",
//       description: "An opulent, sensual fragrance with dark accords.",
//       price: "$180",
//       image: "/images/tomford.png",
//     },
//     {
//       name: "Versace Eros",
//       description: "A masculine fragrance with hints of mint and vanilla.",
//       price: "$120",
//       image: "/images/versace.png",
//     },
//     {
//       name: "Armani Code",
//       description: "A sophisticated scent blending citrus and woody notes.",
//       price: "$140",
//       image: "/images/armani.png",
//     },
//     {
//       name: "Gucci Bloom",
//       description: "A delicate and elegant floral fragrance.",
//       price: "$130",
//       image: "/images/perfumes1.jpeg",
//     },
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div id="perfumes">
//       <div id="products" className="content">
//         <h1 className="heading" data-aos="fade-up">
//           Discover Our Exclusive Perfume Collection
//         </h1>
//         <div className="grid">
//           {perfumes.map((perfume, index) => (
//             <div key={index} className="card" data-aos="fade-up">
//               <Image
//                 src={perfume.image}
//                 alt={perfume.name}
//                 width={200}
//                 height={250}
//                 className="image"
//                 unoptimized={true}
//               />
//               <h2 className="perfumeName">{perfume.name}</h2>
//               <p className="description">{perfume.description}</p>
//               <p className="price">{perfume.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;






