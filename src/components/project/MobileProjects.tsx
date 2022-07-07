import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { ProjectProp } from '../../../typings';
import { urlFor } from '../../utils/sanity';
import Button from '../button/Button';
import ProjectCard from './ProjectCard';

type MobileProjectsProps = {
	data: Array<ProjectProp>;
};

const MobileProjects: React.FC<MobileProjectsProps> = ({ data }) => {
	return data.map((item) => <ProjectCard item={item} />);
};
export default MobileProjects;
