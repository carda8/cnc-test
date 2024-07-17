"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/banner-swiper-style.css";

export default function BannserSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1.15}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
          type: "custom",
          renderCustom(swiper, current, total) {
            return (
              "<sapn class='custom'>" +
              '<span class="custom-current">' +
              current +
              "</span>" +
              "/" +
              "<span class='custom-total'>" +
              total +
              "</span>" +
              "<img src='/icon_arrow_pagenation.svg' class='custom-img'>" +
              "</span>"
            );
          },
        }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="justify-center items-center text-center">
          <Image
            src="/banner/banner.svg"
            alt="logo"
            width={0}
            height={0}
            className="w-full h-auto"
            priority
          />
        </SwiperSlide>
        <SwiperSlide className="justify-center items-center text-center">
          <Image
            src="/banner/banner.svg"
            alt="logo"
            width={0}
            height={125}
            className="w-full h-auto"
            priority
          />
        </SwiperSlide>
        <SwiperSlide className="justify-center items-center text-center">
          <Image
            src="/banner/banner.svg"
            alt="logo"
            width={0}
            height={125}
            className="w-full h-auto"
            priority
          />
        </SwiperSlide>
        <SwiperSlide className="justify-center items-center text-center">
          <Image
            src="/banner/banner.svg"
            alt="logo"
            width={0}
            height={125}
            className="w-full h-auto"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
