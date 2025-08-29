import { TMarqueeProps } from "@/types";
import { TextMarquee } from "@/animation";

export default function Marquee({ title, className }: TMarqueeProps) {
	return (
		<TextMarquee baseVelocity="0.7">
			<h1
				className={`font-FoundersGrotesk  font-normal border-y border-[#f9f9f955] normal-case whitespace-nowrap tracking-[-5px] ${className}`}>
				{title} &nbsp;
			</h1>
			<h1
				className={`font-FoundersGrotesk font-normal border-y border-[#fcfdfc55] text-[#ffffff] normal-case whitespace-nowrap tracking-[-5px] ${className}`}>
				{title} &nbsp;
			</h1>
		</TextMarquee>
	);
}
