import { TMarqueeProps } from "@/types";
import { TextMarquee } from "@/animation";

export default function Marquee({ title, className }: TMarqueeProps) {
  return (
    <TextMarquee baseVelocity="0.7">
      {/* 🔹 Masked Gradient Text */}
      <h1
        className={`font-FoundersGrotesk font-normal border-y border-[#f9f9f955] normal-case whitespace-nowrap tracking-[-5px] ${className}`}
        style={{
          backgroundImage:
            "linear-gradient(90deg, #ffff)", // brand-friendly gradient
          backgroundSize: "200% auto",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          animation: "shine 6s linear infinite",
        }}
      >
        {title} &nbsp;
      </h1>

      {/* 🔹 White Text */}
      <h1
        className={`font-FoundersGrotesk font-normal border-y border-[#fcfdfc55] text-[#ffffff] normal-case whitespace-nowrap tracking-[-5px] ${className}`}
      >
        {title} &nbsp;
      </h1>

      {/* 🔹 Keyframes for gradient shine */}
      <style jsx>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </TextMarquee>
  );
}
