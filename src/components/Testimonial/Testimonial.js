import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Testimonial.css";
import { Pagination, Autoplay } from "swiper/modules";

const testimonialData = [
  {
    id: 1,
    name: "Anonymous 1",
    description:
      "The service was exceptional, exceeding my expectations in every way.",
    img: `${process.env.PUBLIC_URL}/assets/t4.png`,
  },
  {
    id: 2,
    name: "Anonymous 2",
    description:
      "Highly recommend this service to anyone seeking quality and excellence.",
    img: `${process.env.PUBLIC_URL}/assets/t2.png`,
  },
  {
    id: 3,
    name: "Anonymous 3",
    description:
      "Received excellent support, always prompt and incredibly helpful.",
    img: `${process.env.PUBLIC_URL}/assets/t1.png`,
  },
  {
    id: 4,
    name: "Anonymous 4",
    description: "Great attention to detail and overall quality. Thank you",
    img: `${process.env.PUBLIC_URL}/assets/t3.png`,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">Clients Feedback</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        {testimonialData.map((testimonial) => {
          const { id, name, description, img } = testimonial;
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={img} alt={`${name} IMG`} className="testimonial__img" />
              <h3 className="testimonial__name">{name}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
