import Image from 'next/image';
import React from 'react';
import { skillProp } from '../../../typings';
import { urlFor } from '../../utils/sanity';

type SkillsProps = {
	skillData: Array<skillProp>;
};

const Skills: React.FC<SkillsProps> = ({ skillData }) => {
	return (
		<section className="min-h-screen pt-[11vh] py-4" id="skills">
			<div className="flex flex-col items-center space-y-1">
				<h2 className="font-bold text-2xl md:text-4xl border-b-4 border-orange-400">
					Abouts
				</h2>
				<p className="text-xl md:text-2xl text-gray-400 italic">
					Here are the technologies that I use
				</p>
			</div>
			<div className="grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-6 mx-auto">
				{skillData.map((skill) => (
					<div
						key={skill._id}
						className={`shadow-lg  ${skill.shadowColor} w-28 h-32 rounded-xl flex flex-col items-center group p-2`}
					>
						<h3 className={`hidden group-hover:block `}>{skill.name}</h3>
						<div className="w-20 h-20 relative group-hover:scale-105 mt-2 ">
							<Image
								src={urlFor(skill.icon).url()}
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
export default Skills;
