import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type NavItemProps = {
	title: string;
	Icon: IconType;
	path: string;
	onClick: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ title, Icon, path }) => {
	return (
		<Link href={path} passHref>
			<li className="flex items-center space-x-1 group cursor-pointer">
				<Icon className="text-icon text-xs group-hover:block hidden group-hover:animate-bounce" />
				<h2 className="font-bold text-md text-gray-400 hover:text-dark dark:group-hover:text-gray-200">
					{title}
				</h2>
			</li>
		</Link>
	);
};
export default NavItem;
