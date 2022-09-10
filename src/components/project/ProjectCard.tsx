import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { ProjectProp } from "../../../typings";
import { urlFor } from "../../utils/sanity";
import Button from "../button/Button";

type ProjectCardProps = {
  item: ProjectProp;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <div
      key={item._id}
      className="group  w-full md:w-[18rem] lg:w-[16rem] h-80 py-6 px-3 dark:bg-dark bg-light hover:shadow-dark dark:hover:shadow-light shadow-2xl flex flex-col items-center rounded-t-xl"
    >
      <div className="relative w-40 h-40 flex self-center justify-center group-hover:scale-[1.3] transition-transform duration-100 ease-in-out ">
        <Image
          alt={item.title}
          objectFit="contain"
          src={urlFor(item.imgUrl).url()}
          layout="fill"
        />
      </div>

      <div className="flex items-center flex-col mt-4">
        <h1 className="font-bold text-xl text-gray-700 dark:text-gray-200">
          {item.title}
        </h1>
        <p className="text-gray-500  text-sm">{item.description}</p>
      </div>

      <div className="flex items-center justify-between w-full mt-4">
        <Link passHref href={item.codeLink}>
          <BsGithub className="text-2xl font-bold shadow-lg  text-btnLight hover:text-white dark:text-light dark:hover:text-white cursor-pointer transition-transform duration-300 ease-in" />
        </Link>
        <Link href={item.projectUrl} passHref>
          <button className="text-sm w-24 h-8 rounded-full  text-white dark:text-dark font-bold bg-btnLight dark:bg-btnDark hover:bg-white hover:text-dark dark:hover:bg-white cursor-pointer transition-transform duration-300 ease-in">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ProjectCard;
