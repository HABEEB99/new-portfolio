import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavItem from '../nav-item/NavItem';
import Button from '../button/Button';

import { AiFillHome, AiFillPhone } from 'react-icons/ai';
import {
	BsBriefcaseFill,
	BsInfoLg,
	BsFillSunFill,
	BsFillMoonFill,
} from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import { GiAmericanFootballHelmet } from 'react-icons/gi';
import { MdClose, MdOutlineMenu } from 'react-icons/md';
import { useTheme } from 'next-themes';
import MobileNav from '../mobile-nav/MobileNav';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	const activeNavClassNames = {
		l1: ``,
		icon: ``,
		h2: ``,
	};
	const [activeNav, setActiveNav] = useState<number>(1);

	const { theme, setTheme, systemTheme } = useTheme();

	const [mobileMenu, setMobileMenu] = useState<boolean>(false);

	const [darkMode, setDarkMode] = useState<boolean>(false);
	const handleDarkMode = () => setDarkMode(!darkMode);

	const themeToggler = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme;
		if (currentTheme === 'dark') {
			return (
				<div onClick={() => setTheme('light')} className="hidden lg:block">
					<Button className="p-2">
						<BsFillSunFill />
					</Button>
				</div>
			);
		} else {
			return (
				<div onClick={() => setTheme('dark')} className="hidden lg:block">
					<Button className="p-2">
						<BsFillMoonFill />
					</Button>
				</div>
			);
		}
	};

	return (
		<header className="h-[10vh] bg-light dark:bg-dark fixed top-0 w-full z-10 flex items-center justify-between px-4 md:px-12 lg:px-32 shadow-xl">
			<Link href="/" passHref>
				<div className="flex items-center space-x-1 cursor-pointer group">
					<div className="rounded-[50%] relative w-10 h-10 overflow-hidden group-hover:animate-spin">
						<Image src="/engineer.png" layout="fill" objectFit="cover" />
					</div>
					<h1 className="font-bold text-md md:text-2xl text-btnLight dark:text-white">
						HABEEB
					</h1>
				</div>
			</Link>

			<ul className="hidden lg:flex items-center space-x-6">
				<NavItem
					title="Home"
					Icon={AiFillHome}
					path="/"
					onClick={() => setActiveNav(1)}
				/>
				<NavItem
					title="About"
					Icon={BsInfoLg}
					path="#about"
					onClick={() => setActiveNav(2)}
				/>
				<NavItem
					title="Projects"
					Icon={GiAmericanFootballHelmet}
					path="#projects"
					onClick={() => setActiveNav(3)}
				/>
				<NavItem
					title="Skills"
					Icon={FaTools}
					path="#skills"
					onClick={() => setActiveNav(4)}
				/>
				<NavItem
					title="Experience"
					Icon={BsBriefcaseFill}
					path="#experience"
					onClick={() => setActiveNav(5)}
				/>
			</ul>

			<div className="flex items-center space-x-3">
				{themeToggler()}
				<Button className="w-32 h-10">
					<AiFillPhone className="mr-2 animate-bounce" />
					Hire Me
				</Button>

				<div className="lg:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
					<Button className="p-2">
						{mobileMenu ? <MdClose /> : <MdOutlineMenu />}
					</Button>
				</div>
			</div>

			{mobileMenu && <MobileNav setMobileMenu={setMobileMenu} />}
		</header>
	);
};
export default Header;
