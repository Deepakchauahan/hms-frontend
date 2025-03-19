import Link from "next/link";
import React from "react";
import Logo from "../../public/common/logo.svg";
import Image from "next/image";
import { ButtonCallUs } from "./Button";

export default function Header({ transparent = false }) {
  return (
    <header
      className={`header border-b-2  border-blue  py-4 max-h-[80px] flex items-center z-50 relative ${
        transparent ? "bg-transparent" : "bg"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link href="/">
              <Image src={Logo} className="max-w-[90%]"/>
            </Link>
          </div>
          <nav className="nav list-none flex gap-10 items-center">
            {Array.from(Array(5)).map((i) => (
              <li key={i}>
                <Link href="#!" >Home</Link>
              </li>
            ))}
          </nav>
          <ButtonCallUs />
        </div>
      </div>
    </header>
  );
}
