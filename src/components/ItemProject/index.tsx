import * as React from 'react';
import { projectType } from '@Store/slices/projectsSlice';
import RoundedButton from '@Components/RoundedButton';
import { GlobalOutlined, GithubOutlined } from '@ant-design/icons';
import "./styles.css";

interface itemProjectProps {
  project: projectType;
}

const ItemProject = (props: itemProjectProps) => {
  const { project } = props;
  return (
    <div className="flex flex-col md:flex-row items-start px-4 py-6 w-full md:w-4/5 relative fade-in">
      <figure className="w-full h-48 md:w-1/3 overflow-hidden rounded-md shadow-lg flex mb-4">
        <img src={project.img} alt={project.title} className="object-cover" />
      </figure>
      <div className="flex flex-col ml-0 md:ml-6 gap-3 w-full md:w-2/3">
        <h3 className="font-semibold text-2xl">{project.title}</h3>
        <p>{project.description}</p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-cyan-950 text-white px-4 py-2 rounded-md opacity-45 font-light text-xs">{tag}</span>
          ))}
        </div>
        <div className="flex justify-end gap-2 mt-3">
          {project.links.map((link) => (
            <RoundedButton key={link.name} onClick={() => window.open(link.url, "_blank")}>
              {link.name === "website" ? <GlobalOutlined /> : <GithubOutlined />}
            </RoundedButton>
          ))}
        </div>
      </div>
      <div className="w-full divider absolute bottom-1 left-1" />
    </div>
  );
};

export default ItemProject;
