import Image from "next/image";
import { principles1, principles2 } from "@/public";

export default function Principles() {
	return (
		<section className="w-full padding-y rounded-t-[20px] bg-background">
			<div>
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry mb-[50px]">
					Two principles we stand behind in
					<br className="sm:hidden xm:hidden" /> every part of our work:
				</h1>
			</div>
			<div className="w-full border-t border-[#21212155]">
				<div className="w-full padding-x mt-[50px] flex justify-between gap-[30px] items-center sm:flex-col xm:flex-col">
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
					
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
						<span className="font-bold text-gray-900">Design with Purpose –</span>
						<br /> For us, design isn’t just about aesthetics. It’s about creating spaces that are functional, <br /> sustainable, and tailored to the people who use them. Every detail is intentional, <br /> ensuring comfort, efficiency, and a lasting impact.
							</p>
						</div>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
				
						<div className="flex flex-col gap-[20px]">
							<p className="paragraph font-NeueMontreal text-secondry">
								<span className="font-bold text-gray-900">Deliver with Integrity –</span> <br />
								We believe trust is built through action. <br /> That’s why we commit to quality craftsmanship, innovative solutions, <br /> and on-time delivery in every project. <br /> Integrity is at the core of our process, and it’s what helps us build long-lasting partnerships with our clients.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
