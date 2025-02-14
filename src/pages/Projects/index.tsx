import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/store';
import Layout from '@Components/Layout';
import "./styles.css";

const Projects = () => {
  const { about, experience } = useSelector((state: RootState) => state.data.data as any);
  return (
    <Layout id="projects">
      Projects (WIP)
    </Layout>
  );
};

export default Projects;
