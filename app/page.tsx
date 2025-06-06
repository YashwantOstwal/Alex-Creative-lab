import Navbar from "@/components/Navbar";
import Signature from "@/public/Signature.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import logo from "@/public/logo.png";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;
  const messages = await getMessages({ locale });
  const title = messages.TabTitles?.home;
  return {
    title,
  };
}
export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="px-6 bg-[#EDEDED] ">
      <Navbar />
      <div className="pt-10 min-h-screen text-[15px] px-2 pb-10 bg-[#F5F5F5] border-x border-[#cfcfcf] border-dashed text-[#1b1c1d]">
        <div className="max-w-[448px] pr-12 flex flex-col gap-6">
          <div className="size-12 rounded-full relative overflow-hidden">
            <Image fill priority src={logo} alt="logo"></Image>
          </div>
          <h1 className="text-[36px] font-bold text-neutral-900 leading-tight">
            {t("h-1")}
          </h1>
          <p>{t("p-1")}</p>
          <p>{t("p-2")}</p>
          <p>{t("p-3")}</p>
          <Image src={Signature} alt="signature" className="w-25 h-auto" />
        </div>
      </div>
    </div>
  );
}
