// components/Header.js
import Link from "next/link";
import Image from "next/image";
import { Album, Boxes, Film, Gamepad2, Star } from "lucide-react";

const Header = () => {
  const navLinks = [
    { name: "Games", href: "#", icon: <Gamepad2 /> },
    { name: "Apps", href: "/", icon: <Boxes /> },
    { name: "Movies", href: "#", icon: <Film /> },
    { name: "Books", href: "#", icon: <Album /> },
    { name: "Kids", href: "#", icon: <Star /> },
  ];

  return (
    <header className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex justify-start gap-2 items-center py-[12px] ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  width={75}
                  height={75}
                  src="/google-play.png"
                  alt="Logo"
                  className="h-[35px] w-[35px]"
                />
              </Link>
            </div>
            <h1 className=" text-[22px] font-medium text-gray-600 ml-2">
              Google Play
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium ${
                    "Apps" === link.name
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-500 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <Image
              width={50}
              height={50}
              src="/logo_avatar.webp"
              alt="avatar"
              className="h-8 w-8"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}

      <div className="md:hidden fixed w-full bg-white bottom-0 right-0">
        <div className="p-[6px] flex items-center gap-2 justify-between border-t border-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 text-xs grid place-items-center ${
                "Apps" === link.name
                  ? "text-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
