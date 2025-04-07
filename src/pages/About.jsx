import React from "react";
import team1 from "/assets/vince.jpg";

export default function About() {
  return (
    <div className="bg-clean min-h-screen py-16 px-4 text-primary">
      <div className="max-w-4xl mx-auto text-center fade-in-up">
        <h1 className="text-4xl font-bold mt-30 mb-4">About Us</h1>
        <p className="text-lg mb-10 text-justify">
          Founded by Vinceheimer Abanilla, REB REA, AV Prime Realty is a
          full-service real estate company dedicated to providing comprehensive
          and personalized solutions for clients seeking to{" "}
          <span className="font-bold text-primary">
            buy, sell, or manage properties
          </span>{" "}
          in Iloilo City. We also provide{" "}
          <span className="font-bold text-primary">titling services</span>{" "}
          ensuring smooth and efficient transfer of ownership as well as{" "}
          <span className="font-bold text-primary">appraisal services</span>{" "}
          based on thorough market analysis. Moreover, AV Prime Realty's
          reputation for reliability has earned them the confidence of prominent
          developers nationwide. With its seasoned and experienced real estate
          sales team, AV Prime Realty strives to guide its clients through every
          step with expertise, integrity, and unwavering commitment.
        </p>
      </div>

      {/* Meet the Team Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-10 fade-in-up-2">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-10 text-center">
          {/* Team Member Card */}
          <div className="bg-white/10 p-8 w-96 rounded-2xl shadow-xl backdrop-blur-sm hover:scale-105 hover:shadow-2xl hover:opacity-90 transition-all duration-300 ease-in-out fade-in-up-2">
            <div className="w-full h-82 rounded-xl mb-6 overflow-hidden">
              <img
                src={team1}
                alt="Vinceheimer Abanilla"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold">Vinceheimer C. Abanilla</h3>
            <p className="text-base">
              Licensed Real Estate Broker and Appraisor
            </p>
            <p className="text-base">
              PRC Registration No. <span className="underline">0034619</span>
            </p>
            <p className="text-base">
              DHSUD No. <span className="underline">001915</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        {/* Mission Section */}
        <div className="bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            We empower our clients to achieve their real estate goals by
            providing excellent service, expert guidance, and transparent
            transactions, fostering lasting relationships built on trust and
            mutual respect.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
            To lead the real estate industry by setting new standards of
            excellence, leveraging cutting-edge technology, and delivering
            unparalleled value to our clients.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-6xl mx-auto bg-white/10 p-6 rounded-xl shadow-md backdrop-blur-sm mt-10">
        <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
        <ul className="list-inside list-disc text-left space-y-2">
          <li>
            <strong>Integrity:</strong> We conduct our business with honesty,
            transparency, and ethical practices.
          </li>
          <li>
            <strong>Client Focus:</strong> We prioritize our clients' needs and
            strive to exceed their expectations through personalized service.
          </li>
          <li>
            <strong>Expertise:</strong> Our team comprises experienced
            professionals with in-depth knowledge of the local real estate
            market.
          </li>
          <li>
            <strong>Professionalism:</strong> We maintain the highest standards
            of professionalism in all our interactions and transactions.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace technology and innovative
            strategies to enhance our services and provide efficient solutions.
          </li>
        </ul>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-10">
        <p className="text-lg">
          AV Realty is committed to building lasting relationships with its
          clients and contributing to the growth and development of Iloilo City.
          It is a trusted partner in navigating the complexities of the real
          estate market, ensuring a seamless and successful experience.
        </p>
      </div>
    </div>
  );
}
