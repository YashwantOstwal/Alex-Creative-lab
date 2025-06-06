"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [locale, setLocale] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((eachCookie) => eachCookie.startsWith("CAL_LOCALE="))
      ?.split("=")[1];
    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const defaultLocale = navigator.language.slice(0, 2);
      setLocale(defaultLocale);
      document.cookie = `CAL_LOCALE=${defaultLocale};`;
      router.refresh();
    }
  }, [router]);

  const handleLocale = (newLocale: string) => {
    document.cookie = `CAL_LOCALE=${newLocale};`;
    setLocale(newLocale);
    router.refresh();
  };
  return (
    <div className="py-4 gap-3 border-x border-[#cfcfcf] border-dashed px-2 flex items-center bg-[#f5f5f5cc] sticky backdrop-blur-sm top-0 w-full text-sm font-medium tracking-[-0.01em] text-[#1b1c1d]  ">
      <button
        style={{ textDecoration: locale == "en" ? "underline" : "none" }}
        className="cursor-pointer"
        onClick={() => handleLocale("en")}
      >
        English
      </button>
      <button
        style={{ textDecoration: locale == "fr" ? "underline" : "none" }}
        className="cursor-pointer"
        onClick={() => handleLocale("fr")}
      >
        French
      </button>
    </div>
  );
};

export default Navbar;
