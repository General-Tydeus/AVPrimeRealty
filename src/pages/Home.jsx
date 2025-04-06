import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import PropertyCard from "../components/PropertyCard";
import Jumbotron from "../components/Jumbotron";
import Apartment from "../assets/apartment.jpg";
import House from "../assets/house.jpg";
import Condo from "../assets/condo.jpg";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const properties = [
    {
      img: Apartment,
      name: "Stylish Apartment Living Made Easy",
      description:
        "Enjoy flexible, low-maintenance city living with key amenities and prime access to everything you need. Ideal for students, professionals, and anyone on the go.",
    },
    {
      img: Condo,
      name: "Experience Modern Living in Your Own Condo",
      description:
        "Own your space and enjoy modern living with premium amenities like a pool, gym, and 24/7 security. Perfect for professionals and families seeking comfort, convenience, and a vibrant community.",
    },
    {
      img: House,
      name: "Welcome to Your Dream Home",
      description:
        "Experience the freedom of spacious living with your own house—perfect for growing families or those who value privacy, comfort, and long-term investment. Enjoy a private yard, multiple rooms, and the space to truly make it your own.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Track scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* The carousel section with parallax */}
      <div className="w-full bg-clean relative overflow-hidden">
        <div
          className="transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`, // Parallax Effect
          }}
        >
          <Carousel />
        </div>
      </div>

      {/* PropertyCard below the carousel */}
      <div className="relative mt-8 flex flex-wrap gap-4 justify-center">
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            img={property.img}
            name={property.name}
            description={property.description}
          />
        ))}
      </div>
    </div>
  );
}
