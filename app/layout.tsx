import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import BottomNav from "./component/bottom-nav";

export const metadata: Metadata = {
  title: "CNC",
  description: "CNC test",
};

const fontPretendard = localFont({
  src: "./font/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body
        className={`${fontPretendard.className} flex justify-center bg-black min-h-screen`}
      >
        <div className="flex flex-col h-dvh w-[390px] justify-between">
          <div className="flex-1 overflow-y-scroll no-scrollbar">
            {children}
          </div>

          <footer>
            <BottomNav />
          </footer>
        </div>
      </body>
    </html>
  );
}
