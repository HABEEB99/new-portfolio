import Image from "next/image";
import React from "react";
import { urlFor } from "../../utils/sanity";
import { AboutProp } from "../../../typings";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

type AboutProps = {
  aboutData: Array<AboutProp>;
};

const About: React.FC<AboutProps> = ({ aboutData }) => {
  return (
    <section className="min-h-screen pt-[11vh] py-4" id="about">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="font-bold text-2xl md:text-4xl border-b-4 border-orange-400">
          Abouts
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 italic">
          Here are the services that I offers
        </p>
      </div>

      <div className=" mt-6 md:mt-6 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center">
        {aboutData.map((item) => (
          <div
            key={item._id}
            className="group  w-full md:w-[17rem] lg:w-[16rem] h-80 py-4 px-2 dark:bg-dark bg-light hover:shadow-dark dark:hover:shadow-light shadow-2xl flex flex-col items-center rounded-t-xl"
          >
            <div className="relative w-[8rem] h-[8rem] flex self-center justify-center group-hover:scale-[1.3] transition-transform duration-100 ease-in-out ">
              <Image
                alt={item.title}
                objectFit="contain"
                src={urlFor(item.imgUrl).url()}
                layout="fill"
              />
            </div>
            <div className="flex items-center flex-col mt-4">
              <h1 className="font-bold text-lg text-gray-700 dark:text-gray-200 ">
                {item.title}
              </h1>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/cv.pdf" passHref>
          <button className="h-16 w-full md:w-60 text-2xl hover:bg-white flex dark:bg-light dark:text-dark dark:hover:bg-white  dark:hover:text-dark items-center justify-center hover:text-dark transition-transform duration-300 ease-in-out  bg-btnLight text-white font-bold  rounded-md shadow-2xl">
            <FaFileDownload className="mr-2" />
            CV
          </button>
        </Link>
      </div>
    </section>
  );
};
export default About;
