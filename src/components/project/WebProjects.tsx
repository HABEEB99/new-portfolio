import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { ProjectProp } from '../../../typings';
import { urlFor } from '../../utils/sanity';
import Button from '../button/Button';
import ProjectCard from './ProjectCard';

type WebProjectsProps = {
	data: Array<ProjectProp>;
};

const WebProjects: React.FC<WebProjectsProps> = ({ data }) => {
	return data.map((item) => <ProjectCard item={item} />);
};
export default WebProjects;
