import React from 'react';
import { ExperienceProp } from '../../../typings';

import { GoPrimitiveDot } from 'react-icons/go';
import { TbArrowRightSquare } from 'react-icons/tb';
import { BsArrow90DegDown } from 'react-icons/bs';

type ExperienceCardProps = {
	exp: ExperienceProp;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => {
	return (
		<div
			key={exp._id}
			className="mt-4 shadow-md shadow-dark dark:shadow-light p-2 flex mx-2 "
		>
			<div className="mt-10 -ml-6 text-4xl text-purple-600">
				<TbArrowRightSquare />
			</div>
			<div className="ml-2">
				<div className="border-b-2 border-b-gray-600 dark:border-b-gray-400  py-2">
					<h1 className="text-2xl font-bold text-gray-600 dark:text-gray-100">
						{exp.role}
					</h1>
					<div className="flex items-center justify-between">
						<h3 className="text-sm md:text-xl text-gray-400 dark:text-gray-300">
							{exp.company}
						</h3>
						<span className="text-base italic text-gray-400 dark:text-gray-300">
							{exp.date}
						</span>
					</div>
				</div>

				<div className="my-1 border-b-2 border-b-gray-400 py-2">
					<div className="flex items-center">
						<BsArrow90DegDown className="mt-4 text-xl font-bold text-purple-600" />
						<h4 className="text-gray-500 dark:text-gray-300 text-xl font-bold">
							Duties
						</h4>
					</div>
					{exp.duties.map((duty, idx) => (
						<div key={idx} className="flex space-y-3 items-center space-x-1">
							<div>
								<GoPrimitiveDot className="text-xl text-purple-600" />
							</div>
							<p className="text-base text-gray-500 dark:text-gray-300">
								{duty}
							</p>
						</div>
					))}
				</div>

				<div className="my-1 py-2">
					<div className="flex items-center ">
						<BsArrow90DegDown className="mt-3 text-xl font-bold text-purple-600" />
						<h4 className="text-gray-500 dark:text-gray-300 text-xl font-bold">
							Tech Stack
						</h4>
					</div>
					<div className="flex space-x-2 flex-wrap">
						{exp.techStacks.map((stack, idx) => (
							<div key={idx} className="flex space-x-1 mr-2 items-center">
								<p className="text-base text-gray-500 dark:text-gray-300">
									{stack}
								</p>
								<span className="text-xl text-purple-600">|</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default ExperienceCard;
