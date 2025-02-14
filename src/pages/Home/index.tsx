import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/store';
import Layout from '@Components/Layout';
import Button from '@Components/Button';
import ProfilePicture from '@Components/ProfilePicture';
import { GithubOutlined, LinkedinOutlined, DownloadOutlined } from "@ant-design/icons";
import "./styles.css";

const Home = () => {
  const {
    title,
    name,
    github,
    linkedin,
    cvUrl
  } = useSelector((state: RootState) => state.data.data as any);

  return (
    <Layout id="home">
      <div className="flex flex-col gap-4 h-full">
        <h1 className="text-7xl md:text-9xl mt-16 text-amber-400">{title}</h1>
        <h3 className="text-4xl md:text-6xl font-medium">{name}</h3>
        <div className="flex flex-col md:flex-row gap-4 md:w-1/2 mt-32">
          <Button onClick={() => window.open(github, "_blank")}>
            <GithubOutlined />
            GitHub
          </Button>
          <Button onClick={() => window.open(linkedin, "_blank")}>
            <LinkedinOutlined />
            LinkedIn
          </Button>
          <Button onClick={() => window.open(cvUrl, "_blank")}>
            <DownloadOutlined />
            Descargar CV
          </Button>
        </div>
      </div>
      <ProfilePicture
        url="profile.jpg"
        className="md:size-80 size-40 m-16 md:m-20 flex items-center justify-center static md:absolute bottom-1 right-1 shadow-lg"
      />
    </Layout>
  );
};

export default Home;
