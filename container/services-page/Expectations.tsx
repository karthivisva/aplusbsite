"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TextHover } from "@/animation";
import { Marquee } from "@/components";

export default function Expectations() {
	const [openItemId, setOpenItemId] = useState<number | null>(null);

	const expectationsItems = [
		{
			id: 1,
			title1: "Holistic Expertise",
			subTitle1: "Complete solutions from design to execution.",
			btn: "Read more",
			para1:
				"APLUSB Consortium provides end-to-end solutions, covering architecture, interior design, and full construction with seamless execution.",
		},
		{
			id: 2,
			title1: "Technology Driven",
			subTitle1: "Leaders in BIM, 3D printing, and AR/VR applications.",
			btn: "Read more",
			para1:
				"We leverage cutting-edge technology to deliver accurate designs, interactive presentations, and innovative building solutions.",
		},
		{
			id: 3,
			title1: "Sustainable Focus",
			subTitle1: "Eco-friendly designs that respect the environment.",
			btn: "Read more",
			para1:
				"Our projects are designed with sustainability in mind, combining efficient resource use and environmental responsibility.",
		},
		{
			id: 4,
			title1: "Client-Centric Approach",
			subTitle1: "Personalized, transparent, and collaborative.",
			btn: "Read more",
			para1:
				"We put clients first, keeping you informed and involved at every stage to ensure the final result reflects your vision.",
		},
	{
	id: 5,
	title1: "Expert Team",
	subTitle1: "Experts working seamlessly together.",
	btn: "Read more",
	para1:
		"Our team of architects, engineers, and designers collaborate to deliver high-quality solutions.",
},

	];

	const handleButtonClick = (id: number) => {
		setOpenItemId(openItemId === id ? null : id);
	};

	return (
		<section className="w-full bg-marquee padding-y rounded-t-[20px]">
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px]">
				<Marquee
					title="why us other"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[30px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>

			<div className="w-full padding-x py-[20px]">
				<div className="w-full flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
					
					{/* Left Section */}
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="paragraph font-medium text-white font-NeueMontreal">
							Why Choose APLUSB Consortium?
						</h3>
					</div>

					{/* Right Section: Cards */}
					<div className="w-[50%] sm:w-full xm:w-full flex flex-wrap gap-[20px]">
						{expectationsItems.map((item) => (
							<div
								className="max-w-[345px] flex flex-col sm:w-full xm:w-full"
								key={item.id}
							>
								<div className="bg-[#145B52] w-full flex flex-col rounded-[20px] px-[30px] py-[20px] break-words">
									
									{/* Title */}
									<div className="flex gap-x-[10px] items-center pb-[10px]">
										<h1 className="sub-heading font-normal font-NeueMontreal text-white break-words">
											{item.title1}
										</h1>
									</div>

									{/* Subtitle + Button */}
									<div className="w-full flex justify-between items-center">
										<button className="small-text font-normal font-NeueMontreal text-white text-left break-words">
											<TextHover titile1={item.subTitle1} titile2={item.subTitle1} />
										</button>
										<button
											onClick={() => handleButtonClick(item.id)}
											className="small-text uppercase font-normal font-NeueMontreal text-white"
										>
											{openItemId === item.id ? (
												"hide"
											) : (
												<TextHover titile1={item.btn} titile2={item.btn} />
											)}
										</button>
									</div>

									{/* Expanded Content */}
									<AnimatePresence>
										{openItemId === item.id && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												transition={{
													ease: [0.4, 0, 0.2, 1],
													duration: 1,
												}}
											>
												<div className="border-t border-[#f1f1f155] pt-[20px] text-background mt-[10px] break-words">
													{item.para1}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
