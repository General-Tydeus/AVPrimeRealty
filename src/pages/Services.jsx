import React from "react";
import img1 from "/public/assets/1.png";
import Apartment from "/assets/apartment.jpg";
import House from "/assets/house.jpg";
import Condo from "/assets/condo.jpg";
export default function Services() {
  const services = [
    {
      id: 1,
      title: "Property Purchase and Selling",
      description: (
        <div>
          AV Prime Realty offers a wide range of residential and commercial
          properties in Iloilo, catering to diverse client needs and budgets.
          <ul className="list-disc pl-6 mt-2">
            <li>
              Our experienced real estate team leverages their market knowledge
              and negotiation skills to ensure optimal outcomes for both buyers
              and sellers.
            </li>
            <li>
              We utilize cutting-edge marketing strategies to maximize property
              exposure and attract qualified buyers.
            </li>
          </ul>
        </div>
      ),
      image: { Apartment }, // Add an appropriate image for this service
    },

    {
      id: 2,
      title: "Property Titling",
      description: (
        <div>
          AV Prime Realty comprehensive assistance with property titling
          processes, ensuring smooth and efficient transfer of ownership.
          <ul className="list-disc pl-6 mt-2">
            <li>
              Our team is well-versed in local regulations and procedures,
              minimizing delays and mitigating potential complications.
            </li>
            <li>
              We offer expert guidance on legal documentation and due diligence,
              safeguarding our clients' interests.
            </li>
          </ul>
        </div>
      ),
      image: { Apartment }, // Add an appropriate image for this service
    },
    {
      id: 3,
      title: "Property Appraisals",
      description: (
        <div>
          AV Prime Realty offers accurate and reliable property appraisals
          conducted by certified professionals.
          <ul className="list-disc pl-6 mt-2">
            <li>
              Our appraisals are based on thorough market analysis and
              comprehensive property evaluations, providing clients with
              realistic and objective valuations.
            </li>
            <li>
              We provide appraisals for various purposes, including sales,
              financing, and insurance.
            </li>
          </ul>
        </div>
      ),
      image: { Apartment }, // Add an appropriate image for this service
    },
  ];

  return (
    <div className="bg-clean min-h-screen py-16 px-4 text-primary fade-in-up">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div className="max-w-7xl mx-auto flex justify-center items-center flex-wrap">
        {services.map((service) => (
          <a
            key={service.id}
            href="/contact"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-4xl lg:max-w-5xl xl:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-4 mb-8"
          >
            <img
              src={service.image}
              className="w-full h-48 md:w-64 md:h-64 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            />
            <div className="p-4 ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {service.title}
              </h5>
              <div className="mb-3 text-gray-700 dark:text-gray-400">
                {service.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
