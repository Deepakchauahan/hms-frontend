import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/common/logo.svg";
import { ButtonCallUs } from "./Button";

export default function Header({ transparent = false }) {
  return (
    <header
      className={`header border-b-2  border-blue  py-4 max-h-[80px] flex items-center z-50 sticky top-0 left-0 z-[999] ${transparent ? "bg-transparent" : "bg-white"
        }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link href="/">
              <Image src={Logo} className="max-w-[90%]" priority />
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
