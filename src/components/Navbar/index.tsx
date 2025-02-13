import * as React from 'react';
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@Store/store';
import { changeTheme } from '@Store/slices/uiSlice';
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import RoundedButton from '@Components/RoundedButton';
import ProfilePicture from '@Components/ProfilePicture';

const Navbar = () => {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  return (
    <nav className={`fixed top-0 flex justify-between text-white items-center h-16 w-screen shadow-md ${theme}`}>
      <div className="pl-8">
        <ProfilePicture />
      </div>
      <ul className="flex items-center gap-8 pr-8">
        <li className="">
          <a href="#home">Inicio</a>
        </li>
        <li className="">
          <a href="#about">Sobre mi</a>
        </li>
        <li className="">
          <a href="#projects">Proyectos</a>
        </li>
        <li className="">
          <a href="#skills">Habilidades</a>
        </li>
        <li className="">
          <RoundedButton onClick={handleThemeChange}>
            {theme === 'dark' ? <SunOutlined /> : <MoonOutlined />}
          </RoundedButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
