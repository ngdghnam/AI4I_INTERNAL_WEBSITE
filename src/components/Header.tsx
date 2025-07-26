import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Header = () => {
  return (
    <div
      className="flex justify-between w-full items-center text-white px-4 py-2"
      style={{
        position: "fixed",
        background: "inherit",
        zIndex: `100`,
      }}
    >
      <Image
        src="/LogoAI4Ismall.png"
        alt="Logo AI4I"
        width={40}
        height={40}
      ></Image>
      <ul className="flex gap-6 items-center">
        <li>
          <Link className="underline route-btn" href="/login">
            Đăng nhập
          </Link>
        </li>
        <li>
          <Link href="/register" className="underline route-btn">
            Đăng ký
          </Link>
        </li>
        <li>
          <Link href="/faq" className="underline route-btn">
            FAQ
          </Link>
        </li>
        <li>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Langs"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EN">EN</SelectItem>
              <SelectItem value="VI">VI</SelectItem>
              <SelectItem value="FR">FR</SelectItem>
            </SelectContent>
          </Select>
        </li>
      </ul>
    </div>
  );
};

export default Header;
