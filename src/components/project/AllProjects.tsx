import React from "react";
import { ProjectProp } from "../../../typings";
import ProjectCard from "./ProjectCard";

type AllProjectsProps = {
  data: Array<ProjectProp>;
};

const AllProjects: React.FC<AllProjectsProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <ProjectCard item={item} />
      ))}
    </>
  );
};
export default AllProjects;
