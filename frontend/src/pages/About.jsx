import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to MediLink, your trusted healthcare companion designed to
            transform the way you access and manage medical services. MediLink
            simplifies your healthcare journey by connecting you with top-rated
            doctors across various specialties, offering a seamless platform for
            scheduling appointments, managing health records, and accessing
            personalized care insights. Whether you're booking your first
            consultation or managing long-term health needs, MediLink empowers
            you with the tools and support to make informed decisions
            effortlessly.
          </p>
          <p>
            At MediLink, we are committed to bridging the gap between innovative
            technology and compassionate healthcare. Our user-friendly interface
            ensures that every interaction is intuitive and efficient, from
            filtering doctors by expertise to secure payment processing and
            appointment reminders. With a focus on trust, convenience, and
            personalization, MediLink redefines healthcare access, putting your
            well-being at the forefront of everything we do.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at MediLink is to create a unified platform that
            reimagines the healthcare experience, making it accessible,
            reliable, and inclusive for everyone. We strive to connect patients
            with trusted medical professionals while fostering better health
            outcomes through timely care and innovative solutions. By leveraging
            technology and prioritizing user needs, MediLink aspires to be a
            catalyst for building healthier communities and a brighter,
            healthier future.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Experience a cutting-edge platform designed to make healthcare more
            accessible and efficient.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>TRUSTED NETWORK: </b>
          <p>
            Connect with a curated network of certified doctors, handpicked for
            their expertise and patient care.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>24/7 SUPPORT: </b>
          <p>
            Our dedicated support team ensures you're never alone in your
            healthcare journey, any time of the day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
