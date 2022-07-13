import React from 'react';
import { EducationProp, ExperienceProp } from '../../../typings';
import EducationCard from '../education/EducationCard';
import ExperienceCard from './ExperienceCard';

type ExperienceProps = {
	experienceData: Array<ExperienceProp>;
	educationData: Array<EducationProp>;
};

const Experience: React.FC<ExperienceProps> = ({
	experienceData,
	educationData,
}) => {
	return (
		<section className="min-h-screen pt-[11vh] py-4" id="experience">
			<div className="flex flex-col items-center space-y-1">
				<h2 className="font-bold text-2xl md:text-4xl border-b-4 border-orange-400">
					Experiences
				</h2>
				<p className="text-xl md:text-2xl text-gray-400 italic">
					Experiences and Educational background
				</p>
			</div>

			<div className="w-full flex-col lg:flex-row flex mt-8 lg:space-x-4">
				<div className=" w-full lg:w-[50%]">
					<h2 className="text-3xl text-dark dark:text-light font-bold">
						Work Experiences
					</h2>
					<div className="border-l-2 border-l-gray-500 dark:border-l-light">
						{experienceData.map((exp) => (
							<ExperienceCard key={exp._id} exp={exp} />
						))}
					</div>
				</div>

				<div className=" w-full lg:w-[50%] mt-6 lg:mt-0">
					<h2 className="text-3xl text-dark dark:text-light font-bold">
						Educational background
					</h2>
					<div className="border-l-2 border-l-gray-500 dark:border-l-light">
						{educationData.map((edu) => (
							<EducationCard key={edu._id} edu={edu} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Experience;
