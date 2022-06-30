import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type SocialItemProps = {
	name: string;
	className: string;
	Icon: IconType;
	path: string;
};

const SocialItem: React.FC<SocialItemProps> = ({
	name,
	className,
	Icon,
	path,
}) => {
	return (
		<Link href={path} passHref>
			<div
				className={`${className} flex items-center space-x-4 text-3xl group my-1 cursor-pointer`}
			>
				<li className="hidden group-hover:block">{name}</li>
				<Icon />
			</div>
		</Link>
	);
};
export default SocialItem;
