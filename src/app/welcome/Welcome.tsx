import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeftHaftTriangle from "@/components/LeftHaftTriangle";
import RightHaftTriangle from "@/components/RightHaftTriangle";
import { Button } from "@/components/ui/button";
import WelcomeCard from "@/components/WelcomeCard";
import { CircleArrowRight, CircleChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <>
      <Header></Header>
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
      <div className="w-full h-[514px] text-white bg-[#24A8F3] flex justify-end items-center gap-[16px] px-8">
        <div className="text-end w-[50%] tracking-normal text-sm/7 px-2">
          <h1 className="font-bold uppercase text-2xl mb-2">
            Cuộc thi AI in Business
          </h1>
          <hr />
          <p>
            Cuộc thi “Trí tuệ nhân tạo trong kinh doanh” là cuộc thi do Câu lạc
            bộ Nghiên cứu trí tuệ nhân tạo và ứng dụng liên ngành (AI4I) - Câu
            lạc bộ học thuật trực thuộc Đoàn Khoa Hệ Thống Thông Tin, Trường Đại
            học Kinh tế - Luật, ĐHQG-HCM tổ chức với mong muốn tạo sân chơi bổ
            ích cho các bạn sinh viên để nâng cao hiểu biết về các kiến thức
            công nghệ nói chung và Trí tuệ nhân tạo nói riêng trong doanh
            nghiệp.
          </p>
          <Button
            variant="link"
            className="text-white uppercase mt-2 cursor-pointer"
          >
            <CircleChevronRight />
            <p className="text-[18px]">Tìm hiểu thêm</p>
          </Button>
        </div>
        <div
          style={{
            width: "384px",
            height: "384px",
            clipPath: "circle(50%)",
            backgroundImage: `url(/aib2.jpg)`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></div>
      </div>
      <div
        style={{
          width: "100%",
          height: "144px",
          position: "relative",
          backgroundColor: "#24A8F3",
        }}
      >
        <RightHaftTriangle
          style={{
            width: `100%`,
            height: `144px`,
            clipPath: "polygon(100% 100%, 100% 0, 0 0)",
            WebkitClipPath: "polygon(100% 100%, 100% 0, 0 0)",
            position: `absolute`,
            backgroundColor: "#24A8F3",
          }}
        ></RightHaftTriangle>
        <LeftHaftTriangle
          style={{
            width: `100%`,
            height: `144px`,
            clipPath: "polygon(100% 100%, 0 100%, 0 0)",
            WebkitClipPath: "polygon(100% 100%, 0 100%, 0 0)",
            position: `absolute`,
            backgroundColor: "#326CB9",
          }}
        ></LeftHaftTriangle>
      </div>
      <div className="w-full h-[514px] text-white bg-[#326CB9] flex justify-start items-center gap-[16px] px-8">
        <div
          style={{
            width: "384px",
            height: "384px",
            clipPath: "circle(50%)",
            backgroundImage: `url(/ws-techitez.jpg)`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></div>
        <div className="w-[50%] tracking-normal text-sm/7 px-2">
          <h1 className="font-bold uppercase text-2xl mb-2">
            Workshop "Tech it Eazy"
          </h1>
          <hr />
          <p>
            Được tổ chức bởi CLB AI4I, “Tech It Eazy” mang đến cho bạn kiến thức
            cơ bản và chuyên sâu về Trí tuệ nhân tạo (AI), Dữ liệu lớn (Big
            Data) và Điện toán đám mây (Cloud Computing). Đây còn là cơ hội để
            học hỏi, giao lưu với những chuyên gia dày dặn kinh nghiệm trong
            lĩnh vực này.
          </p>
          <Button
            variant="link"
            className="text-white uppercase mt-2 cursor-pointer"
          >
            <CircleChevronRight />
            <p className="text-[18px]">Tìm hiểu thêm</p>
          </Button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "144px",
          position: "relative",
          backgroundColor: "#306797",
        }}
      >
        <LeftHaftTriangle
          style={{
            width: `100%`,
            height: `144px`,
            backgroundColor: "#326CB9",
            clipPath: "polygon(0 0, 100% 0, 0 100%, 0 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 0 100%, 0 100%)",
            position: `absolute`,
          }}
        ></LeftHaftTriangle>
        <RightHaftTriangle
          style={{
            width: `100%`,
            height: `144px`,
            backgroundColor: "#306797",
            clipPath: "polygon(100% 0, 100% 100%, 100% 100%, 0% 100%)",
            WebkitClipPath: "polygon(100% 0, 100% 100%, 100% 100%, 0% 100%)",
            position: `absolute`,
          }}
        ></RightHaftTriangle>
      </div>
      <div className="w-full h-[514px] text-white bg-[#306797] flex justify-end items-center gap-[16px] px-8">
        <div className="text-end w-[50%] tracking-normal text-sm/7 px-2">
          <h1 className="font-bold uppercase text-2xl mb-2">
            Sân chơi học thuật năng động và sáng tạo
          </h1>
          <hr />
          <p>
            Cuộc thi “Trí tuệ nhân tạo trong kinh doanh” là cuộc thi do Câu lạc
            bộ Nghiên cứu trí tuệ nhân tạo và ứng dụng liên ngành (AI4I) - Câu
            lạc bộ học thuật trực thuộc Đoàn Khoa Hệ Thống Thông Tin, Trường Đại
            học Kinh tế - Luật, ĐHQG-HCM tổ chức với mong muốn tạo sân chơi bổ
            ích cho các bạn sinh viên để nâng cao hiểu biết về các kiến thức
            công nghệ nói chung và Trí tuệ nhân tạo nói riêng trong doanh
            nghiệp.
          </p>
          <Button
            variant="link"
            className="text-white uppercase mt-2 cursor-pointer"
          >
            <CircleChevronRight />
            <p className="text-[18px]">Tìm hiểu thêm</p>
          </Button>
        </div>
        <div
          style={{
            width: "384px",
            height: "384px",
            clipPath: "circle(50%)",
            backgroundImage: `url(/bg1.jpg)`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        ></div>
      </div>
      <div
        style={{
          width: "100%",
          height: "144px",
          position: "relative",
          backgroundColor: "#306797",
        }}
      >
        <RightHaftTriangle
          style={{
            width: `100%`,
            height: `144px`,
            clipPath: "polygon(100% 100%, 100% 0, 0 0)",
            WebkitClipPath: "polygon(100% 100%, 100% 0, 0 0)",
            position: `absolute`,
            backgroundColor: "#306797",
          }}
        ></RightHaftTriangle>
        <LeftHaftTriangle
          style={{
            width: `100%`,
            height: `144px`,
            clipPath: "polygon(100% 100%, 0 100%, 0 0)",
            WebkitClipPath: "polygon(100% 100%, 0 100%, 0 0)",
            position: `absolute`,
            backgroundColor: "#454858",
          }}
        ></LeftHaftTriangle>
      </div>
      <div className="flex gap-3 flex-wrap px-8 py-12 bg-[#454858] justify-center items-center text-white">
        <WelcomeCard>
          <Image
            src="/er.jpg"
            width={500}
            height={500}
            style={{
              width: `100%`,
              height: `334px`,
              borderRadius: `5px`,
              backgroundSize: `fit`,
            }}
            alt="Ban ER - External Relations"
          ></Image>
          <div className="px-4 mt-4">
            <h1 className="font-bold text-2xl">
              Ban Đối ngoại <br /> External Relations
            </h1>
            <p className="mt-2 font-light">
              Ban Đối Ngoại của AI4I giữ vai trò trọng yếu trong việc xây dựng
              và duy trì mối quan hệ hợp tác với đối tác, tổ chức và cộng đồng
              trong và ngoài nước. Với sứ mệnh kết nối và mở rộng mạng lưới hợp
              tác, không ngừng tìm kiếm các cơ hội mới, thúc đẩy sự hợp tác
              chiến lược, và tạo nên giá trị chung. Ban Đối Ngoại cam kết đưa
              hình ảnh AI4I vươn xa, đồng thời góp phần định hình vị thế của tổ
              chức trong lĩnh vực công nghệ và đổi mới sáng tạo.
            </p>
            <Button
              variant="link"
              className="text-white uppercase mt-2 cursor-pointer flex"
            >
              <CircleChevronRight
                style={{
                  width: `24px`,
                  height: `24px`,
                }}
              />
              <p className="text-[18px]">Tìm hiểu thêm</p>
            </Button>
          </div>
        </WelcomeCard>
        <WelcomeCard>
          <Image
            src="/rnd.jpg"
            width={500}
            height={500}
            style={{
              width: `100%`,
              height: `334px`,
              borderRadius: `5px`,
              backgroundSize: `contain`,
              backgroundPosition: "center bottom",
            }}
            alt="Ban ER - External Relations"
          ></Image>
          <div className="px-4 mt-4">
            <h1 className="font-bold text-2xl">
              Ban Nghiên cứu & Phát triển <br /> Research & Development
            </h1>
            <p className="mt-2 font-light">
              Ban Nghiên Cứu Phát Triển là đơn vị tiên phong trong việc nghiên
              cứu và ứng dụng các công nghệ mới nhằm tạo ra những giải pháp đột
              phá cho các ngành công nghiệp và cộng đồng. Với đội ngũ sinh viên
              năng động đầy sáng tạo, chúng tôi không ngừng phát triển các công
              nghệ tiên tiến, từ xử lý ngôn ngữ tự nhiên (NLP) đến học máy
              (Machine Learning), mang lại giá trị bền vững và thúc đẩy sự phát
              triển của câu lạc bộ.
            </p>
            <Button
              variant="link"
              className="text-white uppercase mt-2 cursor-pointer flex"
            >
              <CircleChevronRight
                style={{
                  width: `24px`,
                  height: `24px`,
                }}
              />
              <p className="text-[18px]">Tìm hiểu thêm</p>
            </Button>
          </div>
        </WelcomeCard>
        <WelcomeCard>
          <Image
            src="/hr.jpg"
            width={500}
            height={500}
            style={{
              width: `100%`,
              height: `334px`,
              borderRadius: `5px`,
              backgroundSize: `contain`,
              backgroundPosition: "center bottom",
            }}
            alt="Ban ER - External Relations"
          ></Image>
          <div className="px-4 mt-4">
            <h1 className="font-bold text-2xl">
              Ban Nhân sự <br /> Human Resources
            </h1>
            <p className="mt-2 font-light">
              Ban Nhân Sự của AI4I là nền tảng vững chắc cho sự phát triển bền
              vững của tổ chức. Chúng tôi tập trung xây dựng một môi trường làm
              việc chuyên nghiệp, sáng tạo và thân thiện, nơi mọi thành viên có
              thể phát huy tối đa tiềm năng. Với nhiệm vụ thu hút, đào tạo và
              phát triển nguồn nhân lực chất lượng cao, Ban Nhân Sự đóng vai trò
              quan trọng trong việc gắn kết đội ngũ, đảm bảo sự hài hòa giữa lợi
              ích cá nhân và mục tiêu chung của tổ chức.
            </p>
            <Button
              variant="link"
              className="text-white uppercase mt-2 cursor-pointer flex"
            >
              <CircleChevronRight
                style={{
                  width: `24px`,
                  height: `24px`,
                }}
              />
              <p className="text-[18px]">Tìm hiểu thêm</p>
            </Button>
          </div>
        </WelcomeCard>
        <WelcomeCard>
          <Image
            src="/marcom.jpg"
            width={500}
            height={500}
            style={{
              width: `100%`,
              height: `334px`,
              borderRadius: `5px`,
              backgroundSize: `cover`,
              backgroundPosition: "center bottom",
            }}
            alt="Ban ER - External Relations"
          ></Image>
          <div className="px-4 mt-4">
            <h1 className="font-bold text-2xl">
              Ban Marcom <br /> Marketing & Communication
            </h1>
            <p className="mt-2 font-light">
              Ban Truyền Thông & Marketing của AI4I đóng vai trò cầu nối, lan
              tỏa giá trị và tầm nhìn của tổ chức đến cộng đồng. Với sự kết hợp
              sáng tạo giữa chiến lược marketing hiện đại và các hoạt động
              truyền thông hiệu quả, xây dựng hình ảnh thương hiệu mạnh mẽ, tạo
              ra những chiến dịch ý nghĩa, và truyền cảm hứng về ứng dụng công
              nghệ AI. MarCom luôn nỗ lực để đưa các giải pháp và thành tựu của
              AI4I đến gần hơn với đối tác, khách hàng và xã hội.
            </p>
            <Button
              variant="link"
              className="text-white uppercase mt-2 cursor-pointer flex"
            >
              <CircleChevronRight
                style={{
                  width: `24px`,
                  height: `24px`,
                }}
              />
              <p className="text-[18px]">Tìm hiểu thêm</p>
            </Button>
          </div>
        </WelcomeCard>
      </div>
      <div className="bg-[#454858] w-full h-[143px]"></div>
      <div className="w-full h-[689px] flex justify-center items-center bg-gradient-to-b from-[#454858] to-[#24A8F3]">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Welcome;
