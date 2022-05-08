import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import userImage from "@/public/Avalen.jpg";
import NextImage from "next/image";

type Props = {};

const TestimonialComponent: React.FC<Props> = ({}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      aria-labelledby="testimonial-heading"
      className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:py-20 lg:px-8"
    >
      <h2 className="text-5xl font-extrabold text-center tracking-tight text-gray-900 pb-10">
        Our Customer Reviews
      </h2>
      <Slider {...settings}>
        <div className="h-auto lg:h-96 border drop-shadow-lg rounded-2xl overflow-hidden !flex flex-col lg:flex-row">
          <div className="lg:w-2/3 bg-orange-500 text-white px-8 lg:px-24 py-6 lg:py-12">
            <div className="text-white !flex flex-row space-x-1 text-3xl pb-10">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9734;</span>
            </div>

            <p className="text-lg font-medium tracking-wide break-all">
              Hi , I'm Santhiya Natarajan, I had a plan to publish my book but
              unfortunately i had no idea about it, This team (Bookation) was
              awesome where they helped me to build up ideas in soft and polite
              manner. Finally I have published my book successfully without any
              queries. Kudos and Thank you so much team for entire team.
            </p>

            <div className="pt-10 lg:pt-16">
              <h3 className="text-2xl font-bold pb-0"> </h3>
              <span className="text-lg font-normal">Santhiya Nataraja</span>
            </div>
          </div>
          <div className="h-80 lg:h-auto lg:w-2/6 bg-white">
            <NextImage
              src="/customers/santhiya2.jpeg"
              alt=""
              loading="lazy"
              layout="responsive"
              height={80}
              width={80}
            />
          </div>
        </div>
        {/* <div className="h-auto lg:h-96 border drop-shadow-lg rounded-2xl overflow-hidden !flex flex-col lg:flex-row">
          <div className="lg:w-2/3 bg-orange-500 text-white px-8 lg:px-24 py-6 lg:py-12">
            <div className="text-white !flex flex-row space-x-1 text-3xl pb-10">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9734;</span>
            </div>

            <p className="text-lg font-medium tracking-wide break-all">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              rerum tempore nisi nobis. Quis, soluta pariatur earum iste maiores
              nesciunt. Unde dolorem atque minima eveniet!
            </p>

            <div className="pt-10 lg:pt-16">
              <h3 className="text-2xl font-bold pb-0"> Gopi Krishnan</h3>
              <span className="text-lg font-normal">
                Software Developer, Edvoy
              </span>
            </div>
          </div>
          <div className="h-80 lg:h-auto lg:w-2/6 bg-white">
            <NextImage
              src={userImage}
              alt=""
              layout="responsive"
              loading="lazy"
            />
          </div>
        </div>
        <div className="h-auto lg:h-96 border drop-shadow-lg rounded-2xl overflow-hidden !flex flex-col lg:flex-row">
          <div className="lg:w-2/3 bg-orange-500 text-white px-8 lg:px-24 py-6 lg:py-12">
            <div className="text-white !flex flex-row space-x-1 text-3xl pb-10">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9734;</span>
            </div>

            <p className="text-lg font-medium tracking-wide break-all">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              rerum tempore nisi nobis. Quis, soluta pariatur earum iste maiores
              nesciunt. Unde dolorem atque minima eveniet!
            </p>

            <div className="pt-10 lg:pt-16">
              <h3 className="text-2xl font-bold pb-0"> Gopi Krishnan</h3>
              <span className="text-lg font-normal">
                Software Developer, Edvoy
              </span>
            </div>
          </div>
          <div className="h-80 lg:h-auto lg:w-2/6 bg-white">
            <NextImage
              src={userImage}
              alt=""
              layout="responsive"
              loading="lazy"
            />
          </div>
        </div> */}
      </Slider>
    </section>
  );
};

export default TestimonialComponent;
