import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/Header';
import Showcase from '../components/showcase/Showcase';
import Socials from '../components/socials/Socials';
import client from '../utils/sanity';
import { AboutProp, ProjectProp } from '../../typings';
import { aboutQuery, projectQuery } from '../utils/queries';
import About from '../components/about/About';
import Projects from '../components/project/Projects';

type HomeProps = {
	aboutData: Array<AboutProp>;
	projectData: Array<ProjectProp>;
};

const Home: React.FC<HomeProps> = ({ aboutData, projectData }) => {
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
			</main>
		</div>
	);
};
export default Home;

export const getServerSideProps = async () => {
	const aboutData = await client.fetch(aboutQuery);
	const projectData = await client.fetch(projectQuery);

	return {
		props: {
			aboutData,
			projectData,
		},
	};
};
