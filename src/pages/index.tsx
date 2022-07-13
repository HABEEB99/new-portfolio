import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/Header';
import Showcase from '../components/showcase/Showcase';
import Socials from '../components/socials/Socials';
import client from '../utils/sanity';
import {
	AboutProp,
	EducationProp,
	ExperienceProp,
	ProjectProp,
	skillProp,
} from '../../typings';
import {
	aboutQuery,
	educationQuery,
	experienceQuery,
	projectQuery,
	skilQuery,
} from '../utils/queries';
import About from '../components/about/About';
import Projects from '../components/project/Projects';
import Skills from '../components/skill/Skills';
import Experience from '../components/experience/Experience';
import Contacts from '../components/contacts/Contacts';

type HomeProps = {
	aboutData: Array<AboutProp>;
	projectData: Array<ProjectProp>;
	skillData: Array<skillProp>;
	experienceData: Array<ExperienceProp>;
	educationData: Array<EducationProp>;
};

const Home: React.FC<HomeProps> = ({
	aboutData,
	projectData,
	skillData,
	experienceData,
	educationData,
}) => {
	return (
		<div className=" w-screen overflow-x-hidden">
			<Head>
				<title>Habeeb Ahmadu - Portfolio</title>
				<link rel="icon" href="/engineer.png" />
			</Head>
			<Header />
			{/* <Socials /> */}
			<main className="container px-4 md:px-20 lg:px-32 mx-auto">
				<Showcase />
				<About aboutData={aboutData} />
				<Projects projectData={projectData} />
				<Skills skillData={skillData} />
				<Experience
					experienceData={experienceData}
					educationData={educationData}
				/>
				<Contacts />
			</main>
		</div>
	);
};
export default Home;

export const getServerSideProps = async () => {
	const aboutData = await client.fetch(aboutQuery);
	const projectData = await client.fetch(projectQuery);
	const skillData = await client.fetch(skilQuery);
	const experienceData = await client.fetch(experienceQuery);
	const educationData = await client.fetch(educationQuery);

	return {
		props: {
			aboutData,
			projectData,
			skillData,
			experienceData,
			educationData,
		},
	};
};
