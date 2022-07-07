import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import { IconType } from 'react-icons';

type MobileNavItemProps = {
	title: string;
	Icon: IconType;
	path: string;
	setMobileMenu: Dispatch<SetStateAction<boolean>>;
};

const MobileNavItem: React.FC<MobileNavItemProps> = ({
	title,
	Icon,
	path,
	setMobileMenu,
}) => {
	return (
		<Link href={path} passHref>
			<li
				onClick={() => setMobileMenu(false)}
				className="justify-center h-12 px-2 flex items-center space-x-1 hover:bg-light dark:hover:bg-dark rounded-md group cursor-pointer hover:w-full"
			>
				<Icon className="text-icon text-xl  group-hover:animate-bounce" />
				<h2 className="font-bold text-xl text-gray-400 group-hover:text-dark dark:group-hover:text-gray-200">
					{title}
				</h2>
			</li>
		</Link>
	);
};

export default MobileNavItem;
