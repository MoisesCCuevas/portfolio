import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/store';
import Layout from '@Components/Layout';
import ItemProject from '@Components/ItemProject';
import "./styles.css";

const Projects = () => {
  const projects = useSelector((state: RootState) => state.projects.data as any);
  return (
    <Layout id="projects">
      <h1 className="font-semibold text-3xl">Proyectos</h1>
      {projects && projects.map((project: any) => (
        <ItemProject key={project.title} project={project} />
      ))}
    </Layout>
  );
};

export default Projects;
