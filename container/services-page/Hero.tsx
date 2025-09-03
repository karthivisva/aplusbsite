export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
								A Plus B Consortium
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155]">
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
							We deliver&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								stunning architecture&nbsp;
							</span>
							and&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								exquisite interior design&nbsp;
							</span>
							with&nbsp;
							<span className="xl:link-flash lg:link-flash md:link-flash cursor-pointer">
								complete construction solutions
							</span>
							, ensuring every project is functional, beautiful, and built to last.
						</p>
					</div>
					<div className="w-full flex border-t border-[#21212155] py-[20px] flex-col">
						<div className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]">
							<div className="w-[50%] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
									Our approach is simple yet effective:
								</p>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]">
								<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Client Vision First
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											We listen to your goals and aspirations. Understanding your vision
											allows us to create designs that perfectly align with your needs
											and expectations.
										</p>
									</div>
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											Functional & Aesthetic
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											Every design balances beauty and functionality. Our team ensures
											that your space is both visually appealing and practical for everyday use.
										</p>
									</div>
								</div>
								<div className="w-[50%] sm:w-full xm:w-full">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
											End-to-End Construction
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
											From blueprint to completion, we manage every stage of construction,
											delivering a seamless and high-quality building experience.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
