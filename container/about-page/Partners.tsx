"use client";
import { Ratings } from "@/components";

export default function Principles() {
	const projects = [
		{
			id: 1,
			title: "MPAC (MYRTLE PROJECT AND CONSULTANCY Pvt.Ltd)",
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
		<section className="w-full bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry">
					We’ve partnered with visionary clients — 
					<br className="sm:hidden xm:hidden" />
					from leading hospitals, government projects, and ambitious homeowners & businesses
					<br className="sm:hidden xm:hidden" /> — delivering spaces that inspire and last
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155] mt-[50px]">
				<div className="flex flex-col gap-[30px] padding-x py-[50px]">
					{projects.map((project) => (
						<div
							className="w-full flex flex-col gap-[10px] border-b border-[#21212133] pb-[20px]"
							key={project.id}>
							<p className="paragraph text-secondry font-NeueMontreal font-semibold underline">
								{project.title}
							</p>
							<p className="paragraph text-secondry font-NeueMontreal font-normal">
								PROJECT LOCATION: {project.location}
							</p>
							<p className="paragraph text-secondry font-NeueMontreal font-normal">
								PROJECT AREA: {project.area}
							</p>
							<p className="paragraph text-secondry font-NeueMontreal font-normal">
								PROJECT TYPE: {project.type}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="padding-x padding-y">
				<Ratings />
			</div>
		</section>
	);
}
