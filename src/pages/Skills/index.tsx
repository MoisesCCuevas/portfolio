import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/store';
import { skillType } from '@Store/slices/skillsSlice';
import Layout from '@Components/Layout';
import ListSkills from '@Components/ListSkills';
import "./styles.css";


const Skills = () => {
  const skills = useSelector((state: RootState) => state.skills.data as any);
  return (
    <Layout id="skills">
      <h1 className="font-semibold text-3xl gradient-animation">Habilidades</h1>
      <div className="w-full md:w-2/3 flex shrink flex-col gap-4 relative px-0 py-2 overflow-hidden">
        {Object.values(skills).map((skill: skillType[], index:  number) => (
          <ListSkills
            key={index}
            skills={skill}
            direction={index % 2 === 0 ? "normal" : "reverse"}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Skills;
