/** @format */

import Navbar from "../components/navbar";

export default function Home() {
	const backgroundImage = "/images/image-web-3-desktop.jpg";

	return (
		<main>
			<Navbar />
			<div className="container mx-auto max-md:px-4 px-36 pb-8 pt-4">
				<div className="grid min-md:grid-rows-[auto_auto] grid-rows-[auto_auto_auto] min-md:grid-flow-col gap-4">
					<div
						className="col-span-2 bg-red-600 md:h-[300px] h-[300px]"
						style={{
							backgroundImage: `url(${backgroundImage})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					></div>

					<div className="col-span-2 flex md:flex-row flex-col md:justify-between md:gap-16 gap-2 md:mb-0 mb-6">
						<div className="w-full">
							<div className="md:w-64 w-full">
								<span className="md:text-[3rem] md:leading-[3rem] text-[2.5rem] leading-[2.5rem] font-extrabold">
									The Bright Future of Web 3.0?
								</span>
							</div>
						</div>
						<div className="grid grid-rows-[1fr_auto] gap-4">
							<p className="leading-7 text-start">
								We dive into the next evolution of the web that claims to put
								the power of the platforms back into the hands of the people.
								But is it really fulfilling its promise?
							</p>
							<a
								href="#"
								className="bg-[#f15e50] text-[#00001a] px-7 py-2 font-bold text-sm hover:bg-[#00001a] hover:text-[#fffdfa] max-w-max inline-block"
							>
								READ MORE
							</a>
						</div>
					</div>

					<div className="md:row-span-2 col-span-2 md:col-span-2 bg-[#00001a] w-full p-4">
						<div className="flex flex-col gap-4 justify-center">
							<span className="text-[2rem] leading-[2.5rem] font-extrabold text-[#e9ab53]">
								New
							</span>
							<div className="border-b border-[#5d5f79] mb-2">
								<span className="text-[1rem] leading-[2.5rem] font-bold text-[#fffdfa]">
									Hydrogen VS Electric Cars
								</span>
								<p className="pb-6">Will hydrogen-fueled cars ever catch up to EVs?</p>
							</div>
							<div className="border-b border-[#5d5f79] mb-2">
								<span className="text-[1rem] leading-[2.5rem] font-bold text-[#fffdfa]">
									The Downsides of AI Artistry
								</span>
								<p className="pb-6">What are the possible adverse effects of on-demand AI image generation?</p>
							</div>
							<div>
								<span className="text-[1rem] leading-[2.5rem] font-bold text-[#fffdfa]">
									Is VC Funding Drying Up?
								</span>
								<p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="grid md:grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] gap-4">
					<div className="bg-red-600 h-[350px]"></div>
					<div className="bg-red-600 h-[350px]"></div>
					<div className="bg-red-600 h-[350px]"></div>
				</div> */}
			</div>
		</main>
	);
}
