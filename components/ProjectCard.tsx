"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ item }: { item: any }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div>
			<div className="relative w-full group">
				{/* Removed Link wrapper so it's not clickable */}
				<div
					className="rounded-[10px] overflow-hidden hover:scale-[0.95] transition transform duration-[1s] ease-[.4,0,.2,1] block pointer-events-none"
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}>
					<Image
						src={item.src}
						alt={`${item.title}Img`}
						className="w-full object-cover rounded-[10px] group-hover:scale-[1.09] transform duration-[1s] ease-[.4,0,.2,1]"
					/>
				</div>

				{/* Hover big title text */}
				<div
					style={{ left: item.id % 2 == 0 ? "-15%" : "90%" }}
					className="absolute w-fit flex top-[50%] sm:hidden -translate-x-[30%] -translate-y-1/2 overflow-hidden z-10 group-hover:opacity-100 opacity-0 transition duration-500 ease-[.4,0,.2,1] xm:hidden">
					{item.title.split("").map((char: any, i: any) => (
						<motion.span
							initial={{ y: "100%" }}
							animate={hovered ? { y: 0 } : { y: "100%" }}
							transition={{
								delay: i * 0.02,
								duration: 0.5,
								ease: [0.4, 0, 0.2, 1],
							}}
							className="text-[165px] leading-none inline-block uppercase font-FoundersGrotesk text-green-900 font-bold text-center pointer-events-none"
							key={i}>
							{char}
						</motion.span>
					))}
				</div>
			</div>
		</div>
	);
}
