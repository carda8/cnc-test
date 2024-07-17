"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { latestNews } from "../constanst/mock-data";
import "../styles/store-swiper-style.css";

export default function StoreSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={25}
        pagination={{
          el: ".swiper-custom-pagination",
        }}
        modules={[Pagination]}
        slidesOffsetAfter={20}
        slidesOffsetBefore={16}
        className="mt-[20px]"
      >
        {latestNews.map((item, index) => (
          <SwiperSlide key={item.title + index}>
            <div className="grid grid-rows-3 gap-5">
              {latestNews.map((itemSub, indexSub) => (
                <div key={itemSub.subTitle + index} className="flex w-[358px]">
                  <div className="w-[108px] h-[108px]  rounded-[11px] overflow-hidden">
                    <Image
                      src={`/store/${itemSub.image}.svg`}
                      width={108}
                      height={108}
                      alt="Image"
                    />
                  </div>

                  <div className="flex-1 ml-3">
                    <div className="flex items-center">
                      <p className=" text-[#303441] text-[15px]">
                        {itemSub.title}
                      </p>
                      <p className="text-[#737373] text-xs ml-[3px]">
                        {itemSub.sort}
                      </p>
                    </div>
                    <p className="line-clamp-1 text-[#303441] font-bold text-[16px]">
                      {itemSub.subTitle}
                    </p>
                    <p className="line-clamp-1 text-[#303441] text-[15px]">
                      {itemSub.disc}
                    </p>
                    <p className="text-sm text-[#737373]">
                      {itemSub.updateTime}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-custom-pagination flex justify-center pt-5 pb-[54px]" />
    </>
  );
}
