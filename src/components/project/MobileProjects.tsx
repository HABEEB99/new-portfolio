import React from "react";
import { ProjectProp } from "../../../typings";
import ProjectCard from "./ProjectCard";

type MobileProjectsProps = {
  data: Array<ProjectProp>;
};

const MobileProjects: React.FC<MobileProjectsProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <ProjectCard item={item} />
      ))}
    </>
  );
};
export default MobileProjects;
