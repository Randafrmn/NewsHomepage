export default function Home() {
	const backgroundImage = "/images/image-web-3-desktop.jpg";

	return (
		<div className="container mx-auto md:px-36 px-4 py-8">
			<div className="grid md:grid-rows-[auto_auto] grid-rows-[auto_auto_auto] grid-flow-col gap-4">
				<div
					className="col-span-2 bg-red-600 md:h-[350px] h-[300px]"
					style={{
						backgroundImage: `url(${backgroundImage})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				></div>

				<div className="col-span-2 flex md:flex-row flex-col md:justify-between md:gap-14 gap-2 md:mb-0 mb-6">
					<div className=""><span className="text-5xl font-extrabold">The Bright Future of Web 3.0?</span></div>	
					<div className="flex flex-col justify-between">
						<p className="leading-7 text-start mb-4">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
						<div>
							<a href="#" className="bg-[#f15e50] text-[#00001a] px-7 py-2 font-bold text-sm hover:bg-[#00001a] hover:text-[#fffdfa]">
								READ MORE
							</a>
						</div>
					</div>
				</div>

				<div className="md:row-span-2 col-span-2 md:col-span-1 bg-[#00001a] w-full">test Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam facere et minima exercitationem, molestiae ipsam doloribus dolorum nostrum ea! Placeat harum ratione amet nesciunt, exercitationem voluptatum illo? Quod, laborum veritatis?</div>
			</div>
			<div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-8 h-52">
				<div className="bg-red-600"></div>
				<div className="bg-red-600"></div>
				<div className="bg-red-600"></div>
			</div>
		</div>
	);
}
