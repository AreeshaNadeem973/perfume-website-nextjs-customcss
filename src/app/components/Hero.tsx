// "use client";

// import React, { useEffect } from "react";
// import "aos/dist/aos.css";
// import AOS from "aos";
// import Link from "next/link";
// import Image from "next/image";

// const Hero = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); 
//   }, []);

//   return (
//     <div id="/" className="bottom-sec">
//       <div className="left-sec" data-aos="fade-left">
//         <h1>Ultimate Fitness Smart Watch</h1>
//         <p>
//           Stay connected and track your fitness with the Ultimate Fitness Smart Watch.
//           With real-time heart rate monitoring, step tracking, and notifications at your wrist,
//           it&apos;s the perfect companion for your active lifestyle.
//         </p>
//         <Link href="#products">
//           <button>Order Now</button>
//         </Link>
//         <div className="down-btn">
//           <div className="under-btn"></div>
//         </div>
//       </div>
//       <div className="right-sec" data-aos="fade-right">
//         <Image
//           src="/images/About.jpeg"
//           alt="Smart Watches"
//           width={500} 
//           height={500} 
//           priority 
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;





























"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="/" className="bottom-sec">
      <div className="left-sec" data-aos="fade-left">
        <h1>Luxury Perfume Collection</h1>
        <p>
          Indulge in our exclusive range of luxury perfumes. From floral to woody, 
          find the perfect fragrance that complements your unique style and personality. 
          Elevate your senses with our premium selection.
        </p>
        <Link href="#products">
          <button>Shop Now</button>
        </Link>
        <div className="down-btn">
          <div className="under-btn"></div>
        </div>
      </div>
      <div className="right-sec" data-aos="fade-right">
        <Image
          src="/images/About.jpeg" // Update image path for perfume
          alt="Luxury Perfumes"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
