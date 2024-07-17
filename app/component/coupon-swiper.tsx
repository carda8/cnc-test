"use client";

import Image from "next/image";
import { couponList } from "../constanst/mock-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function CouponSwiper() {
  return (
    <Swiper
      slidesPerView={2.2}
      freeMode={true}
      modules={[Pagination, FreeMode]}
      slidesOffsetBefore={16}
      spaceBetween={10}
      className="h-[254px] mt-[10px]"
    >
      {couponList.map((item, index) => (
        <SwiperSlide key={item.title + index}>
          <div
            key={index}
            className="bg-white border border-[#EEF1F4] rounded-[11px] overflow-hidden h-full"
          >
            <Image
              src={`coupon/${item.imageMain}.svg`}
              alt="coupon"
              width={0}
              height={125}
              className="w-full"
              priority
            />
            <div className="mx-2 mt-2">
              <div className="flex items-center">
                <Image
                  src={`coupon/${item.imageSub}.svg`}
                  width={21}
                  height={21}
                  alt=""
                />
                <p className="text-[#303441] text-[13px] font-bold ml-[5px] line-clamp-1">
                  {item.title}
                </p>
                <p className="text-[#737373] text-[13px] ml-[5px] line-clamp-1">
                  {item.sort}
                </p>
              </div>

              <p className="text-[#0066FF] text-[13px] mt-2">리뷰작성 시</p>
              <p className="text-[#303441] text-[15px] font-bold line-clamp-1">
                {item.couponTitle}
              </p>
              <p className="text-[#737373] text-[10px] mt-[5px] mb-[13px]">
                {item.expiredDate
                  ? item.expiredDate
                  : item.remainAmount + "장 남음"}
              </p>
              {item.downloaded ? (
                <button className="rounded-[4px] w-full h-[30px] bg-[#EEF1F4] flex items-center justify-center">
                  <p className="text-[#30344140] text-xs font-medium">
                    이미 받음
                  </p>
                </button>
              ) : (
                <button className="rounded-[4px] w-full h-[30px] bg-[#F0F4FF] flex items-center justify-center">
                  <Image
                    src={"icon_coupon_donwload.svg"}
                    width={16}
                    height={16}
                    alt=""
                    style={{ width: 16, height: 16 }}
                  />
                  <p className="text-[#0066FF] text-xs font-medium ml-1">
                    쿠폰 받기
                  </p>
                </button>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
