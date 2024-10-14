/** @format */
import Navbar from "../components/navbar";

export default function Home() {
	const images = {
		backgroundImage: "/images/image-web-3-desktop.jpg",
		imageRetro: "/images/image-retro-pcs.jpg",
		imageLaptop: "/images/image-top-laptops.jpg",
		imageGaming: "/images/image-gaming-growth.jpg",
	};
	  

	return (
		<main>
			<Navbar />

			<div className="container mx-auto px-4 lg:px-36 md:px-4 pb-8 pt-4">
				{/* wadah lama */}
				<div className="grid md:grid-cols-3 grid-rows-[auto_auto_auto] md:grid-flow-col gap-4">
					<div
						className="col-span-2 bg-red-600 md:h-[300px] h-[300px]"
						style={{
							backgroundImage: `url(${images.backgroundImage})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					></div>

					<div className="col-span-2 flex md:flex-row flex-col md:justify-between md:gap-16 gap-2 md:mb-0 mb-6">
						<div className="w-full">
							<div className="md:w-64 w-72">
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

					<div className="md:row-span-2 col-span-2 bg-[#00001a] w-full p-4">
						<div className="flex flex-col gap-4 justify-center">
							<span className="text-[2rem] leading-[2.5rem] font-extrabold text-[#e9ab53]">
								New
							</span>
							<div className="border-b border-[#5d5f79] mb-2">
								<span className="text-[1rem] leading-[2.5rem] font-bold text-[#fffdfa]">
									Hydrogen VS Electric Cars
								</span>
								<p className="pb-6">
									Will hydrogen-fueled cars ever catch up to EVs?
								</p>
							</div>
							<div className="border-b border-[#5d5f79] mb-2">
								<span className="text-[1rem] leading-[2.5rem] font-bold text-[#fffdfa]">
									The Downsides of AI Artistry
								</span>
								<p className="pb-6">
									What are the possible adverse effects of on-demand AI image
									generation?
								</p>
							</div>
							<div>
								<span className="text-[1rem] leading-[2.5rem] font-bold text-[#fffdfa]">
									Is VC Funding Drying Up?
								</span>
								<p>
									Private funding by VC firms is down 50% YOY. We take a look at
									what that means.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Wadah baru */}
				<div className="grid lg:grid-cols-3 grid-cols-1 auto-rows-auto gap-6 text-5xl w-full">
					<div
						className="col-span-2 md:h-[300px] h-[300px]"
						style={{
							backgroundImage: `url(${images.backgroundImage})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					></div>
					<div className="lg:row-span-2 lg:col-auto row-auto col-span-2 order-5 lg:order-none bg-veryDarkBlue p-4">
						<div className="flex flex-col gap-4 justify-center">
							<span className="text-[2rem] leading-[2.5rem] font-extrabold text-softOrange">
								New
							</span>
							<div className="border-b border-[#5d5f79] mb-2">
								<span className="text-[1rem] leading-[2.5rem] font-bold text-[#fffdfa]">
									Hydrogen VS Electric Cars
								</span>
								<p className="pb-6">
									Will hydrogen-fueled cars ever catch up to EVs?
								</p>
							</div>
							<div className="border-b border-[#5d5f79] mb-2">
								<span className="text-[1rem] leading-[2.5rem] font-bold text-[#fffdfa]">
									The Downsides of AI Artistry
								</span>
								<p className="pb-6">
									What are the possible adverse effects of on-demand AI image
									generation?
								</p>
							</div>
							<div>
								<span className="text-[1rem] leading-[2.5rem] font-bold text-[#fffdfa]">
									Is VC Funding Drying Up?
								</span>
								<p>
									Private funding by VC firms is down 50% YOY. We take a look at
									what that means.
								</p>
							</div>
						</div>
					</div>
					<div className="col-span-2 lg:col-auto">
						<div className="md:w-64 w-72">
							<span className="md:text-[3rem] md:leading-[3rem] text-[2.5rem] leading-[2.5rem] font-extrabold">
								The Bright Future of Web 3.0?
							</span>
						</div>
					</div>
					<div className="col-span-2 lg:col-auto">
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
					<div className="col-span-2 lg:col-auto order-6 lg:order-none">
						<div className="flex w-full gap-4">
							<div
								className="md:h-[120px] h-[120px] w-32"
								style={{
									backgroundImage: `url(${images.imageLaptop})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
								}}
							></div>
							<div className="flex flex-col gap-4 justify-center">
								<span className="text-[2rem] font-extrabold text-softRed">
									01
								</span>
								<span className="text-[1rem] font-bold text-veryDarkBlue">
									Hydrogen VS Electric Cars
								</span>
								<p className="">
									Will hydrogen-fueled cars ever catch up to EVs?
								</p>
							</div>
						</div>
					</div>
					<div className="bg-red-700 col-span-2 lg:col-auto order-7 lg:order-none">
						6
					</div>
					<div className="bg-red-700 col-span-2 lg:col-auto order-8 lg:order-none">
						7
					</div>
				</div>
			</div>
		</main>
	);
}
