import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BiLink, BiMailSend } from 'react-icons/bi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

type ContactsProps = {};

const Contacts: React.FC<ContactsProps> = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	useEffect(() => {
		if (isSubmitted) {
			setInterval(() => setIsSubmitted(false), 5000);
		}
	}, [isSubmitted]);

	const [formInputs, setFormInputs] = useState({
		name: '',
		phoneNumber: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e: any) => {
		e.preventDefault();

		setFormInputs({
			...formInputs,
			[e.target.name]: e.target.value,
		});
	};

	const sendMail = (event: any) => {
		event.preventDefault();
		emailjs
			.send(
				'service_hxyir1g',
				'template_7d8n2fj',
				formInputs,
				'user_DdmrQ6ZEsmIcoqdpkaGIL',
			)
			.then(
				(response) => {
					console.log('MESSAGE SUCCESSFULLY SENT', response);
					setFormInputs({
						name: '',
						email: '',
						phoneNumber: '',
						subject: '',
						message: '',
					});
					setIsSubmitted(true);
				},
				(error) => {
					console.log('MESSAGE FAILED TO SUBMIT', error);
				},
			);
	};

	return (
		<section className="min-h-screen pt-[11vh] py-4" id="contacts">
			<div className="flex flex-col items-center space-y-1">
				<h2 className="font-bold text-2xl md:text-4xl border-b-4 border-orange-400">
					Contacts
				</h2>
				<p className="text-xl md:text-2xl text-gray-400 italic">
					Contact me through the channels below
				</p>
			</div>

			<div className="flex flex-col lg:flex-row w-full mt-4 lg:space-x-8">
				<div className="flex flex-col items-center justify-center p-2  w-full lg:w-[30%] shadow-md shadow-dark dark:shadow-light">
					<div className="relative w-96 h-96">
						<Image
							src="/programmer.png"
							alt="Profile pic"
							layout="fill"
							objectFit="cover"
						/>
					</div>

					<div className="flex flex-col gap-1">
						<h1 className="text-2xl text-gray-600 dark:text-gray-200 font-bold">
							Habeeb Ahmadu
						</h1>
						<h3 className="text-xl text-gray-500 dark:text-gray-300">
							Software Engineer
						</h3>
						<p className="text-md text-gray-400 dark:text-gray-400">
							I'm available for a full-time or freelance work.
						</p>
					</div>

					<div className="flex flex-col mt-4 gap-2">
						<div className="flex space-x-3 items-center">
							<div className="flex items-center space-x-1 text-xl text-purple-600">
								<AiFillPhone className="" />
								<h4>Phone :</h4>
							</div>
							<span className="text-gray-500 dark:text-gray-300">
								+234 706 096 2880
							</span>
						</div>

						<div className="flex space-x-3 items-center">
							<div className="flex items-center space-x-1 text-xl text-purple-600">
								<MdEmail />
								<h4>Email :</h4>
							</div>
							<span className="text-gray-500 dark:text-gray-300">
								habeebahmadu1@gmail.com
							</span>
						</div>

						<div className="flex space-x-3 items-center">
							<div className="flex items-center space-x-1 text-xl text-purple-600">
								<BiLink />
								<h4>Socials :</h4>
							</div>
							<div className="flex space-x-4">
								<Link href="www.linkedin.com/in/habeeb-ahmadu" passHref>
									<BsLinkedin className="text-2xl text-sky-500 hover:text-sky-700 cursor-pointer" />
								</Link>

								<Link href="https://github.com/HABEEB99" passHref>
									<BsGithub className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer" />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col p-2 mt-6 lg:mt-0  w-full lg:w-[70%] shadow-md shadow-dark dark:shadow-light">
					<form onSubmit={sendMail} className="p-3 w-full space-y-10">
						<div className="flex items-center space-x-4">
							<div className="w-[50%] h-10 rounded-md relative mt-2">
								<input
									required
									type="text"
									id="name"
									name="name"
									value={formInputs.name}
									onChange={handleChange}
									placeholder="Name"
									className="w-full placeholder-transparent peer h-full px-2 bg-gray-400 shadow-md focus:outline-none"
								/>
								<label htmlFor="name" className="label">
									Name
								</label>
							</div>

							<div className="w-[50%] h-10 rounded-md relative mt-2">
								<input
									required
									type="text"
									id="phone number"
									name="phoneNumber"
									value={formInputs.phoneNumber}
									onChange={handleChange}
									placeholder="Phone Number"
									className="w-full placeholder-transparent peer h-full px-2 bg-gray-400 shadow-md focus:outline-none"
								/>
								<label htmlFor="phone number" className="label">
									Phone Number
								</label>
							</div>
						</div>

						<div className="w-full h-10 rounded-md relative mt-2">
							<input
								required
								type="email"
								id="email"
								name="email"
								value={formInputs.email}
								onChange={handleChange}
								placeholder="Email"
								className="w-full placeholder-transparent peer h-full px-2 bg-gray-400 shadow-md focus:outline-none"
							/>
							<label htmlFor="email" className="label">
								Email
							</label>
						</div>

						<div className="w-full h-10 rounded-md relative mt-2">
							<input
								required
								type="text"
								id="subject"
								name="subject"
								value={formInputs.subject}
								onChange={handleChange}
								placeholder="Subject"
								className="w-full placeholder-transparent peer h-full px-2 bg-gray-400 shadow-md focus:outline-none"
							/>
							<label htmlFor="email" className="label">
								Subject
							</label>
						</div>

						<div className="w-full h-80 rounded-md relative mt-2">
							<textarea
								required
								id="message"
								name="message"
								value={formInputs.message}
								onChange={handleChange}
								placeholder="Message"
								className="w-full placeholder-transparent peer h-full px-2 bg-gray-400 shadow-md focus:outline-none"
							/>
							<label htmlFor="email" className="label">
								Message
							</label>
						</div>
						{isSubmitted ? (
							<div className="w-full h-12 flex items-center justify-center">
								<span className="text-base text-green-500 animate-pulse font-bold">
									Thanks! your message has been received.
								</span>
							</div>
						) : (
							<button
								type="submit"
								className="w-full h-12 hover:bg-white flex dark:bg-light dark:text-dark dark:hover:bg-white  dark:hover:text-dark items-center justify-center hover:text-dark transition-transform duration-300 ease-in-out  bg-btnLight text-white text-xl font-bold  rounded-md shadow-2xl"
							>
								Send Message
								<BiMailSend className="text-2xl ml-2" />
							</button>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};
export default Contacts;
