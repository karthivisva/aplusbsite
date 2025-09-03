"use client";
import { Marquee } from "@/components";
import { motion } from "framer-motion";

export default function Publication() {
	const latestProjects = [
		{
			id: 1,
			title: "MPAC (Myrtle Project and Consultancy Pvt. Ltd)",
			location: "Salem",
			area: "12,500.00 Sq.ft",
			type: "Commercial Building (S+4)",
		},
		{
			id: 2,
			title: "Kauvery Hospital",
			location: "Trichy",
			area: "50,000.00 Sq.ft",
			type: "Interior Works",
		},
		{
			id: 3,
			title: "Indian Air Force",
			location: "Coimbatore",
			area: "8,000.00 Sq.ft",
			type: "Interior Works",
		},
		{
			id: 4,
			title: "Campus Showroom",
			location: "Salem",
			area: "1,800.00 Sq.ft",
			type: "Interior Works",
		},
		{
			id: 5,
			title: "Arima & Globus",
			location: "Coimbatore",
			area: "8,000.00 Sq.ft",
			type: "Interior Works",
		},
		{
			id: 6,
			title: "Dhiya Foundation",
			location: "Coimbatore",
			area: "2,500.00 Sq.ft",
			type: "Interior Works",
		},
	];

	return (
		<section className="w-full bg-marquee padding-y rounded-t-[20px]">
			<div className="w-full bg-marquee z-10 relative rounded-t-[20px]">
				<Marquee
					title="Completed Projects"
					className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
				/>
			</div>

			<div className="w-full padding-x py-[30px]">
				<h3 className="paragraph font-medium text-white font-NeueMontreal pb-[20px]">
				Recent Milestones in Design & Construction
				</h3>

				{/* Responsive grid: 1 column mobile, 2 columns tablet & desktop */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[20px]">
					{latestProjects.map((project, i) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
							whileHover={{
								scale: 1.05,
								boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
							}}
							className="bg-[#145B52] p-[20px] rounded-[15px] flex flex-col gap-[10px] cursor-pointer hover:bg-[#0f3d36] transition-colors duration-300">
							<h4 className="paragraph uppercase font-medium font-NeueMontreal text-white">
								{project.title}
							</h4>
							<p className="paragraph font-NeueMontreal text-gray-300">
								<strong>Location:</strong> {project.location}
							</p>
							<p className="paragraph font-NeueMontreal text-gray-300">
								<strong>Area:</strong> {project.area}
							</p>
							<p className="paragraph font-NeueMontreal text-gray-300">
								<strong>Project Type:</strong> {project.type}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
