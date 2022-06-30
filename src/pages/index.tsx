import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/Header';
import Showcase from '../components/showcase/Showcase';
import Socials from '../components/socials/Socials';

const Home: NextPage = () => {
	return (
		<div className=" w-screen overflow-x-hidden">
			<Head>
				<title>Habeeb Ahmadu - Portfolio</title>
				<link rel="icon" href="/engineer.png" />
			</Head>
			<Header />
			{/* <Socials /> */}
			<main className="container px-4 md:px-20 lg:px-32">
				<Showcase />
			</main>
		</div>
	);
};

export default Home;
