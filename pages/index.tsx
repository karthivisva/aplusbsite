"use client";
import { useEffect } from "react";
import { Curve, Marquee, Ready } from "@/components";
import { About, Clients, Hero, Projects, VideoHome } from "@/container";
import WhatsAppButton from "@/components/WhatsAppButton"; // Add this import

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Hero />
				<Ready />
				<div
					className="w-full z-10 relative rounded-t-[20px] padding-y"
					style={{ backgroundColor: "#b3d297" }}
				>
					<Marquee
						title="a plus b"
						className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
					/>
				</div>
				<About />
				<Projects />
				<Clients />
			</Curve>
			
			{/* WhatsApp Button - Add this outside Curve component */}
			<WhatsAppButton 
				phoneNumber="1234567890" // Replace with your actual WhatsApp number
				message="Hi! Any help? Contact us" 
			/>
		</>
	);
}
