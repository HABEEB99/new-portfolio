import React from 'react';
import { BsArrow90DegDown } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { TbArrowRightSquare } from 'react-icons/tb';
import { EducationProp } from '../../../typings';

type EducationCardProps = {
	edu: EducationProp;
};

const EducationCard: React.FC<EducationCardProps> = ({ edu }) => {
	return (
		<div
			key={edu._id}
			className="mt-4 shadow-md shadow-dark dark:shadow-light p-2 flex mx-2 "
		>
			<div className="mt-10 -ml-6 text-4xl text-purple-600">
				<TbArrowRightSquare />
			</div>
			<div className="ml-2">
				<div className="border-b-2 border-b-gray-600 dark:border-b-gray-400  py-2">
					<h1 className="text-2xl font-bold text-gray-600 dark:text-gray-100">
						{edu.course}
					</h1>
					<div className="flex items-center justify-between">
						<h3 className="text-sm md:text-xl text-gray-400 dark:text-gray-300">
							{edu.institution}
						</h3>
						<span className="text-base italic text-gray-400 dark:text-gray-300">
							{edu.date}
						</span>
					</div>
				</div>

				<div className="my-1  py-2">
					<div className="flex items-center">
						<BsArrow90DegDown className="mt-4 text-xl font-bold text-purple-600" />
						<h4 className="text-gray-500 dark:text-gray-300 text-xl font-bold">
							Topics
						</h4>
					</div>
					{edu.topics.map((topic, idx) => (
						<div key={idx} className="flex space-y-3 items-center space-x-1">
							<div>
								<GoPrimitiveDot className="text-xl text-purple-600" />
							</div>
							<p className="text-base text-gray-500 dark:text-gray-300">
								{topic}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default EducationCard;
