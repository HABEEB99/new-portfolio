import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import Button from '../button/Button';

type ShowcaseProps = {};

const Showcase: React.FC<ShowcaseProps> = () => {
	return (
		<section className="h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-center space-y-20 lg:space-y-0 lg:justify-between">
			<div className="w-full lg:w-[50%] items-center lg:items-start flex flex-col space-y-6">
				<h1 className="text-4xl md:text-6xl w-full lg:w-[31rem] font-bold font-sans text-gray-500">
					Building aesthetically pleasing web and mobile experiences
				</h1>

				<Link href="#projects" passHref>
					<button className="h-16 w-full md:w-80 text-2xl hover:bg-white flex dark:bg-light dark:text-dark dark:hover:bg-white  dark:hover:text-dark items-center justify-center hover:text-dark transition-transform duration-300 ease-in-out  bg-btnLight text-white font-bold  rounded-md shadow-2xl">
						<AiFillEye className="mr-2" />
						My Work
					</button>
				</Link>
			</div>

			<div className="lg:w-[50%] flex items-center justify-center ">
				<div className="relative w-[20rem] h-[20rem]">
					<Image
						src="/programmer.png"
						layout="fill"
						objectFit="cover"
						alt="Showcase picture"
					/>
				</div>
			</div>
		</section>
	);
};
export default Showcase;
