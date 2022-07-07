import React, { useState } from 'react';
import { ProjectProp } from '../../../typings';
import AllProjects from './AllProjects';
import MobileProjects from './MobileProjects';
import WebProjects from './WebProjects';

const styles = {
	tab: `cursor-pointer`,
	active: `text-2xl text-orange-600 cursor-pointer`,
};

type ProjectsProps = {
	projectData: Array<ProjectProp>;
};

const Projects: React.FC<ProjectsProps> = ({ projectData }) => {
	const [activeTab, setActiveTab] = useState<number>(1);
	const toggleActiveTab = (idx: number) => {
		setActiveTab(idx);
	};

	const filteredData = (items: Array<ProjectProp>, category: string) => {
		return items.filter((item) => item.tags.includes(category));
	};

	return (
		<section className="min-h-screen pt-[11vh] py-4" id="projects">
			<div className="flex flex-col items-center space-y-1">
				<h2 className="font-bold text-2xl md:text-4xl border-b-4 border-orange-400">
					Projects
				</h2>
				<p className="text-xl md:text-2xl text-gray-400 italic">
					What I have built so far
				</p>
			</div>

			<div className="text-2xl font-bold text-gray-400 flex items-center justify-center space-x-16 md:space-x-40 lg:space-x-60 mt-12 border-2 p-6 w-full rounded-full">
				<h2
					onClick={() => toggleActiveTab(1)}
					className={activeTab === 1 ? styles.active : styles.tab}
				>
					ALL
				</h2>
				<h2
					onClick={() => toggleActiveTab(2)}
					className={activeTab === 2 ? styles.active : styles.tab}
				>
					WEB
				</h2>
				<h2
					onClick={() => toggleActiveTab(3)}
					className={activeTab === 3 ? styles.active : styles.tab}
				>
					MOBILE
				</h2>
			</div>

			<div className=" mt-6 md:mt-6 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12 items-center justify-center">
				<>
					{activeTab === 1 && (
						<AllProjects data={filteredData(projectData, 'all')} />
					)}
				</>
				<>
					{activeTab === 2 && (
						<WebProjects data={filteredData(projectData, 'web')} />
					)}
				</>
				<>
					{activeTab === 3 && (
						<MobileProjects data={filteredData(projectData, 'mobile')} />
					)}
				</>
			</div>
		</section>
	);
};
export default Projects;
function data(data: any, arg1: string) {
	throw new Error('Function not implemented.');
}
