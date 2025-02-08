

"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      anchorPlacement: "top-bottom",
    });

    // Hero section ke liye screen movement ko rokna
    const body = document.body;

    // Only apply to Hero section, not global pages
    const disableScroll = () => {
      body.style.overflow = "hidden"; // Disable scrolling only for Hero section
      body.style.position = "fixed";  // Prevent scroll movement only on Hero
      body.style.width = "100vw";      // Fix width of body
      body.style.height = "100vh";     // Fix height of body
    };

    // Apply the styles to disable scroll only for Hero section
    disableScroll();

    // Cleanup on component unmount
    return () => {
      body.style.overflow = "auto";  // Re-enable scrolling globally
      body.style.position = "static";  // Reset body position to default
    };
  }, []);

  return (
    <div className="bottom-sec">
      <div className="left-sec" data-aos="fade-left">
        <h1>Luxury Perfume Collection</h1>
        <p>
          Indulge in our exclusive range of luxury perfumes. From floral to
          woody, find the perfect fragrance that complements your unique style
          and personality. Elevate your senses with our premium selection.
        </p>
        <Link href="/Product">
          <button>Shop Now</button>
        </Link>
      </div>
      <div className="right-sec" data-aos="fade-right">
        <Image
          src="/images/About.jpeg"
          alt="Luxury Perfumes"
          width={450}
          height={450}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;







