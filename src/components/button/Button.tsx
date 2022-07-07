import React, { ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
	className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className }) => {
	return (
		<button
			className={` hover:bg-white flex dark:bg-light dark:text-dark dark:hover:bg-white  dark:hover:text-dark items-center justify-center hover:text-dark transition-transform duration-300 ease-in-out  bg-btnLight text-white text-xl font-bold  rounded-md shadow-2xl ${className}`}
		>
			{children}
		</button>
	);
};
export default Button;
