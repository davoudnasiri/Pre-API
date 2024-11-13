"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="p-4 flex items-center justify-center gap-2">
      <Link
        href="/"
        className={`px-2 py-1 border-transparent  border-b-2 hover:border-gray-800 text-gray-600 hover:text-gray-900 transition-all ${
          pathname === "/" && "!text-gray-900"
        }`}
      >
        Home
      </Link>
      <Link
        href="/form"
        className={`px-2 py-1 border-transparent  border-b-2 hover:border-gray-800 text-gray-600 hover:text-gray-900 transition-all ${
          pathname === "/form" && " !text-gray-900"
        }`}
      >
        Form
      </Link>
    </div>
  );
}
