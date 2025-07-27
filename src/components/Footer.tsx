import {
  Facebook,
  House,
  Instagram,
  Linkedin,
  Mail,
  Music2,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Footer = () => {
  return (
    <div className="w-[60%] flex justify-center text-white flex-col">
      <h1 className="uppercase font-bold text-2xl mb-4">Thông tin liên lạc</h1>
      <hr
        className="w-full"
        style={{
          border: `2px solid #ccc`,
        }}
      />
      <div className="flex mt-5 gap-5">
        <div className="w-[50%] flex flex-col gap-[16px]">
          <div className="flex">
            <div
              style={{
                border: `3px groove #ffffff20`,
                borderRadius: `50%`,
                clipPath: `circle(50%)`,
                width: `40px`,
                height: `40px`,
                position: `relative`,
              }}
            >
              <House
                style={{
                  position: `absolute`,
                  top: `0`,
                  left: `0`,
                  right: `0`,
                  bottom: `0`,
                  margin: `auto`,
                }}
              />
            </div>

            <p className="shrink-[15] ml-3 font-light text-xl">
              Đại học Kinh tế - Luật, ĐHQG-HCM Số 669 Quốc lộ 1, Linh Xuân, Thủ
              Đức TP. Hồ Chí Minh, Việt Nam
            </p>
          </div>
          <div className="flex items-center">
            <div
              style={{
                border: `3px groove #ffffff20`,
                borderRadius: `50%`,
                clipPath: `circle(50%)`,
                width: `40px`,
                height: `40px`,
                position: `relative`,
              }}
            >
              <Mail
                style={{
                  position: `absolute`,
                  top: `0`,
                  left: `0`,
                  right: `0`,
                  bottom: `0`,
                  margin: `auto`,
                }}
              />
            </div>

            <a
              href="mailto:ai4iclub@st.uel.edu.vn"
              className="shrink-[15] ml-3 font-light text-xl"
            >
              ai4iclub@st.uel.edu.vn
            </a>
          </div>
        </div>
        <div className="w-[50%]">
          <h1 className="font-bold text-xl uppercase">Tìm AI4I trên</h1>
          <ul className="flex justify-between mt-7 items-center">
            <li>
              <Tooltip>
                <TooltipTrigger>
                  <a href="https://www.facebook.com/AI4IC" target="blank">
                    <Facebook
                      style={{
                        width: `32px`,
                        height: `32px`,
                      }}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Facebook</TooltipContent>
              </Tooltip>
            </li>
            <li>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="https://www.tiktok.com/@ai4i.club?lang=en"
                    target="blank"
                  >
                    <Music2
                      style={{
                        width: `32px`,
                        height: `32px`,
                      }}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Tiktok</TooltipContent>
              </Tooltip>
            </li>
            <li>
              <Tooltip>
                <TooltipTrigger>
                  <a href="https://www.instagram.com/ai4i.club/" target="blank">
                    <Instagram
                      style={{
                        width: `32px`,
                        height: `32px`,
                      }}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Instagram</TooltipContent>
              </Tooltip>
            </li>
            <li>
              <Tooltip>
                <TooltipTrigger>
                  <a href="https://www.youtube.com/@AI4IClub" target="blank">
                    <Youtube
                      style={{
                        width: `32px`,
                        height: `32px`,
                      }}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Youtube</TooltipContent>
              </Tooltip>
            </li>
            <li>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href="https://www.linkedin.com/company/ai4ic/"
                    target="blank"
                  >
                    <Linkedin
                      style={{
                        width: `32px`,
                        height: `32px`,
                      }}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-6 font-light opacity-50"> &#169; AI4I 2025</p>
    </div>
  );
};

export default Footer;
