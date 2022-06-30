import React from 'react';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import SocialItem from './SocialItem';

type SocialsProps = {};

const Socials: React.FC<SocialsProps> = () => {
	return (
		<ul className="flex flex-col rounded-md p-1 fixed top-[35%] z-10 left-0 bg-gradient-to-tr from-gray-400 to-slate-300">
			<SocialItem
				name="GitHub"
				Icon={FaGithub}
				className="text-gray-500 hover:text-gray-700"
				path="https://github.com/HABEEB99"
			/>

			<SocialItem
				name="LinkedIn"
				Icon={FaLinkedin}
				className="text-blue-500 hover:text-blue-700"
				path="www.linkedin.com/in/habeeb-ahmadu"
			/>

			<SocialItem
				name="Email"
				Icon={MdEmail}
				className="text-red-500 hover:text-red-700"
				path="/"
			/>

			<SocialItem
				name="CV"
				Icon={BsBriefcaseFill}
				className="text-purple-500 hover:text-purple-700"
				path="www.linkedin.com/in/habeeb-ahmadu"
			/>
		</ul>
	);
};
export default Socials;
