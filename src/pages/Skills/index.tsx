import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/store';
import Layout from '@Components/Layout';
import "./styles.css";

const Skills = () => {
  const theme = useSelector((state: RootState) => state.ui.theme);
  return (
    <Layout id="skills">
      <div className="tag-list">
    <div className="loop-slider">
      <div className="inner" style={{ animationDuration: "15951ms", animationDirection: "normal" }}>
        <div className="tag">JavaScript</div>
        <div className="tag">webdev</div>
        <div className="tag">Typescript</div>
        <div className="tag">Next.js</div>
        <div className="tag">UI/UX</div>
        <div className="tag">JavaScript</div>
        <div className="tag">webdev</div>
        <div className="tag">Typescript</div>
        <div className="tag">Next.js</div>
        <div className="tag">UI/UX</div>
      </div>
    </div>
    <div className="loop-slider">
      <div className="inner" style={{ animationDuration: "15951ms", animationDirection: "reverse" }}>
        <div className="tag">webdev</div>
        <div className="tag">Gatsby</div>
        <div className="tag">JavaScript</div>
        <div className="tag">Tailwind</div>
        <div className="tag">Typescript</div>
        <div className="tag">webdev</div>
        <div className="tag">Gatsby</div>
        <div className="tag">JavaScript</div>
        <div className="tag">Tailwind</div>
        <div className="tag">Typescript</div>
      </div>
    </div>
    <div className="loop-slider">
      <div className="inner" style={{ animationDuration: "15951ms", animationDirection: "normal" }}>
        <div className="tag">animation</div>
        <div className="tag">Tailwind</div>
        <div className="tag">React</div>
        <div className="tag">SVG</div>
        <div className="tag">HTML</div>
        <div className="tag">animation</div>
        <div className="tag">Tailwind</div>
        <div className="tag">React</div>
        <div className="tag">SVG</div>
        <div className="tag">HTML</div>
      </div>
    </div>
    <div className={`fade ${theme}`}></div>
  </div>
    </Layout>
  );
};

export default Skills;
