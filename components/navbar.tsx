/** @format */

"use client";

import { useState, useRef, useEffect } from "react";
import React from 'react';
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement | null>(null);
	const hamburgerRef = useRef<HTMLButtonElement | null>(null);

    function openMenu() {
        setIsMobileMenuOpen(prevState => !prevState);
    }

	useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const isOutsideMenu = mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node);
            const isHamburgerButton = hamburgerRef.current && hamburgerRef.current.contains(event.target as Node);
            if (isOutsideMenu && !isHamburgerButton) {
                setIsMobileMenuOpen(false);
            }
			
        }
	
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [mobileMenuRef, hamburgerRef]);

	return (
		<header className="sticky top-0 z-50 md:px-36 px-4 bg-[#fffdfa] overflow-y-hidden">
			<nav className="flex justify-between items-center py-4">
				{/* Logo */}
				<div>
					<svg width="65" height="40" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M23.016 39.2c.317 0 .574-.093.77-.28.196-.187.294-.457.294-.812v-1.82c0-.448.033-.84.098-1.176.065-.336.145-.663.238-.98l5.09-18.122 4.822 18.57c.112.384.193.682.243.895l.023.099c.047.215.07.453.07.714v1.82c0 .355.098.625.294.812.196.187.453.28.77.28h10.696c.299 0 .55-.093.756-.28.205-.187.308-.457.308-.812v-1.82c0-.373.023-.705.07-.994.047-.29.135-.677.266-1.162L54.04 7.224c.299-1.25.765-2.254 1.4-3.01.635-.756 1.363-1.311 2.184-1.666l.672-.308c.336-.168.574-.331.714-.49.14-.159.21-.369.21-.63 0-.336-.117-.607-.35-.812C58.637.103 58.287 0 57.82 0h-8.904c-.467 0-.817.103-1.05.308-.233.205-.35.476-.35.812 0 .261.06.471.182.63.121.159.313.303.574.434l.616.224c1.12.41 1.871.999 2.254 1.764s.453 1.661.21 2.688l-5.535 23.486-6.477-25.81c-.133-.58-.17-1.018-.11-1.31l.026-.104c.093-.29.317-.49.672-.602l1.232-.336c.299-.112.518-.257.658-.434a.986.986 0 0 0 .21-.63c0-.355-.112-.63-.336-.826C41.468.098 41.122 0 40.656 0H24.78c-.448 0-.789.098-1.022.294-.233.196-.35.471-.35.826 0 .224.06.415.182.574.121.159.322.294.602.406l1.176.42c.261.093.462.243.602.448.14.205.294.607.462 1.204l1.751 6.742-5.553 19.475L16.128 4.48c-.147-.49-.194-.898-.14-1.223l.028-.135c.093-.345.327-.574.7-.686l1.456-.336c.504-.168.756-.504.756-1.008 0-.336-.112-.602-.336-.798C18.368.098 18.022 0 17.556 0H1.344C.896 0 .56.098.336.294.112.49 0 .756 0 1.092c0 .224.056.434.168.63.112.196.29.35.532.462l1.232.392c.355.13.625.308.812.532.187.224.345.579.476 1.064l7.84 30.408c.112.43.191.751.238.966.047.215.07.462.07.742v1.82c0 .355.103.625.308.812.205.187.467.28.784.28h10.556Zm34.804.7c1.195 0 2.263-.29 3.206-.868a6.338 6.338 0 0 0 2.24-2.338c.55-.98.826-2.04.826-3.178 0-1.157-.275-2.212-.826-3.164a6.325 6.325 0 0 0-2.24-2.282c-.943-.57-2.011-.854-3.206-.854-1.157 0-2.207.285-3.15.854a6.325 6.325 0 0 0-2.24 2.282c-.55.952-.826 2.007-.826 3.164 0 1.139.275 2.198.826 3.178.55.98 1.297 1.76 2.24 2.338.943.579 1.993.868 3.15.868Z"
							fill="#00001A"
						/>
					</svg>
				</div>

				{/* Menu Links */}
				<div className="flex space-x-4 gap-4 max-sm:hidden">
					<a href="/" className="">
						Home
					</a>
					<a href="/" className="">
						New
					</a>
					<a href="/" className="">
						Popular
					</a>
					<a href="/" className="">
						Trending
					</a>
					<a href="/" className="">
						Categories
					</a>
				</div>
				<div className="sm:hidden">
					<button ref={hamburgerRef} className= "z-30 relative" onClick={openMenu}>
						<Hamburger isOpen={isMobileMenuOpen} />
					</button>
				</div>
			</nav>
			<AnimatePresence>
				{isMobileMenuOpen ? <MobileMenu ref={mobileMenuRef} /> : null}
			</AnimatePresence>
		</header>
	);
};

const MobileMenu = React.forwardRef<HTMLDivElement, React.PropsWithChildren<object>>(function MobileMenu(_, ref) {
	return (
		<div ref={ref} className="fixed sm:hidden flex flex-col pt-24 z-20 top-0 right-0 w-3/5 h-screen">
			<motion.div
				className="absolute top-0 bottom-0 left-0 right-0 bg-white"
				initial={{
					x: "120%",
				}}
				animate={{
					x: 0,
				}}
				exit={{
					x: "120%",
					transition: {
						delay: 0.9,
					},
				}}
				transition={{
					type: "spring",
					stiffness: 400,
					damping: 40,
					mass: 1.5,
				}}
			></motion.div>
			<motion.ul
				transition={{
					delayChildren: 0.15,
				}}
				className="relative py-6 px-4 flex flex-col gap-6 heading-2"
			>
				{["Home", "New", "Popular", "Trending", "Categories"].map((item, index, arr) => (
					<motion.li
						key={index}
						variants={{
							hidden: {
								y: 20,
								opacity: 0,
								transition: {
									delay: (arr.length - index) * 0.15,
								},
							},
							visible: {
								y: 0,
								opacity: 1,
								transition: {
									delay: index * 0.15,
								},
							},
						}}
						initial={"hidden"}
						animate={"visible"}
						exit={"hidden"}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 40,
							mass: 0.5,
						}}
					>
						<a href="/" className="text-[#00001A] text-base pl-4">{item}</a>
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
});

const Hamburger = ({ isOpen}: {isOpen: boolean}) => {
	return (
		<div
			aria-hidden
			className="relative flex flex-col w-10 h-[18px] items-center"
		>
			<MotionConfig
			transition={{
				type: "spring",
				stiffness: 400,
				damping: 40,
				mass: 1,
			}}
			>
			<motion.span
				initial={false}
				style={{
				transformOrigin: "50% 50%",
				}}
				animate={{
				rotate: isOpen ? -45 : 0,
				top: isOpen ? 8 : 0,
				}}
				className="absolute  w-10 h-[2.5px] bg-black"
			/>
			<motion.span
				style={{
				transformOrigin: "50% 50%",
				}}
				initial={false}
				animate={{
				scaleX: isOpen ? 0.1 : 1,
				top: 8,
				}}
				className="absolute w-10 h-[2.5px] bg-black"
			/>
			<motion.span
				initial={false}
				style={{
				transformOrigin: "50% 50%",
				}}
				animate={{
				rotate: isOpen ? 45 : 0,
				top: isOpen ? 8 : 16,
				}}
				className="absolute w-10 h-[2.5px] bg-black"
			/>
			</MotionConfig>
		</div>
	);
};

