import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/store';
import Button from '@Components/Button';
import ProfilePicture from '@Components/ProfilePicture';
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import "./styles.css";

const Home = () => {
  const {
    title,
    name,
    github,
    linkedin,
    photo
  } = useSelector((state: RootState) => state.data.data as any);
  const theme = useSelector((state: RootState) => state.ui.theme);
  return (
    <div id="home" className={`flex flex-col md:flex-row items-center h-lvh w-full justify-between p-10 mt-16 ${theme}`}>
      <div className="flex flex-col gap-4 h-full">
        <h1 className="text-7xl mt-16">{title}</h1>
        <h3 className="text-4xl text-slate-900 font-medium">{name}</h3>
        <div className="flex gap-4 w-1/2 mt-32">
          <Button onClick={() => window.open(github, "_blank")}>
            <GithubOutlined />
            GitHub
          </Button>
          <Button onClick={() => window.open(linkedin, "_blank")}>
            <LinkedinOutlined />
            LinkedIn
          </Button>
        </div>
      </div>
      <div
        className="md:w-1/2 h-full flex md:items-end md:justify-end justify-center item-center w-full relative"
      >
        <ProfilePicture
          url={photo && `data:image/png;base64,${photo}`}
          className="md:size-80 size-40 m-16 md:m-32 flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default Home;
