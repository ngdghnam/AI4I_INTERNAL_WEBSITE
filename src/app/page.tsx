import Image from "next/image";
import Welcome from "./welcome/Welcome";
import { AbstractIntlMessages } from "next-intl";
import { getMessages } from "next-intl/server";

// export async function generateMetadata({
//   params: { locale },
// }: {
//   params: { locale: string };
// }) {
//   const message: AbstractIntlMessages = await getMessages({ locale });
//   const title = message.appName;
//   return {
//     title,
//   };
// }

export default function Home() {
  return (
    <div>
      <Welcome></Welcome>
    </div>
  );
}
