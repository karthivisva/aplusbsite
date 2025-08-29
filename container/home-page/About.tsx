"use client";
import Image from "next/image";
import { useState } from "react";
import { aboutImg } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full padding-y rounded-t-[20px] z-20 relative mt-[-15px]" style={{ backgroundColor: "#4d8045" }}>

			{/* Intro Text */}
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
					Aplus B Consortium is your trusted partner in&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						architecture,
					</span>
					&nbsp;interior design, and&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						construction.
					</span>
					<br className="sm:hidden xm:hidden" />
					We bring creativity, technology, and precision together to build
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						&nbsp;spaces that inspire.
					</span>
				</h2>
			</div>

			{/* What you can expect */}
			<div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="sub-paragraph font-medium text-secondry font-NeueMontreal">
							What you can expect?
						</h3>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full">
						<div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[40%] sm:w-[60%] xm:w-[60%]">
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide">
									We design with purpose — creating spaces that are functional,
									sustainable, and tailored to the people who use them. Every
									detail is intentional, ensuring comfort, efficiency, and a
									lasting impact.
								</p>
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry pt-[30px] tracking-wide">
									We deliver with integrity — combining quality craftsmanship,
									innovation, and on-time execution to build trust and long-term
									partnerships with our clients.
								</p>
							</div>
							<div className="w-[60%] flex justify-end flex-col  sm:w-full xm:w-full">
								<h1 className="sub-paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
									Connect With Us:
								</h1>
								<div className="flex flex-col">
									{footerItems.map((item) => (
										<LinkHover
											key={item.id}
											className="w-fit sub-paragraph font-medium capitalize before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
											title={item.title}
											href={"/"}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Our approach */}
			{/* Our approach */}
<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
  {/* Left side */}
  <div className="flex flex-col gap-[30px]">
    <Heading title="Our approach:" />

    {/* Text content */}
    <div className="space-y-4 max-w-[500px]">
      <p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide">
        At <span className="font-semibold text-[#ffffff]">A Plus B Consortium</span>, 
        we approach every project with a balance of creativity, strategy, and precision.  
        Our goal is not just to build structures, but to create environments that 
        inspire and endure.
      </p>
      <ul className="list-none space-y-2 text-secondry sub-paragraph font-medium font-NeueMontreal tracking-wide">
        <li><span className="font-semibold text-[#f8f8f8]">1. Discover –</span> We dive deep into understanding your vision, goals, and context.</li>
        <li><span className="font-semibold text-[#eaeaea]">2. Design –</span> We transform ideas into bold, functional, and sustainable spaces.</li>
        <li><span className="font-semibold text-[#ffffff]">3. Deliver –</span> We execute with integrity, precision, and on-time commitment.</li>
      </ul>
    </div>

    {/* Button */}
    <div
      className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <RoundButton
        href="/aplusb-team"
        title="read more"
        bgcolor="#000"
        className="bg-white text-black"
        style={{ color: "#fff" }}
      />
    </div>
  </div>

  {/* Right side image */}
  <div
    className={`w-[50%] sm:w-full xm:w-full transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${
      hovered && "scale-[0.96]"
    }`}
  >
    <Image
      src={aboutImg}
      alt="about-img"
      className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${
        hovered && "scale-[1.09]"
      }`}
    />
  </div>
</div>

		</section>
	);
}
