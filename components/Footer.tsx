import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";

export default function Footer() {
  const phrase = ["a plus b", "Consortium"];
  const phrase1 = ["Other Details"];

  return (
    <footer className="w-full min-h-screen padding-x z-30 relative pt-[40px] bg-background flex flex-col justify-between rounded-t-[20px] mt-[-20px]">
      <div className="w-full flex justify-between sm:flex-col xm:flex-col gap-[40px]">
        {/* Left Side */}
        <div className="flex flex-col justify-between sm:w-full xm:w-full w-1/2">
          <h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase">
            <TextMask>{phrase}</TextMask>
          </h1>
        </div>

        {/* Right Side */}
        <div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-1/2">
          <div>
            <h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-secondry uppercase">
              <TextMask>{phrase1}</TextMask>
            </h1>

            {/* 🔹 Connect with us */}
            <div className="pt-[40px]">
              <h1 className="paragraph font-medium font-NeueMontreal text-secondry pb-[15px]">
                Connect with us:
              </h1>
              <div className="flex flex-col gap-y-[8px]">
                {footerItems.map((item) => (
                  <LinkHover
                    title={item.title}
                    href={item.href}
                    key={item.id}
                    className="w-fit paragraph font-medium text-secondry capitalize"
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-between sm:flex-col xm:flex-col sm:gap-[30px] xm:gap-[30px]">
              {/* 🔹 Location */}
              <div className="pt-[40px]">
                <h1 className="paragraph font-medium font-NeueMontreal text-secondry pb-[15px]">
                  Location:
                </h1>
                <div className="flex flex-col gap-y-[6px] paragraph font-medium text-secondry">
                  <p>134, 3rd Floor,</p>
                  <p>Kalidas Road,</p>
                  <p>Ramnagar, Coimbatore - 641 009</p>
                </div>
              </div>

              {/* 🔹 Quick Navigation */}
              <div className="pt-[40px]">
                <h1 className="paragraph font-medium font-NeueMontreal text-secondry pb-[15px]">
                  Quick Navigation:
                </h1>
                <div className="flex flex-col gap-y-[8px]">
                  {footernavbarItems.map((item) => (
                    <LinkHover
                      key={item.id}
                      title={item.title}
                      href={item.href}
                      className="w-fit paragraph font-medium text-secondry capitalize"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 🔹 Mail + Website */}
            <div className="pt-[40px] flex flex-col gap-y-[12px]">
              <div className="flex gap-x-[10px] sm:flex-col sm:gap-y-[4px]">
                <h1 className="paragraph font-medium font-NeueMontreal text-secondry">
                  Mail:
                </h1>
                <a
                  href="mailto:aplusbconsortium@gmail.com"
                  className="paragraph font-medium text-secondry"
                >
                  aplusbconsortium@gmail.com
                </a>
              </div>
              <div className="flex gap-x-[10px] sm:flex-col sm:gap-y-[4px]">
                <h1 className="paragraph font-medium font-NeueMontreal text-secondry">
                  Website:
                </h1>
                <a
                  href="https://aplusbconsortium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paragraph font-medium text-secondry"
                >
                  aplusbconsortium.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Footer Bottom */}
      <div className="w-full pt-[40px] pb-[30px] flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
        <div className="w-1/2 sm:w-full xm:w-full">
          <Link href={"/"}>
            <Image src={logo} alt="ochi logo" width={70} height={70} />
          </Link>
        </div>
        <div className="w-1/2 h-full flex gap-[10px] justify-between items-end sm:w-full xm:w-full sm:flex-col xm:flex-col sm:items-start xm:items-start">
          <div className="flex sm:flex-col xm:flex-col gap-[10px]">
            <h1 className="paragraph font-medium font-NeueMontreal text-secondry opacity-40">
              © a plus b consortium design 2025.
            </h1>
            <LinkHover
              title="Legal Terms"
              href="/"
              className="paragraph font-medium text-secondry opacity-40"
            />
          </div>
          <div>
            <LinkHover
              title="Website by Quantaweave"
              href="https://www.quantaweave.in"
              className="paragraph font-medium text-secondry opacity-40"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
