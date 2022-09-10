import React from "react";
import { ProjectProp } from "../../../typings";
import ProjectCard from "./ProjectCard";

type WebProjectsProps = {
  data: Array<ProjectProp>;
};

const WebProjects: React.FC<WebProjectsProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <ProjectCard item={item} />
      ))}
    </>
  );
};
export default WebProjects;
