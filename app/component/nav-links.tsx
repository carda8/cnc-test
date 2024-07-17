"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RedDot from "./red-dot";

interface ILinks {
  name: string;
  href: string;
  icon: string;
}

const links: ILinks[] = [
  { name: "홈", href: "/", icon: "/nav/nav_home" },
  {
    name: "보낸 요청",
    href: "/request",
    icon: "/nav/nav_request",
  },
  { name: "채팅", href: "/chat", icon: "/nav/nav_chat" },
  { name: "내 정보", href: "/info", icon: "/nav/nav_info" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const navIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={"/"}
            className={`${
              pathname === link.href ? "text-[#0066FF]" : "text-[#737373]"
            } flex flex-col grow items-center justify-center bg-white`}
          >
            <div className="flex relative">
              <Image src={`${navIcon}.svg`} width={24} height={24} alt="icon" />
              {link.name === "채팅" && <RedDot />}
            </div>
            <p className="text-[10px] font-medium mt-[6px]">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
