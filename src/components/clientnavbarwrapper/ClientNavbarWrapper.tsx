"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "../navbar";

export default function ClientNavbarWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {isHome && <Navbar />}
      <div style={{ paddingTop: isHome ? "64px" : 0 }}>{children}</div>
    </>
  );
}
