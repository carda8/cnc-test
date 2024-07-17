import Image from "next/image";
import { categoryList, couponList } from "./constanst/mock-data";
import StoreSwiper from "./component/store-swiper";
import SectionTitle from "./component/section-title";
import BannserSwiper from "./component/banner-swiper";
import CategoryIconCell from "./component/category-icon-cell";
import CouponSwiper from "./component/coupon-swiper";

export default function Home() {
  return (
    <main className="bg-white items-center ">
      <div className="px-4">
        {/* 최상단 메뉴 */}
        <div className="flex justify-between items-center h-14">
          <Image
            src="/logo.svg"
            alt="logo"
            width={48}
            height={25}
            priority
            className="w-[48px] h-[25px]"
          />
          <div className="flex items-center">
            <p className="font-medium">부산</p>
            <Image
              src="/icon_arrow_bottom.svg"
              alt="icon_arrow_bottom"
              width={18}
              height={18}
              className="w-[18px] h-[18px]"
              priority
            />
          </div>
          <Image
            src="/icon_bell.svg"
            alt="icon_bell"
            width={27}
            height={24}
            className="w-[27px] h-[24px]"
            priority
          />
        </div>

        {/* 검색창 */}
        <div className="rounded-[6px] h-[50px] p-px bg-gradient-to-r from-[#2257DF] to-[#0066FF] items-center mt-5">
          <div className="bg-white h-[48px] rounded-[5px] flex items-center px-4">
            <Image src={"icon_search.svg"} width={24} height={24} alt="" />
            <input
              className="ml-[6px] placeholder:text-[#30344180] outline-none"
              placeholder="쿠폰과 견적은 차자스!"
            />
          </div>
        </div>

        {/* 카테고리 메뉴 */}
        <div className="grid grid-cols-4 gap-y-[10px] gap-x-[12.6px] mt-9 mb-[34px]">
          {categoryList.map((item, index) => (
            <CategoryIconCell
              key={item.title + index}
              iconName={item.iconName}
              title={item.title}
            />
          ))}
        </div>
      </div>

      {/* 광고 배너 섹션 */}
      <BannserSwiper />

      {/* 인기 쿠폰 섹션 */}
      <SectionTitle title="인기 쿠폰" />
      <CouponSwiper />

      {/* 최근 업체 소식 섹션 */}
      <SectionTitle title="최근 업체 소식" />
      <StoreSwiper />
    </main>
  );
}
