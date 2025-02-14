import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/store';
import Layout from '@Components/Layout';

const Skills = () => {
  const { about, experience } = useSelector((state: RootState) => state.data.data as any);
  return (
    <Layout id="skills">
      Skills (WIP)
    </Layout>
  );
};

export default Skills;
