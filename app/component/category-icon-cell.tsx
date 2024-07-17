import Image from "next/image";

interface ICategoryIconCell {
  iconName: string;
  title: string;
}

export default function CategoryIconCell({
  iconName,
  title,
}: ICategoryIconCell) {
  return (
    <button className="flex flex-col h-[91px] items-center justify-center">
      <Image
        src={`/category/${iconName}.svg`}
        alt="icon"
        width={48}
        height={48}
        priority
        className="w-[48px] h-[48px]"
      />
      <p className="mt-[10px] text-sm">{title}</p>
    </button>
  );
}
