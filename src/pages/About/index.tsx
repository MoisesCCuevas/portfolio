import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/store';
import { ExperienceType } from '@Store/slices/dataSlice';
import Layout from '@Components/Layout';
import "./styles.css";

const About = () => {
  const { about, experience } = useSelector((state: RootState) => state.data.data as any);
  return (
    <Layout id="about">
      <div className="w-full md:w-1/2 flex flex-col gap-4 pr-4">
        <h1 className="font-semibold text-3xl">Sobre mi</h1>
        <p className="font-light text-lg">
          {about}
        </p>
        <br />
      </div>
      <div className="w-full md:w-1/2 flex h-fit flex-col gap-4">
        <h1 className="font-semibold text-3xl">Experiencia</h1>
        {experience && experience.map((exp: ExperienceType) => (
          <p className=" flex flex-col font-light text-lg" key={exp.company}>
            <span className="font-medium">{exp.position}</span>
            <span className="font-medium">{exp.company}</span>
            <span className="text-gray-400">{exp.startDate} - {exp.endDate}</span>
            <br />
            {exp.description}
          </p>
        ))}
      </div>
    </Layout>
  );
};

export default About;
