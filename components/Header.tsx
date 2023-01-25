/** @format */

import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0 ? true : false);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`duration-200 ${isScrolled && "bg-[#141414]"}`}>
			<div className="left flex items-center space-x-2 md:space-x-10">
				<img height={100} width={100} src={"https://rb.gy/ulxxee"} />

				<ul className="hidden space-x-4 md:flex">
					<li className="headerLink">Home</li>
					<li className="headerLink">TV Shows</li>
					<li className="headerLink">Movies</li>
					<li className="headerLink">New & Popular</li>
					<li className="headerLink">My List</li>
				</ul>
			</div>
			<div className="right flex items-center space-x-4 text-sm font-light">
				<SearchIcon className="hidden h-6 w-6 sm:inline" />
				<p className="hidden lg:inline">Kids</p>
				<BellIcon className="h-6 w-6" />
				<Link href={"/account"}>
					<img
						src="https://rb.gy/g1pwyx"
						alt=""
						className="cursor-pointer rounded"
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
