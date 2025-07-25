import LeftHaftTriangle from "@/components/LeftHaftTriangle";
import RightHaftTriangle from "@/components/RightHaftTriangle";
import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <>
      <div
        className="w-full h-[514px] relative"
        style={{
          backgroundImage: `url(/bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div
          className="absolute bottom-0 left-0 top-0 right-0 w-full h-full m-auto flex justify-center items-center gap-1 text-white"
          style={{
            backgroundColor: `rgba(46, 49, 65, 0.8)`,
          }}
        >
          {/* <Image></Image> */}
          <div
            style={{
              backgroundImage: `url(/LogoAI4I-White.png)`,
              width: "105px",
              height: "105px",
            }}
          ></div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold uppercase text-[40px]">AI4I CLUB</h1>
            <hr />
            <p className="uppercase font-light text-[18px]">
              Artificial Intelligence for Interdisciplinarity Club
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "144px",
          position: "relative",
          backgroundColor: "#24A8F3",
        }}
      >
        <LeftHaftTriangle
          style={{
            width: `100%`,
            height: `144px`,
            backgroundColor: "rgba(51, 51, 51, 1)",
            clipPath: "polygon(0 0, 100% 0, 0 100%, 0 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 0 100%, 0 100%)",
            backgroundPosition: "50% 88%",
            backgroundImage: `url(/bg.jpg)`,
            backgroundSize: `cover`,
            position: `absolute`,
          }}
        >
          <div
            className="absolute bottom-0 left-0 top-0 right-0 w-full h-full m-auto flex justify-center items-center gap-1 text-white"
            style={{
              backgroundColor: `rgba(46, 49, 65, 0.8)`,
            }}
          ></div>
        </LeftHaftTriangle>

        <RightHaftTriangle
          style={{
            width: `100%`,
            height: `144px`,
            backgroundColor: "#24A8F3",
            clipPath: "polygon(100% 0, 100% 100%, 100% 100%, 0% 100%)",
            WebkitClipPath: "polygon(100% 0, 100% 100%, 100% 100%, 0% 100%)",
            position: `absolute`,
          }}
        ></RightHaftTriangle>
      </div>
      <div className="w-full h-[514px] text-white bg-[#24A8F3] flex justify-end items-center gap-1 px-2">
        <div
          style={{
            width: "384px",
            height: "384px",
            clipPath: "circle(50%)",
            backgroundColor: "#333",
          }}
        ></div>
      </div>
    </>
  );
};

export default Welcome;
