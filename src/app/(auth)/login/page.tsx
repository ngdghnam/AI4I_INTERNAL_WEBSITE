import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex bg-[#454858] text-white">
      <div className="w-[50%] flex flex-col justify-center items-center">
        <h1 className="font-bold uppercase">Đăng nhập</h1>
      </div>
      <div className="w-[50%] p-4 flex flex-col justify-center items-center">
        <Image
          src="/loginloguplogo.jpg"
          width={800}
          height={800}
          alt="Logo AI4I"
          className="rounded-md"
        ></Image>
      </div>
    </div>
  );
};

export default page;
