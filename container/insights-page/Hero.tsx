"use client";
import Link from "next/link";
import { Tags } from "@/components";

export default function Hero() {
	const categories = [
		{ id: 1, title: "all", href: "/" },
		{ id: 2, title: "architecture", href: "/" },
		{ id: 3, title: "interior design", href: "/" },
		{ id: 4, title: "construction", href: "/" },
	];

	const latestInsights = [
		{
			id: 1,
			title: "Designing Sustainable Office Spaces",
			subTitle: "How eco-friendly design can improve productivity and well-being.",
			date: "Aug 15, 2025",
			href: "/insights/sustainable-office-spaces",
			links: [
				{ id: 1, title: "Architecture", href: "/" },
				{ id: 2, title: "Interior Design", href: "/" },
			],
		},
		{
			id: 2,
			title: "Maximizing Commercial Spaces",
			subTitle: "Tips for creating functional and aesthetically pleasing commercial areas.",
			date: "Jul 30, 2025",
			href: "/insights/commercial-space-optimization",
			links: [{ id: 1, title: "Construction", href: "/" }],
		},
		{
			id: 3,
			title: "Trends in Modern Residential Interiors",
			subTitle: "Innovative interior solutions that blend style and comfort.",
			date: "Jul 12, 2025",
			href: "/insights/residential-interior-trends",
			links: [
				{ id: 1, title: "Interior Design", href: "/" },
			],
		},
		{
			id: 4,
			title: "Smart Building Technologies",
			subTitle: "Leveraging technology for efficient and sustainable building management.",
			date: "Jun 25, 2025",
			href: "/insights/smart-building-tech",
			links: [{ id: 1, title: "Construction", href: "/" }],
		},
	];

	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
							INSIGHTS
						</h1>
					</div>

					<div className="w-full border-t border-[#21212155] pt-[20px]">
						<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[20px]">
							<div className="w-[50%] sm:w-full xm:w-full">
								<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
									Latest insights:
								</h3>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex flex-wrap items-center gap-[10px]">
								{categories.map((item) => (
									<div key={item.id}>
										{item.id === 1 ? (
											<div className="w-fit rounded-[50px] border border-[#21212199] cursor-pointer bg-black">
												<Link
													className="small-text font-NeueMontreal uppercase text-white"
													href={item.href}>
													<div className="py-[2px]">
														<p className="z-10 px-[15px]">{item.title}</p>
													</div>
												</Link>
											</div>
										) : (
											<Tags
												bgcolor="#212121"
												item={item}
												className="hover:text-white"
											/>
										)}
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="w-full padding-x">
						<div className="w-full flex flex-col gap-[30px] padding-y sm:flex-col xm:flex-col gap-y-[20px]">
							{latestInsights.map((item) => (
								<div key={item.id} className="group relative overflow-hidden p-[15px] border border-[#21212133] rounded-[15px]">
									<Link href={item.href}>
										<div className="flex flex-col gap-[10px]">
											<div className="flex flex-wrap gap-[10px]">
												{item.links.map((link) => (
													<div
														key={link.id}
														className="rounded-[50px] border border-secondry py-[3px] px-[15px] cursor-pointer text-secondry small-text font-NeueMontreal uppercase">
														{link.title}
													</div>
												))}
											</div>
											<h3 className="paragraph font-NeueMontreal font-semibold text-secondry">
												{item.title}
											</h3>
											<p className="paragraph font-NeueMontreal font-normal text-gray-400">
												{item.subTitle}
											</p>
											<p className="paragraph font-NeueMontreal font-normal text-gray-400">
												{item.date}
											</p>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
