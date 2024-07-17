import Image from "next/image";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className={`px-4 mt-[36px]`}>
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="flex items-center">
          <button>
            <p className="font-medium text-[15px] text-[#30344180]">더보기</p>
          </button>
          <Image
            src="/icon_arrow.svg"
            alt="icon_bell"
            width={18}
            height={18}
            className="w-[18px] h-[18px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
