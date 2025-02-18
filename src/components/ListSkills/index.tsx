import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/store';
import { skillType } from '@Store/slices/skillsSlice';
import "./styles.css";

interface ListSkillsProps {
  skills: skillType[];
  direction: "normal" | "reverse";
}

const ListSkills = (props: ListSkillsProps) => {
  const { skills, direction } = props;
  const theme = useSelector((state: RootState) => state.ui.theme);
  const nexSkills = skills.concat(skills,skills);
  return (
    <div className="">
      <div className="">
        <div className="inner" style={{ animationDuration: "30000ms", animationDirection: direction }}>
          {nexSkills.length > 0 && nexSkills.map((skill, index) => (
            <div
              key={index+skill.name}
              className={`flex items-center rounded-md px-4 py-4 mr-4 shadow-md tag ${theme}`}
            >
              <figure className="size-24 flex items-center justify-center">
                <img
                  src={skill.img}
                  alt={index+skill.name}
                  title={skill.name}
                  className="object-cover"
                  style={{
                    filter: `drop-shadow(0 0 1.5rem ${skill.color})`,
                  }} />
              </figure>
            </div>
          ))}
        </div>
      </div>
      <div className={`fade ${theme}`} />
    </div>
  );
};

export default ListSkills;
