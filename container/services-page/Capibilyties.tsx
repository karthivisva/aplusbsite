"use client";
import { useState } from "react";
import { Button } from "@/components";

export default function Capabilities() {
	const capabilities = [
		{
			id: 1,
			title1: "Architecture",
			links1: [
				{ id: 1, title: "Residential Design", href: "#" },
				{ id: 2, title: "Commercial Design", href: "#" },
				{ id: 3, title: "Urban Planning", href: "#" },
			],
			title2: "Interior Design",
			links2: [
				{ id: 1, title: "Office Interiors", href: "#" },
				{ id: 2, title: "Luxury Homes", href: "#" },
				{ id: 3, title: "Hospitality Design", href: "#" },
			],
		},
		{
			id: 2,
			title1: "Construction",
			links1: [
				{ id: 1, title: "Project Management", href: "#" },
				{ id: 2, title: "Quality Control", href: "#" },
				{ id: 3, title: "Safety Compliance", href: "#" },
			],
			title2: "Sustainability",
			links2: [
				{ id: 1, title: "Green Building", href: "#" },
				{ id: 2, title: "Energy Efficient Solutions", href: "#" },
				{ id: 3, title: "Eco-friendly Materials", href: "#" },
			],
		},
		{
			id: 3,
			title1: "Technology",
			links1: [
				{ id: 1, title: "BIM Modeling", href: "#" },
				{ id: 2, title: "3D Printing", href: "#" },
				{ id: 3, title: "AR/VR Visualization", href: "#" },
			],
			title2: "Client Support",
			links2: [
				{ id: 1, title: "Consultation", href: "#" },
				{ id: 2, title: "Project Tracking", href: "#" },
				{ id: 3, title: "Aftercare", href: "#" },
			],
		},
	];

	return (
		<div className="w-full bg-about padding-y rounded-t-[20px]">
			<div className="w-[82%] sm:w-full xm:w-full padding-x mb-[70px]">
				<h1 className="sub-heading font-medium font-NeueMontreal text-secondry">
					<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
						Let’s be honest.
					</span>{" "}
					There are really no excuses to have a bad presentation anymore. No one
					has time for poorly communicated ideas. Focus on what you do best{" "}
					<span className="sm:hidden xm:hidden">—</span> growing your business,
					while we do our best at
					<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
						&nbsp;making your projects exceptional.
					</span>
				</h1>
			</div>
			<div className="w-full flex sm:flex-col xm:flex-col justify-between py-[20px] padding-x border-t border-[#21212155] sm:gap-[15px] xm:gap-[15px]">
				<div className="w-[10%] sm:w-full xm:w-full">
					<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
						Our Capabilities:
					</h3>
				</div>
				<div className="w-[90%] flex flex-col gap-y-[30px]">
					{capabilities.map((item) => (
						<div
							className="w-full flex sm:flex-col xm:flex-col justify-between sm:gap-[15px] xm:gap-[15px]"
							key={item.id}>
							<div className="w-[45%] sm:w-full xm:w-full">
								<div className="flex gap-x-[10px] flex-col">
									<div className="flex items-center gap-x-[10px] pb-[20px]">
										<span className="w-[12px] h-[12px] rounded-full bg-secondry" />
										<h1 className="paragraph uppercase font-medium font-NeueMontreal text-secondry">
											{item.title1}
										</h1>
									</div>
								</div>
								<div className="flex flex-col gap-y-[5px]">
									{item.links1.map((link) => (
										<Button href={link.href} title={link.title} key={link.id} />
									))}
								</div>
							</div>
							<div className="w-[45%] sm:w-full xm:w-full">
								<div className="flex gap-x-[10px] flex-col">
									<div className="flex items-center gap-x-[10px] pb-[20px]">
										<span className="w-[12px] h-[12px] rounded-full bg-secondry" />
										<h1 className="paragraph uppercase font-medium font-NeueMontreal text-secondry">
											{item.title2}
										</h1>
									</div>
								</div>
								<div className="flex flex-col gap-y-[5px]">
									{item.links2.map((link) => (
										<Button href={link.href} title={link.title} key={link.id} />
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
